import { getMangaByUUID, queryManga } from "./manga";
import { ResponseType, DexLocales } from "@dexutils/typings";

const DEFAULT_MANGA_UUID = "f9c33607-9180-4ba6-b85c-e4b5faee7192";

describe("manga", () => {
	it("should get a manga by uuid", async () => {
		const manga = await getMangaByUUID(DEFAULT_MANGA_UUID);

		expect(manga.response).toBe(ResponseType.entity);
		expect(manga.data.id).toBe(DEFAULT_MANGA_UUID);
		expect(manga.data.attributes.title[DexLocales.English]).toBeDefined();
	});
	it("should query manga ids", async () => {
		const manga = await queryManga({ "ids[]": [DEFAULT_MANGA_UUID] });

		expect(manga.response).toBe(ResponseType.collection);
		expect(manga.data[0].id).toBe(DEFAULT_MANGA_UUID);
		expect(manga.total).toBe(1);
		expect(manga.data.length).toBe(1);
	});
});
