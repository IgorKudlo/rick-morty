import {TextInput, Radio, Group, Select} from '@mantine/core';
import styles from './styles.module.css';
import {CharacterGender, CharacterStatus} from "@/stores/characters-type.ts";
import {useStores} from "@/stores/root-store-context.ts";
import {useDebounce} from "@/hooks/useDebounce.ts";
import {ChangeEvent, useEffect, useState} from "react";

function Filters() {
    const { charactersStore } = useStores();
    const [name, setName] = useState('');
    const debouncedValue = useDebounce(name);

    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    useEffect(() => {
        charactersStore.getAllCharacters({name: debouncedValue})
    }, [debouncedValue, charactersStore]);

    return (
        <div className={styles.filters}>
            <TextInput
                label="Name"
                placeholder="Type name"
                onChange={changeNameHandler}
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
                data={['All', CharacterGender.male, CharacterGender.female, CharacterGender.genderless, CharacterGender.unknownGender]}
            />
        </div>
    );
}

export default Filters;