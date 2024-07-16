import {Link} from "react-router-dom";
import {Button, Card, Image, Text} from "@mantine/core";
import {CharacterProps} from "./character-type.ts";
import {CharacterStatus} from "@/stores/characters-type.ts";
import styles from "./styles.module.css"

function Character(props: CharacterProps) {
    const { id, image, name, status, species, type, gender  } = props;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section className={styles.media}>
                <Image
                    src={image}
                    height={160}
                    alt=""
                />
            </Card.Section>
            <Text>{name}</Text>
            <Text className={styles.status} c={status === CharacterStatus.Alive ? 'green' : status === CharacterStatus.Dead ? 'red' : 'gray'}>
                {status === CharacterStatus.Alive ? 'Alive' : status === CharacterStatus.Dead ? 'Dead' : 'Unknown status'}
            </Text>
            <Text>{species}</Text>
            <Text>{type}</Text>
            <Text>{gender}</Text>
            <Button component={Link} to={`character/${id}`} color="blue" fullWidth mt="md" radius="md">
                More information
            </Button>
        </Card>
    );
}

export default Character;