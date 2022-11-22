import { Relationship, RelationshipTypes } from "./relationship";

export enum ResponseResult {
	ok = "ok",
	error = "error",
}

export enum ResponseType {
	entity = "entity",
	collection = "collection",
}

export enum Conditional {
	AND,
	OR,
}

export enum ConditionalBoolean {
	true = "true",
	false = "false",
}

export enum Sort {
	asc = "asc",
	desc = "desc",
}

export enum State {
	published = "published",
	draft = "draft",
	rejected = "rejected",
}

export enum CustomListVisibility {
	public = "public",
	private = "private",
}

/**
 * Special kind of entry,
 * typically used inside relationships.
 *
 * Doesn't contain nested `relationship` field and `attributes` field.
 */
export interface DummyEntry<Type extends RelationshipTypes> {
	id: string;
	type: Type;
}

/**
 * This is the usual type of entry,
 * used in titles and such.
 *
 * Contains a `relationship` field.
 *
 * `RelatedType` should contain the types {@link Relationship.related} contain,
 *  eg: {@link Manga} should have {@link MangaRelated}
 */
export interface Entry<Type extends RelationshipTypes, Attributes, RelatedType>
	extends DummyEntry<Type> {
	attributes: Attributes;
	relationships: Relationship<RelatedType>[];
}

export interface BaseResponse {
	result: ResponseResult.ok;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Entity<Data extends Entry<any, any, any>> extends BaseResponse {
	response: ResponseType.entity;
	data: Data;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Collection<Data extends Entry<any, any, any>> extends BaseResponse {
	response: ResponseType.collection;
	data: Array<Data>;
	limit: number;
	offset: number;
	total: number;
}
