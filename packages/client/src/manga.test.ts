import { getMangaByUUID } from "./manga";

const DEFAULT_MANGA_UUID = "f9c33607-9180-4ba6-b85c-e4b5faee7192";

describe("manga", () => {
	it("should get a manga by uuid", async () => {
		const manga = await getMangaByUUID(DEFAULT_MANGA_UUID);
		expect(manga.data.id).toBe(DEFAULT_MANGA_UUID);
	});
});
