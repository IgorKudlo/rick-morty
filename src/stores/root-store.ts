import CharactersStore from "./characters-store.ts";
import PaginationStore from "./pagination-store.ts";
import FiltersStore from "@/stores/filters-store.ts";

class RootStore {
    charactersStore = CharactersStore
    paginationStore = PaginationStore
    filtersStore = FiltersStore
}

export default RootStore;