import { test } from "uvu";
import * as assert from "uvu/assert";

import { createMangaQueryURL, createMangaURLByUUID, getMangaByUUID, queryManga } from "../src/manga.js";
import {
	DexAuthorRelationship,
	DexDataType,
	DexLocale,
	DexMangaOrder,
	DexOrderDirection,
	DexResponseType,
} from "../src/types/index.js";

const DEFAULT_MANGA_UUID = "f9c33607-9180-4ba6-b85c-e4b5faee7192";
const DEFAULT_INCLUDES = [DexDataType.Artist, DexDataType.Author];
const DEFAULT_ORDER: [DexMangaOrder, DexOrderDirection] = [DexMangaOrder.Year, DexOrderDirection.Descending];

test("should create the right url", () => {
	const um = createMangaURLByUUID({ uuid: DEFAULT_MANGA_UUID });
	const ium = createMangaURLByUUID({ uuid: DEFAULT_MANGA_UUID, includes: DEFAULT_INCLUDES });
	const isum = createMangaURLByUUID({
		uuid: DEFAULT_MANGA_UUID,
		includes: [DEFAULT_INCLUDES[0]],
	});
	const iesum = createMangaURLByUUID({ uuid: DEFAULT_MANGA_UUID, includes: [] });

	assert.equal(um.pathname, `/manga/${DEFAULT_MANGA_UUID}`);
	assert.equal(decodeURIComponent(ium.search), "?includes[]=artist&includes[]=author");
	assert.equal(decodeURIComponent(isum.search), "?includes[]=artist");
	assert.equal(decodeURIComponent(iesum.search), "");

	const qm = createMangaQueryURL({});
	const tqm = createMangaQueryURL({ title: "Test" });
	const lqm = createMangaQueryURL({ title: "Test", limit: 10 });
	const oqm = createMangaQueryURL({ title: "Test", order: DEFAULT_ORDER });

	assert.equal(qm.pathname, "/manga");
	assert.equal(tqm.search, "?title=Test");
	assert.equal(lqm.search, "?title=Test&limit=10");
	assert.equal(decodeURIComponent(oqm.search), "?title=Test&order[year]=desc");

	// const am = createMangaAggregateURL({ uuid: DEFAULT_MANGA_UUID });
});

test("should get a manga by uuid", async () => {
	const manga = await getMangaByUUID({
		uuid: DEFAULT_MANGA_UUID,
		includes: DEFAULT_INCLUDES,
	});
	const artists = manga.data.relationships?.filter((r) => r.type === DexDataType.Artist) as DexAuthorRelationship[];
	const authors = manga.data.relationships?.filter((r) => r.type === DexDataType.Author) as DexAuthorRelationship[];

	assert.equal(manga.response, DexResponseType.Entity);
	assert.equal(manga.data.id, DEFAULT_MANGA_UUID);
	assert.ok(manga.data.attributes.title[DexLocale.English]);
	assert.ok(artists[0].attributes);
	assert.ok(authors[0].attributes);
});

test("should query manga ids and handle sorting", async () => {
	const manga = await queryManga({
		title: "Test",
		limit: 5,
		order: DEFAULT_ORDER,
		includes: DEFAULT_INCLUDES,
	});
	console.log(manga);
	const first = manga.data[0];
	const last = manga.data[manga.data.length - 1];

	assert.equal(manga.response, DexResponseType.Collection);
	assert.ok(first.id);
	assert.equal(manga.limit, 5);
	assert.equal(manga.data.length, 5);
	assert.ok(first.attributes.year);
	assert.ok(first.attributes.year! >= last.attributes.year!);

	const artists = first.relationships?.filter((r) => r.type === DexDataType.Artist) as DexAuthorRelationship[];
	const authors = first.relationships?.filter((r) => r.type === DexDataType.Author) as DexAuthorRelationship[];

	assert.ok(artists[0].attributes);
	assert.ok(authors[0].attributes);
});

test.run();
