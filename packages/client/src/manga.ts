import { MangaCollection, MangaEntity, MangaQueryParameters } from "@dexutils/typings";
import { MANGADEX_API_URL } from "./constants";

export async function getMangaByUUID(uuid: string): Promise<MangaEntity> {
	const request = await fetch(`${MANGADEX_API_URL}/manga/${uuid}`);
	return (await request.json()) as MangaEntity;
}

export async function queryManga(query: MangaQueryParameters): Promise<MangaCollection> {
	const url = new URL(`${MANGADEX_API_URL}/manga`);
	Object.entries(query).forEach(([key, value]) => {
		url.searchParams.append(key, value);
	});

	const request = await fetch(url, { method: "GET" });
	return (await request.json()) as MangaCollection;
}
