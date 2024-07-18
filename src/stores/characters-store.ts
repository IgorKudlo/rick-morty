import {makeAutoObservable} from "mobx";
import axios from "axios";
import {charactersAPI} from "../api/characters.ts";
import {Characters, CharactersParams} from "./characters-type.ts";
import PaginationStore from "@/stores/pagination-store.ts";

class CharactersStore {
    characters: Characters = [];
    isLoading: boolean = false;
    error = ''

    constructor() {
        makeAutoObservable(this)
    }

    async getCharacters(params: CharactersParams = {}) {
        try {
            this.setLoading(true);
            this.setError('');
            const res = await charactersAPI.getCharacters(params);
            const { info, results } = res.data;
            this.setCharacters(results);
            PaginationStore.setTotalPages(info.pages);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                this.setError(error.response?.data.error)
            } else if(error instanceof Error) {
                this.setError('An error occurred');
            }
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

    setError(error: string) {
        this.error = error;
    }

    setCharacters(characters: Characters) {
        this.characters = characters;
    }
}

export default new CharactersStore();