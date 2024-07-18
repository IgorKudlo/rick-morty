import {instance} from "./common.api.ts";
import {Character, CharactersParams, CharactersResponse} from "../stores/characters-type.ts";

export const charactersAPI = {
    getCharacters(params: CharactersParams) {
        return instance.get<CharactersResponse>('/character', {
            params: {
                page: params.page,
                name: params.name,
                status: params.status,
                species: params.species,
                type: params.type,
                gender: params.gender
            }
        });
    },
    getSingleCharacter(id: string) {
        return instance.get<Character>(`/character/${id}`);
    }
}