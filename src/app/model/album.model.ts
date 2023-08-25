import { MusicalGenre } from "./musicalgenre.model";

export interface Album {
    id : number;
    albumName : string;
    bandName: string;
    releaseYear: number;
    musicalGenre : MusicalGenre;
}
