import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Pagination as PaginationMantine } from '@mantine/core';
import { useStores } from "@/stores/root-store-context.ts";

function Pagination() {
    const { paginationStore, filtersStore } = useStores();

    const onChangeHandler = (page: number) => {
        paginationStore.setCurrentPage(page);
    }

    useEffect(() => {
        paginationStore.setCurrentPage(1);
    }, [paginationStore, filtersStore.name, filtersStore.status, filtersStore.gender]);

    return (
        <PaginationMantine total={paginationStore.totalPages} value={paginationStore.currentPage} onChange={onChangeHandler} />
    );
}

export default observer(Pagination);