import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import charactersStore from "@/stores/characters-store.ts";
import { Character, CharacterStatus } from "@/stores/characters-type.ts";
import { Image, List, rem, ThemeIcon } from '@mantine/core';
import { IconCircleCheck } from "@tabler/icons-react";
import styles from "./styles.module.css";

function SingleCharacter () {
    const { characterId } = useParams();
    const [ character, setCharacter ] = useState<Character | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (characterId) {
                const res = await charactersStore.getSingleCharacter(characterId);
                if (res) setCharacter(res);
            }
        }
        fetchData();
    }, [characterId]);

    if (charactersStore.error) {
        return <h1 className={styles.error}>{charactersStore.error}</h1>;
    }

    return (
        <div className={styles.character}>
            {character && (<>
               <Image
                    h={200}
                    w="auto"
                    fit="contain"
                    className={styles.avatar}
                    src={character.image}
               />
               <List
                    spacing="xs"
                    size="sm"
                    center
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                            <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }
               >
                    <List.Item><strong>Name</strong> - {character.name}</List.Item>
                    <List.Item><strong>Gender</strong> - {character.gender}</List.Item>
                    <List.Item><strong>Species</strong> - {character.species}</List.Item>
                    <List.Item
                        icon={
                            <ThemeIcon color={character.status === CharacterStatus.Alive ? 'green' : character.status === CharacterStatus.Dead ? 'red' : 'gray'} size={24} radius="xl"></ThemeIcon>
                        }
                    >
                        <strong>Status</strong> - {character.status === CharacterStatus.Alive ? 'Alive' : character.status === CharacterStatus.Dead ? 'Dead' : 'Unknown status'}
                    </List.Item>
                </List>
            </>)}
        </div>
    );
}

export default observer(SingleCharacter);