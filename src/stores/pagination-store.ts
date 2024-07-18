import { makeAutoObservable } from "mobx";

class PaginationStore {
    totalPages: number = 1;
    currentPage: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    setCurrentPage(page: number) {
        this.currentPage = page;
    }

    setTotalPages(totalPages: number) {
        this.totalPages = totalPages;
    }
}

export default new PaginationStore();