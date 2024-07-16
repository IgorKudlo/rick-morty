import { RootStoreContext } from "@/stores/root-store-context.ts";
import RootStore from "@/stores/root-store.ts";
import Characters from "@/components/characters/Characters.tsx";
import '@mantine/core/styles.css';
import styles from "./styles.module.css";

function App() {
    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <div className={styles.app}>
                <Characters />
            </div>
        </RootStoreContext.Provider>
    );
}

export default App;
