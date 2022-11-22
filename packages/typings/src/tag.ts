import { Entry } from "./common";
import { RelationshipTypes } from "./relationship";
import { DexLocalizedString } from "./lang";

export interface TagAttributes<Group> {
	name: DexLocalizedString;
	description: DexLocalizedString[];
	group: Group;
	version: number;
}

export type Tag<Group> = Entry<RelationshipTypes.tag, TagAttributes<Group>, undefined>;
