import Characters from "@/components/characters/Characters.tsx";
import Pagination from "@/components/pagination/Pagination.tsx";
import Filters from "@/components/filters/Filters.tsx";
import styles from "./styles.module.css";

function CharactersPage() {
    return (
        <div className={styles.characters}>
            <Filters />
            <Characters />
            <Pagination />
        </div>
    );
}

export default CharactersPage;