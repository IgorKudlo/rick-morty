import {ChangeEvent, useEffect, useState} from "react";
import {TextInput, Radio, Group, Select} from '@mantine/core';
import {CharacterGender, CharacterStatus} from "@/stores/characters-type.ts";
import {useStores} from "@/stores/root-store-context.ts";
import {useDebounce} from "@/hooks/useDebounce.ts";
import styles from './styles.module.css';

function Filters() {
    const { charactersStore, paginationStore } = useStores();
    const [name, setName] = useState('');
    const debouncedValue = useDebounce(name);
    const [status, setStatus] = useState('All');
    const [gender, setGender] = useState('All');

    const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const changeStatusHandler = (value: string) => {
        setStatus(value);
    }

    const changeGenderHandler = (value: string | null) => {
        if (value) setGender(value);
    }

    useEffect(() => {
        paginationStore.setCurrentPage(1);
        charactersStore.getAllCharacters({
            name: debouncedValue !== '' ? debouncedValue : undefined,
            status: status !== 'All' ? status as CharacterStatus : undefined,
            gender: gender !== 'All' ? gender as CharacterGender : undefined,
        });
    }, [paginationStore, debouncedValue, charactersStore, status, gender]);

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

export default Filters;