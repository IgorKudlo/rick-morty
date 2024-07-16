export type CharactersParams = {
    page?: number,
    name?: string,
    status?: CharacterStatus,
    species?: string,
    type?: string,
    gender?: CharacterGender
}

export type CharactersResponse = {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    },
    results: Characters
}

export type Characters = Character[];

export type Character = {
    id: number,
    name: string,
    status: CharacterStatus,
    species: string,
    type: string,
    gender: string,
    origin: {
        name: string,
        url: string
    },
    location: {
        name: string,
        url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: string
}

export enum CharacterStatus {
    Alive ='Alive',
    Dead = 'Dead',
    UnknownStatus = 'unknown'
}

export enum CharacterGender {
    female = 'female',
    male = 'male',
    genderless = 'genderless',
    unknownGender = 'unknown'
}