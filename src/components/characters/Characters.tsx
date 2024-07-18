import { useEffect } from 'react';
import { useStores } from "@/stores/root-store-context.ts";
import { Loader } from "@mantine/core";
import Character from "./character/Character.tsx";
import styles from "./styles.module.css";
import {observer} from "mobx-react-lite";
import {CharacterGender, CharacterStatus} from "@/stores/characters-type.ts";

function Characters() {
    const { charactersStore, filtersStore } = useStores();

    useEffect(() => {
        charactersStore.getCharacters({
            name: filtersStore.name !== '' ? filtersStore.name : undefined,
            status: filtersStore.status !== 'All' ? filtersStore.status as CharacterStatus : undefined,
            gender: filtersStore.gender !== 'All' ? filtersStore.gender as CharacterGender : undefined,
        });
    }, [charactersStore, filtersStore.name, filtersStore.status, filtersStore.gender]);

    if (charactersStore.isLoading) {
        return <Loader className={styles.loader} color="blue" />;
    }

    if (charactersStore.error) {
        return <h1>{charactersStore.error}</h1>;
    }

    return (
        <div className={styles.characters}>
            {charactersStore.characters.map((character) => (
                <Character
                    key={character.id}
                    id={character.id}
                    image={character.image}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    type={character.type}
                    gender={character.gender}
                />
            ))}
        </div>
    );
}

export default observer(Characters);