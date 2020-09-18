import { ICharacterShort } from './ICharacters.model';

export interface IEpisode {
    id: string;
    name: string;
    episode: string;
    air_date: string;
    characters: ICharacterShort;
}