import { useEffect } from 'react';
import { useStores } from "@/stores/root-store-context.ts";
import { Loader } from "@mantine/core";
import Character from "./character/Character.tsx";
import styles from "./styles.module.css";
import {observer} from "mobx-react-lite";

function Characters() {
    const { charactersStore: { getAllCharacters, characters, isLoading } } = useStores();

    useEffect(() => {
        getAllCharacters();
    }, [getAllCharacters]);

    if (isLoading) {
        return <Loader className={styles.loader} color="blue" />;
    }

    return (
        <div className={styles.characters}>
            {characters.map((character) => (
                <Character key={character.id} id={character.id} image={character.image} name={character.name} status={character.status} />
            ))}
        </div>
    );
}

export default observer(Characters);