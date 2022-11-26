export type UUID = string;

export enum DexResult {
	Ok = "ok",
	Error = "error",
}

export enum DexResponseType {
	Entity = "entity",
	Collection = "collection",
}

export enum DexDataType {
	Manga = "manga",
	Chapter = "chapter",
	Author = "author",
	Artist = "artist",
	ScanlationGroup = "scanlation_group",
	Tag = "tag",
	User = "user",
	CustomList = "custom_list",
}

export enum DexCondition {
	And = "AND",
	Or = "OR",
}

export enum DexOrderDirection {
	Ascending = "asc",
	Descending = "desc",
}

export interface DexBasicResponse {
	result: DexResult;
	response: DexResponseType;
}

export interface DexResponseEntity<Data> extends DexBasicResponse {
	data: Data;
}

export interface DexResponseCollection<Data> extends DexBasicResponse {
	data: Array<Data>;
	total: number;
	limit: number;
	offset: number;
}

export interface DexDataBody<Attributes> {
	id: UUID;
	type: DexDataType;
	attributes: Attributes;
	relationships?: DexBasicRelationship[];
}

export interface DexBasicRelationship {
	id: UUID;
	type: string;
}

export interface DexBasicQueryParameters {
	limit?: number;
	offset?: number;
	includes?: DexDataType[];
}
