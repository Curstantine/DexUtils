import type { DexLocalizedString } from "./lang.js";
import type {
	DexCompleteRelationship,
	DexDataBody,
	DexDataType,
	DexResponseCollection,
	DexResponseEntity,
} from "./common.js";

export type DexAuthorBody = DexDataBody<DexAuthorAttributes>;
export type DexAuthorEntity = DexResponseEntity<DexAuthorBody>;
export type DexAuthorCollection = DexResponseCollection<DexAuthorBody>;

export type DexAuthorRelationship = DexCompleteRelationship<DexDataType.Author, DexAuthorAttributes>;

export interface DexAuthorAttributes {
	name: string;
	imageUrl: string | null;
	biography: DexLocalizedString;
	twitter: string | null;
	pixiv: string | null;
	melonBook: string | null;
	fanBox: string | null;
	booth: string | null;
	nicoVideo: string | null;
	skeb: string | null;
	fantia: string | null;
	tumblr: string | null;
	youtube: string | null;
	weibo: string | null;
	naver: string | null;
	website: string;
	createdAt: Date;
	updatedAt: Date;
	version: number;
}
