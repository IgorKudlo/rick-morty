import { Pagination as PaginationMantine } from '@mantine/core';
import { observer } from "mobx-react-lite";
import { useStores } from "@/stores/root-store-context.ts";

function Pagination() {
    const { paginationStore } = useStores();

    const onChangeHandler = (page: number) => paginationStore.setCurrentPage(page)

    return (
        <PaginationMantine total={paginationStore.totalPages} value={paginationStore.currentPage} onChange={onChangeHandler} />
    );
}

export default observer(Pagination);