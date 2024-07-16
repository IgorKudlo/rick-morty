import { makeAutoObservable } from "mobx";
import charactersStore from "@/stores/characters-store.ts";

class PaginationStore {
    totalPages: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentPage(page: number) {
        charactersStore.getAllCharacters({ page });
    }

    setTotalPages(totalPages: number) {
        this.totalPages = totalPages;
    }
}

export default new PaginationStore();