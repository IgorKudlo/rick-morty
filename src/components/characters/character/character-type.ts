import {Character} from "@/stores/characters-type.ts";

export type CharacterProps = Pick<Character, 'id' | 'image' | 'name' | 'status' | 'species' | 'type' | 'gender'>