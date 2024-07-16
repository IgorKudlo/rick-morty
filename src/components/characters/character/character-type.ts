import {Character} from "../../../stores/characters-type.ts";

export type CharacterProps = Pick<Character, 'image' | 'name' | 'status'>