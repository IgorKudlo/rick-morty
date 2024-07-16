import { RootStoreContext } from "@/stores/root-store-context.ts";
import RootStore from "@/stores/root-store.ts";
import Characters from "@/components/characters/Characters.tsx";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import styles from "./styles.module.css";

function App() {
    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <MantineProvider>
                <div className={styles.app}>
                    <Characters />
                </div>
            </MantineProvider>
        </RootStoreContext.Provider>
    );
}

export default App;
