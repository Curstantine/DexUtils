import { request } from "undici";
import { MangaCollection, MangaEntity, MangaQueryParameters } from "@dexutils/typings";
import { MANGADEX_API_URL } from "./constants";

export async function getMangaByUUID(uuid: string): Promise<MangaEntity> {
	const { body } = await request(`${MANGADEX_API_URL}/manga/${uuid}`);
	return await body.json();
}

export async function queryManga(query: MangaQueryParameters): Promise<MangaCollection> {
	const url = new URL(`${MANGADEX_API_URL}/manga`);
	Object.entries(query).forEach(([key, value]) => {
		url.searchParams.append(key, value);
	});

	const { body } = await request(url, { method: "GET" });
	return await body.json();
}
