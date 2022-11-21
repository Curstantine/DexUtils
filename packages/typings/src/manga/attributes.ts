import { State } from "../common";
import { LanguageCodes, LocaleTitles } from "../lang";
import { Tag } from "../tag";
import { ContentRating, Demographic, Status } from "./enum";
import { MangaLinks } from "./extra";

export interface MangaAttributes {
	title: LocaleTitles;
	altTitles: LocaleTitles[];
	description: LocaleTitles;
	isLocked: boolean;
	links: MangaLinks;
	originalLanguage: LanguageCodes;
	lastVolume: string;
	lastChapter: string;
	publicationDemographic: Demographic;
	status: Status;
	year: number;
	contentRating: ContentRating;
	chapterNumbersResetOnNewVolume: boolean;
	tags: Tag<any>[];
	state: State;
	version: number;
	createdAt: Date;
	updatedAt: Date;
	availableTranslatedLanguages: LanguageCodes[];
}

/**
 * Attributes of the title returned by the server after title creation.
 */
export interface MangaCreationDraftAttributes extends MangaAttributes {
	state: State.draft;
}

/**
 * Attributes of the title returned by the server after a title is updated.
 */
export type MangaUpdateDraftAttributes = MangaCreationDraftAttributes;
