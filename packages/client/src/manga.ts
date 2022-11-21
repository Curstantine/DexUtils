import { MangaEntity } from "@dexutils/typings";
import { MANGADEX_API_URL } from "./constants";
import { request } from "undici";

export async function getMangaByUUID(uuid: string): Promise<MangaEntity> {
	const { body } = await request(`${MANGADEX_API_URL}/manga/${uuid}`);
	return await body.json();
}
