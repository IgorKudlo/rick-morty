import {instance} from "./common.api.ts";
import {Character, CharactersResponse} from "../stores/characters-type.ts";

export const charactersAPI = {
    getAllCharacters() {
        return instance.get<CharactersResponse>('/character');
    },
    getSingleCharacter(id: string) {
        return instance.get<Character>(`/character/${id}`);
    }
}