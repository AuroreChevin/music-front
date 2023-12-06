import { BandName } from "./band-name.model";
import { MusicalGenre } from "./musicalgenre.model";

export class Album {
    id : number;
    albumName : string;
    releaseYear: number;
    musicalGenre : MusicalGenre;
    bandName: BandName;
    constructor(id : number, albumName : string, releaseYear: number, musicalGenre : MusicalGenre, bandName: BandName){
        this.id = id;
        this.albumName = albumName;
        this.releaseYear = releaseYear;
        this.musicalGenre = musicalGenre;
        this.bandName = bandName;
    }
}
