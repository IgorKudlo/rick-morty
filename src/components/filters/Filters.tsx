import {TextInput, Radio, Group, Select} from '@mantine/core';
import styles from './styles.module.css';
import {CharacterGender, CharacterStatus} from "@/stores/characters-type.ts";

function Filters() {
    return (
        <div className={styles.filters}>
            <TextInput
                label="Name"
                placeholder="Type name"
            />
            <Radio.Group
                name="characterStatus"
                label="Select character status"
            >
                <Group mt="xs">
                    <Radio value={'All'} label={'All'} />
                    <Radio value={CharacterStatus.Alive} label={CharacterStatus.Alive} />
                    <Radio value={CharacterStatus.Dead} label={CharacterStatus.Dead} />
                    <Radio value={CharacterStatus.UnknownStatus} label={CharacterStatus.UnknownStatus} />
                </Group>
            </Radio.Group>
            <Select
                label="Gender"
                placeholder="Select character gender"
                data={[CharacterGender.male, CharacterGender.female, CharacterGender.genderless, CharacterGender.unknownGender]}
            />
        </div>
    );
}

export default Filters;