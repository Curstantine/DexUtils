/**
 * NOTE:
 * To denote Chapter Translation language,
 * translated fields such as Titles and Descriptions,
 * the API expects a 2-letter language code in accordance with the ISO 639-1 standard.
 *
 * Additionally, some cases require the 5-letter extension if the alpa-2 code is not sufficient
 * to determine the correct sub-type of a language,
 * in the style of `$language-$region`, e.g. zh-hk or pt-br.
 *
 * Because there is no standardized method of denoting romanized translations,
 * we chose to append the `-ro` suffix.
 * For example the romanized version of 五等分の花嫁
 * is 5Toubun no Hanayome or Gotoubun no Hanayome.
 *
 * Both would have the `ja-ro` language code,
 * alternative versions are inserted as alternative titles.
 * This is a clear distinction from
 * the localized en translation The Quintessential Quintuplets.
 */
export type DexLocalizedString = Partial<Record<DexLocale, string>>;

/**
 * MangaDex's extension of ISO6391 for romanized locales.
 *
 * NOTE: This list **DOES NOT** contain all the languages in ISO6391,
 * but lists all the languages that the MangaDex website supports.
 */
export enum DexLocale {
	"English" = "en",
	"Arabic" = "ar",
	"Azerbaijani" = "az",
	"Bengali" = "bn",
	"Bulgarian" = "bg",
	"Burmese" = "my",
	"Simplified Chinese" = "zh",
	"Traditional Chinese" = "zh-hk",
	"Romanized Chinese" = "zh-ro",
	"Croatian" = "hr",
	"Czech" = "cs",
	"Danish" = "da",
	"Dutch" = "nl",
	"Esperanto" = "eo",
	"Estonian" = "et",
	"Filipino" = "tl",
	"Finnish" = "fi",
	"French" = "fr",
	"German" = "de",
	"Greek" = "el",
	"Hebrew" = "he",
	"Hindi" = "hi",
	"Hungarian" = "hu",
	"Indonesian" = "id",
	"Italian" = "it",
	"Japanese" = "ja",
	"Romanized Japanese" = "ja-ro",
	"Kazakh" = "kk",
	"Korean" = "ko",
	"Romanized Korean" = "ko-ro",
	"Latin" = "la",
	"Lithuanian" = "lt",
	"Malay" = "ms",
	"Mongolian" = "mn",
	"Nepali" = "ne",
	"Norwegian" = "no",
	"Persian" = "fa",
	"Polish" = "pl",
	"Portuguese" = "pt",
	"Brazilian Portugese" = "pt-br",
	"Romanian" = "ro",
	"Russian" = "ru",
	"Serbian" = "sr",
	"Slovak" = "sk",
	"Castilian Spanish" = "es",
	"Latin American Spanish" = "es-la",
	"Swedish" = "sv",
	"Tamil" = "ta",
	"Thai" = "th",
	"Turkish" = "tr",
	"Ukrainian" = "uk",
	"Vietnamese" = "vi",
}
