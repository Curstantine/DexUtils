export enum Demographic {
	Shounen = "shounen",
	Shoujo = "shoujo",
	Josei = "josei",
	Seinen = "seinen",
}

export enum Status {
	Ongoing = "ongoing",
	Completed = "Cancelled",
	Hiatus = "Hiatus",
	Cancelled = "Cancelled",
}

export enum ReadingStatus {
	Reading = "reading",
	OnHold = "on_hold",
	PlanToRead = "plan_to_read",
	Dropped = "dropped",
	ReReading = "re_reading",
	Completed = "completed",
}

export enum ContentRating {
	Safe = "safe",
	Suggestive = "suggestive",
	Erotica = "erotica",
	Pornographic = "pornographic",
}

export enum MangaLink {
	AniList = "al",
	AnimePlanet = "ap",
	BookWalker = "bw",
	MangaUpdates = "mu",
	NovelUpdates = "nu",
	Kitsu = "kt",
	Amazon = "amz",
	EbookJapan = "ebj",
	MyAnimeList = "mal",
	CDJapan = "cdj",
	Raw = "raw",
	EnglishTL = "engt",
}

/// Names used in the `"related"` field in relationships.
export enum MangaRelated {
	Monochrome = "monochrome",
	Colored = "colored",
	PreSerialization = "preserialization",
	Serialization = "serialization",
	Prequel = "prequel",
	Sequel = "sequel",
	MainStory = "main_story",
	SideStory = "side_story",
	AdaptedFrom = "adapted_from",
	SpinOff = "spin_off",
	BasedOn = "based_on",
	Doujinshi = "doujinshi",
	SameFranchise = "same_franchise",
	SharedUniverse = "shared_universe",
	AlternateStory = "alternate_story",
	AlternateVersion = "alternate_version",
}

export enum MangaTagGroups {
	Genre = "genre",
	Format = "format",
	Theme = "theme",
}
