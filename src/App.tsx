import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import {RootStoreContext} from "./stores/root-store-context.ts";
import RootStore from "./stores/root-store.ts";

function App() {
    return (
        <RootStoreContext.Provider value={new RootStore()}>
            <MantineProvider>
                123
            </MantineProvider>
        </RootStoreContext.Provider>
    );
}

export default App;
