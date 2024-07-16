import {makeAutoObservable} from "mobx";
import {charactersAPI} from "../api/characters.ts";
import {Characters} from "./characters-type.ts";

class CharactersStore {
    characters: Characters = [];
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    getAllCharacters = async () => {
        try {
            this.isLoading = true;
            const res = await charactersAPI.getAllCharacters();
            this.characters = res.data.results;
        } catch (error) {
            console.log(error);
        } finally {
            this.isLoading = false;
        }
    }

    getSingleCharacter(id: number) {
        return charactersAPI.getSingleCharacter(id);
    }
}

export default new CharactersStore();