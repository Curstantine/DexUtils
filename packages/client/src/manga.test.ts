import {
	createMangaAggregateURL,
	createMangaQueryURL,
	createMangaURLByUUID,
	getMangaByUUID,
	queryManga,
} from "./manga";
import {
	type DexAuthorRelationship,
	DexDataType,
	DexLocale,
	DexMangaOrder,
	DexOrderDirection,
	DexResponseType,
} from "@dexutils/typings";

const DEFAULT_MANGA_UUID = "f9c33607-9180-4ba6-b85c-e4b5faee7192";
const DEFAULT_INCLUDES = [DexDataType.Artist, DexDataType.Author];
const DEFAULT_ORDER: [DexMangaOrder, DexOrderDirection] = [DexMangaOrder.Year, DexOrderDirection.Descending];

describe("manga", () => {
	it("should create the right url", () => {
		const um = createMangaURLByUUID({ uuid: DEFAULT_MANGA_UUID });
		const ium = createMangaURLByUUID({ uuid: DEFAULT_MANGA_UUID, includes: DEFAULT_INCLUDES });
		const isum = createMangaURLByUUID({ uuid: DEFAULT_MANGA_UUID, includes: [DEFAULT_INCLUDES[0]] });
		const iesum = createMangaURLByUUID({ uuid: DEFAULT_MANGA_UUID, includes: [] });

		expect(um.pathname).toBe(`/manga/${DEFAULT_MANGA_UUID}`);
		expect(decodeURIComponent(ium.search)).toBe("?includes[]=artist&includes[]=author");
		expect(decodeURIComponent(isum.search)).toBe("?includes[]=artist");
		expect(decodeURIComponent(iesum.search)).toBe("");

		const qm = createMangaQueryURL({});
		const tqm = createMangaQueryURL({ title: "Test" });
		const lqm = createMangaQueryURL({ title: "Test", limit: 10 });
		const oqm = createMangaQueryURL({ title: "Test", order: DEFAULT_ORDER });

		expect(qm.pathname).toBe("/manga");
		expect(tqm.search).toBe("?title=Test");
		expect(lqm.search).toBe("?title=Test&limit=10");
		expect(decodeURIComponent(oqm.search)).toBe("?title=Test&order[year]=desc");

		// const am = createMangaAggregateURL({ uuid: DEFAULT_MANGA_UUID });
	});
	it("should get a manga by uuid", async () => {
		const manga = await getMangaByUUID({ uuid: DEFAULT_MANGA_UUID, includes: DEFAULT_INCLUDES });
		const artists = manga.data.relationships?.filter(
			(r) => r.type === DexDataType.Artist
		) as DexAuthorRelationship[];
		const authors = manga.data.relationships?.filter(
			(r) => r.type === DexDataType.Author
		) as DexAuthorRelationship[];

		expect(manga.response).toBe(DexResponseType.Entity);
		expect(manga.data.id).toBe(DEFAULT_MANGA_UUID);
		expect(manga.data.attributes.title[DexLocale.English]).toBeDefined();
		expect(artists[0].attributes).toBeDefined();
		expect(authors[0].attributes).toBeDefined();
	});
	it("should query manga ids and handle sorting", async () => {
		const manga = await queryManga({ title: "Test", limit: 5, order: DEFAULT_ORDER, includes: DEFAULT_INCLUDES });
		console.log(manga);
		const first = manga.data[0];
		const last = manga.data[manga.data.length - 1];

		expect(manga.response).toBe(DexResponseType.Collection);
		expect(manga.data[0].id).toBeDefined();
		expect(manga.limit).toBe(5);
		expect(manga.data.length).toBe(5);
		expect(first.attributes.year).toBeDefined();
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		expect(first.attributes.year).toBeGreaterThanOrEqual(last.attributes.year!);

		const artists = first.relationships?.filter((r) => r.type === DexDataType.Artist) as DexAuthorRelationship[];
		const authors = first.relationships?.filter((r) => r.type === DexDataType.Author) as DexAuthorRelationship[];
		expect(artists[0].attributes).toBeDefined();
		expect(authors[0].attributes).toBeDefined();
	});
});
