import { BandName } from "./band-name.model";
import { MusicalGenre } from "./musicalgenre.model";

export interface Album {
    id : number;
    albumName : string;
    releaseYear: number;
    musicalGenre : MusicalGenre;
    bandName: BandName;
}
