import { ChangeEvent, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { TextInput, Radio, Group, Select } from '@mantine/core';
import { CharacterGender, CharacterStatus } from "@/stores/characters-type.ts";
import { useStores } from "@/stores/root-store-context.ts";
import { useDebounce } from "@/hooks/useDebounce.ts";
import styles from "./styles.module.css";

function Filters() {
    const { filtersStore} = useStores();
    const [name, setName] = useState('');
    const debouncedValue = useDebounce(name);

    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const changeStatusHandler = (value: string) => {
        filtersStore.setStatus(value);
    }

    const changeGenderHandler = (value: string | null) => {
        if (value) filtersStore.setGender(value);
    }

    useEffect(() => {
        filtersStore.setName(debouncedValue);
    }, [debouncedValue, filtersStore]);

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
                onChange={changeStatusHandler}
                defaultValue={'All'}
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
                onChange={changeGenderHandler}
                data={['All', CharacterGender.male, CharacterGender.female, CharacterGender.genderless, CharacterGender.unknownGender]}
            />
        </div>
    );
}

export default observer(Filters);