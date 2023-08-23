import { MusicalGenre } from "./musicalgenre.model";

export class Album {
    id : number;
    albumName : string;
    bandName: string;
    releaseYear: number;
    musicalGenre : MusicalGenre;
    constructor(id : number, albumName : string, bandName: string, releaseYear: number, musicalGenre : MusicalGenre){
        this.id = id;
        this.albumName = albumName;
        this.bandName = bandName;
        this.releaseYear = releaseYear;
        this.musicalGenre = musicalGenre;
    }
}
