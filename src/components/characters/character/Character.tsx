import { Card, Image, Text, Button } from "@mantine/core";
import {CharacterProps} from "./character-type.ts";
import styles from "./styles.module.css"
import {Link} from "react-router-dom";

function Character(props: CharacterProps) {
    const { id, image, name, status } = props;

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

            <Button component={Link} to={`character/${id}`} color="blue" fullWidth mt="md" radius="md">
                More information
            </Button>
        </Card>
    );
}

export default Character;