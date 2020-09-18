import { ICharacterShort } from './ICharacters.model';

export interface ILocations {
    id: string;
    name: string;
    type: string;
    dimension: string;
    residents: ICharacterShort;
    image: string;
}

export interface ILocationsPages {
    pages: number;
    next: number;
    prev: number;

}