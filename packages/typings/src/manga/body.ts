import { DexLocales, DexLocalizedString } from "../lang";
import { ContentRating, Demographic, Status } from "./enum";
import { MangaLinks } from "./extra";

/**
 * Body needed to create a new title.
 */
export interface MangaCreationBody {
	title: DexLocalizedString;
	altTitles?: DexLocalizedString[];
	description?: DexLocalizedString[];
	/// Array of UUIDs
	authors?: string[];
	/// Array of UUIDs
	artists?: string[];
	links?: MangaLinks;
	originalLanguage: DexLocales;
	lastVolume?: string;
	lastChapter?: string;
	publicationDemographic?: Demographic;
	status: Status;
	year?: number;
	contentRating: ContentRating;
	chapterNumbersResetOnNewVolume?: boolean;
	/// Array of UUIDs
	tags?: string[];
	/// UUIDs
	primaryCover?: string;
	version?: number;
}

/**
 * Body needed to update a title.
 */
export interface MangaUpdateBody {
	title?: DexLocalizedString;
	altTitles?: DexLocalizedString[];
	description?: DexLocalizedString[];
	/// Array of UUIDs
	authors?: string[];
	/// Array of UUIDs
	artists?: string[];
	links?: MangaLinks;
	originalLanguage?: DexLocales;
	lastVolume?: string;
	lastChapter?: string;
	publicationDemographic?: Demographic;
	status?: Status;
	year?: number;
	contentRating?: ContentRating;
	chapterNumbersResetOnNewVolume?: boolean;
	/// Array of UUIDs
	tags?: string[];
	/// UUIDs
	primaryCover?: string;
	version: number;
}
