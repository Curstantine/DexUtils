import { State } from "../common";
import { DexLocales, DexLocalizedString } from "../lang";
import { Tag } from "../tag";
import { ContentRating, Demographic, Status } from "./enum";
import { MangaLinks } from "./extra";

export interface MangaAttributes {
	title: DexLocalizedString;
	altTitles: DexLocalizedString[];
	description: DexLocalizedString;
	isLocked: boolean;
	links: MangaLinks;
	originalLanguage: DexLocales;
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
	availableTranslatedLanguages: DexLocales[];
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
