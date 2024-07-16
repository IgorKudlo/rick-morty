import CharactersStore from "./characters-store.ts";
import PaginationStore from "./pagination-store.ts";

class RootStore {
    charactersStore = CharactersStore
    paginationStore = PaginationStore
}

export default RootStore;