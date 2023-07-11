import { MANGADEX_API_URL } from "./constants.js";
import { encodeParams, encodeParam } from "./utils.js";

/**
 * @param {import("@dexutils/server-typings").MangaByUUIDParameters} params
 * @returns {Promise<import("@dexutils/server-typings").DexMangaEntity>} Single manga entity
 *
 * @see https://api.mangadex.org/docs/redoc.html#tag/Manga/operation/get-manga-id
 */
export async function getMangaByUUID(params) {
	const url = createMangaURLByUUID(params);
	const request = await fetch(url, { method: "GET" });
	return await request.json();
}

/**
 * @param {import("@dexutils/server-typings").DexMangaQueryParameters} query
 * @returns {Promise<import("@dexutils/server-typings").DexMangaCollection>}
 *
 * @see https://api.mangadex.org/docs/redoc.html#tag/Manga/operation/get-search-manga
 */
export async function queryManga(query) {
	const url = createMangaQueryURL(query);
	const request = await fetch(url, { method: "GET" });
	return await request.json();
}

/**
 * @param {import("@dexutils/server-typings").MangaByUUIDParameters} params0
 * @returns {URL}
 */
export function createMangaURLByUUID({ uuid, includes = [] }) {
	const url = new URL(`${MANGADEX_API_URL}/manga/${uuid}`);
	if (includes.length > 0) encodeParam(url.searchParams, "includes[]", includes);

	return url;
}

/**
 * @param {import("@dexutils/server-typings").DexMangaQueryParameters} query
 * @returns {URL}
 */
export function createMangaQueryURL(query) {
	const url = new URL(`${MANGADEX_API_URL}/manga`);
	encodeParams(
		url.searchParams,
		//@ts-expect-error query type is of Record<string, any> anyway
		query,
	);

	return url;
}

/**
 * @param {import("@dexutils/server-typings").MangaAggregateParameters} param0
 * @returns {URL}
 */
export function createMangaAggregateURL({ uuid, groups = [], translatedLanguage = [] }) {
	const url = new URL(`${MANGADEX_API_URL}/manga/${uuid}/aggregate`);

	if (groups.length > 0) {
		encodeParam(url.searchParams, "groups[]", groups);
	}

	if (translatedLanguage.length > 0) {
		encodeParam(url.searchParams, "translatedLanguage[]", translatedLanguage);
	}

	return url;
}
