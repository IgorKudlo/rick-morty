import { Card, Image, Text, Button } from "@mantine/core";
import {CharacterProps} from "./character-type.ts";
import styles from "./styles.module.css"

function Character(props: CharacterProps) {
    const { image, name, status } = props;

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section className={styles.media}>
                <Image
                    src={image}
                    height={160}
                    alt=""
                />
            </Card.Section>
            <Text>
                {name}
            </Text>

            <Text className={styles.status}>
                {status}
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
                More information
            </Button>
        </Card>
    );
}

export default Character;