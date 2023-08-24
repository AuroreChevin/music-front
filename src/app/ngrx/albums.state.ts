import { Album } from "../model/album.model";

export enum AlbumsStateEnum{
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}
export interface AlbumsState{
    albums : Album[],
    errorMessage : string,
    dataState : AlbumsStateEnum
}
export const initState : AlbumsState = {
    albums : [],
    errorMessage : "",
    dataState : AlbumsStateEnum.INITIAL
}