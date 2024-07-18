import {makeAutoObservable} from "mobx";
import {charactersAPI} from "../api/characters.ts";
import {Characters, CharactersParams} from "./characters-type.ts";
import PaginationStore from "@/stores/pagination-store.ts";

class CharactersStore {
    characters: Characters = [];
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    async getCharacters(params: CharactersParams = {}) {
        try {
            this.setLoading(true);
            const res = await charactersAPI.getCharacters(params);
            const { info, results } = res.data;
            this.setCharacters(results);
            PaginationStore.setTotalPages(info.pages);
        } catch (error) {
            console.log(error);
        } finally {
            this.setLoading(false);
        }
    }

    async getSingleCharacter(id: string)  {
        try {
            this.setLoading(true);
            const res = await charactersAPI.getSingleCharacter(id);
            return res.data;
        } catch (error) {
            console.log(error);
        } finally {
            this.setLoading(true);
        }
    }

    setLoading(status: boolean) {
        this.isLoading = status;
    }

    setCharacters(characters: Characters) {
        this.characters = characters;
    }
}

export default new CharactersStore();