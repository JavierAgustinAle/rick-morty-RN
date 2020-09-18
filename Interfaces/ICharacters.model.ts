export interface ICharacters {
    id: string;
    name: string;
    image: string;
    type: string;
    gender: string;
    species: string;
    status: string;
}

export interface ICharsPages {
    pages: number;
    next: number;
    prev: number;
}

export interface ICharacterShort {
    id?: string;
    name: string;
    image: string;
}