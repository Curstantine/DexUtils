import type { DexLocale, DexLocalizedString } from "./lang";
import type {
	DexBasicQueryParameters,
	DexBasicRelationship,
	DexCompleteRelationship,
	DexCondition,
	DexDataBody,
	DexDataType,
	DexOrderDirection,
	DexResponseCollection,
	DexResponseEntity,
	UUID,
} from "./common";

export type DexMangaBody = DexDataBody<DexMangaAttributes>;
export type DexMangaEntity = DexResponseEntity<DexMangaBody>;
export type DexMangaCollection = DexResponseCollection<DexMangaBody>;

export type DexMangaTagBody = DexDataBody<DexMangaTagAttributes>;

export type DexMangaRelationship = DexCompleteRelationship<DexDataType.Manga, DexMangaAttributes>;
export type DexBasicRelatedManga = DexBasicRelationship<DexDataType.Manga> & { related: DexMangaRelationType };
export type DexCompleteRelatedManga = DexCompleteRelationship<DexDataType.Manga, DexMangaAttributes> &
	DexBasicRelatedManga;

export interface DexMangaAttributes {
	title: DexLocalizedString;
	altTitles: DexLocalizedString[];
	description: DexLocalizedString;
	links: Partial<DexMangaLinks>;
	originalLanguage: DexLocale;
	lastVolume: string | null;
	lastChapter: string | null;
	publicationDemographic: DexMangaPublicationDemographic | null;
	status: DexMangaStatus;
	year: number | null;
	contentRating: DexMangaContentRating;
	tags: DexMangaTagBody[];
	state: DexMangaState;
	chapterNumbersResetOnNewVolume: boolean;
	createdAt: Date;
	updatedAt: Date;
	version: number;
	availableTranslatedLanguages: DexLocale[];
	/// UUID of the latest chapter that was uploaded. (disregards locales)
	latestUploadedChapter: string;
}

export interface DexMangaTagAttributes {
	name: DexLocalizedString;
	description: DexLocalizedString;
	group: DexMangaTagGroup;
	version: number;
}

export enum DexMangaTagGroup {
	Content = "content",
	Format = "format",
	Genre = "genre",
	Theme = "theme",
}

export interface DexMangaLinks {
	/// AniList id
	al: string;
	/// Amazon Link
	amz: string;
	/// AnimePlanet slug
	ap: string;
	/// BookWalker slug
	bw: string;
	/// MangaUpdates id
	mu: string;
	/// NovelUpdates id
	nu: string;
	/// Kitsu id
	kt: string;
	/// CDJapan Link
	cdj: string;
	/// EBookJapan Link
	ebj: string;
	/// MyAnimeList id
	mal: string;
	/// Raw Link
	raw: string;
	/// English TL Link
	engtl: string;
}

export enum DexMangaPublicationDemographic {
	Shounen = "shounen",
	Shoujo = "shoujo",
	Josei = "josei",
	Seinen = "seinen",
}

export enum DexMangaStatus {
	Ongoing = "ongoing",
	Completed = "completed",
	Hiatus = "hiatus",
	Cancelled = "cancelled",
}

export enum DexMangaContentRating {
	Safe = "safe",
	Suggestive = "suggestive",
	Erotica = "erotica",
	Pornographic = "pornographic",
}

export enum DexMangaState {
	Draft = "draft",
	Submitted = "submitted",
	Published = "published",
	Rejected = "rejected",
}

export enum DexMangaOrder {
	Title = "title",
	Year = "year",
	CreatedAt = "createdAt",
	UpdatedAt = "updatedAt",
	LatestUploadedChapter = "latestUploadedChapter",
	FollowedCount = "followedCount",
	Relevance = "relevance",
	Rating = "rating",
}

export enum DexMangaRelationType {
	Monochrome = "monochrome",
	MainStory = "main_story",
	AdaptedFrom = "adapted_from",
	BasedOn = "based_on",
	Prequel = "prequel",
	SideStory = "side_story",
	Doujinshi = "doujinshi",
	SameFranchise = "same_franchise",
	SharedUniverse = "shared_universe",
	Sequel = "sequel",
	SpinOff = "spin_off",
	AlternateStory = "alternate_story",
	AlternateVersion = "alternate_version",
	Preserialization = "preserialization",
	Colored = "colored",
	Serialization = "serialization",
}

export interface DexMangaQueryParameters extends DexBasicQueryParameters {
    "ids[]"?: UUID[];
    title?: string;
    authorOrArtist?: UUID;
    "authors[]"?: UUID[];
    "artists[]"?: UUID[];
    year?: number;
    "includedTags[]"?: UUID[];
    includedTagsMode?: DexCondition;
    "excludedTags[]"?: UUID[];
    excludedTagsMode?: DexCondition;
    status?: DexMangaStatus[];
    "originalLanguage[]"?: DexLocale[];
    "excludedOriginalLanguage[]"?: DexLocale[];
    "availableTranslatedLanguage[]"?: DexLocale[];
    "publicationDemographic[]"?: DexMangaPublicationDemographic[];
    "contentRating[]"?: DexMangaContentRating[];
    createdAtSince?: Date;
    updatedAtSince?: Date;
    order?: [DexMangaOrder, DexOrderDirection];
    hasAvailableChapters?: boolean;
    group?: UUID;
}

export interface MangaByUUIDParameters{
	uuid: string;
	"includes[]"?: DexDataType[];
}

export interface MangaAggregateParameters {
	uuid: UUID;
	"groups[]"?: UUID[];
	"translatedLanguage[]"?: DexLocale[];
}
