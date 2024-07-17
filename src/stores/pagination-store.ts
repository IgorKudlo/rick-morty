import { makeAutoObservable } from "mobx";
import charactersStore from "@/stores/characters-store.ts";

class PaginationStore {
    totalPages: number = 1;
    currentPage: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentPage(page: number) {
        this.currentPage = page;
        charactersStore.getAllCharacters({ page });
    }

    setTotalPages(totalPages: number) {
        this.totalPages = totalPages;
    }
}

export default new PaginationStore();