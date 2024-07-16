import { RootStoreContext } from "@/stores/root-store-context.ts";
import RootStore from "@/stores/root-store.ts";
import CharactersPage from "@/pages/characters-page/CharactersPage.tsx";
import '@mantine/core/styles.css';
import styles from "./styles.module.css";

function App() {
    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <div className={styles.app}>
                <CharactersPage />
            </div>
        </RootStoreContext.Provider>
    );
}

export default App;
