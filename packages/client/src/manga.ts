import type {
	DexMangaCollection,
	DexMangaEntity,
	DexMangaQueryParameters,
	MangaAggregateParameters,
	MangaByUUIDParameters
} from "@dexutils/typings";
import { MANGADEX_API_URL } from "./constants";
import { encodeParams } from "./utils";

export async function getMangaByUUID({ uuid, includes }: MangaByUUIDParameters): Promise<DexMangaEntity> {
	const url = createMangaURLByUUID({ uuid, includes });
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
	if (includes != undefined) encodeParams(url.searchParams, "includes[]", includes);
	return url;
}

export function createMangaQueryURL(query: DexMangaQueryParameters): URL {
	const url = new URL(`${MANGADEX_API_URL}/manga`);
	Object.entries(query).forEach(([key, value]) => encodeParams(url.searchParams, key, value));
	return url;
}

export function createMangaAggregateURL({ uuid, groups, translatedLanguage }: MangaAggregateParameters): URL {
	const url = new URL(`${MANGADEX_API_URL}/manga/${uuid}/aggregate`);

	if (groups != undefined) {
		encodeParams(url.searchParams, "groups[]", groups);
	}

	if (translatedLanguage != undefined) {
		encodeParams(url.searchParams, "translatedLanguage[]", translatedLanguage);
	}

	return url;
}
