import type {
	DexMangaCollection,
	DexMangaEntity,
	DexMangaQueryParameters,
	MangaAggregateParameters,
	MangaByUUIDParameters,
} from "./types/manga.js";
import { MANGADEX_API_URL } from "./constants.js";
import { encodeParams, encodeParam } from "./utils.js";

export async function getMangaByUUID(params: MangaByUUIDParameters): Promise<DexMangaEntity> {
	const url = createMangaURLByUUID(params);
	const request = await fetch(url, { method: "GET" });
	return (await request.json()) as DexMangaEntity;
}

export async function queryManga(query: DexMangaQueryParameters): Promise<DexMangaCollection> {
	const url = createMangaQueryURL(query);
	const request = await fetch(url, { method: "GET" });
	return (await request.json()) as DexMangaCollection;
}

export function createMangaURLByUUID({ uuid, includes }: MangaByUUIDParameters): URL {
	const url = new URL(`${MANGADEX_API_URL}/manga/${uuid}`);
	if (includes != undefined) encodeParam(url.searchParams, "includes[]", includes);
	return url;
}

export function createMangaQueryURL(query: DexMangaQueryParameters): URL {
	const url = new URL(`${MANGADEX_API_URL}/manga`);
	encodeParams(url.searchParams, query as Record<string, unknown>);
	return url;
}

export function createMangaAggregateURL({ uuid, groups, translatedLanguage }: MangaAggregateParameters): URL {
	const url = new URL(`${MANGADEX_API_URL}/manga/${uuid}/aggregate`);

	if (groups != undefined) {
		encodeParam(url.searchParams, "groups[]", groups);
	}

	if (translatedLanguage != undefined) {
		encodeParam(url.searchParams, "translatedLanguage[]", translatedLanguage);
	}

	return url;
}
