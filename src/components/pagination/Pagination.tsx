import { Pagination as PaginationMantine } from '@mantine/core';
import { observer } from "mobx-react-lite";
import { useStores } from "@/stores/root-store-context.ts";
import { CharacterGender, CharacterStatus } from "@/stores/characters-type.ts";

function Pagination() {
    const { paginationStore, filtersStore, charactersStore } = useStores();

    const onChangeHandler = (page: number) => {
        paginationStore.setCurrentPage(page);
        charactersStore.getCharacters({
            page,
            name: filtersStore.name !== '' ? filtersStore.name : undefined,
            status: filtersStore.status !== 'All' ? filtersStore.status as CharacterStatus : undefined,
            gender: filtersStore.gender !== 'All' ? filtersStore.gender as CharacterGender : undefined,
        });
    }

    return (
        <PaginationMantine total={paginationStore.totalPages} value={paginationStore.currentPage} onChange={onChangeHandler} />
    );
}

export default observer(Pagination);