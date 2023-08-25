import { Action } from "@ngrx/store";
import { Album } from "../model/album.model";

export enum AlbumsActionsTypes{
    GET_ALL_ALBUMS = "Ask all albums",
    GET_ALL_ALBUMS_SUCCESS = "Get all albums success",
    GET_ALL_ALBUMS_ERROR = "Get all albums error",
    
    GET_ALBUMS_BY_ID_MUSIC = "Ask albums by Id music",
    GET_ALBUMS_BY_ID_MUSIC_SUCCESS = "Get albums by Id music success",
    GET_ALBUMS_BY_ID_MUSIC_ERROR = "Get albums by Id music error",

}
export class GetAllAlbumsAction implements Action {
    type : AlbumsActionsTypes = AlbumsActionsTypes.GET_ALL_ALBUMS;
    constructor(public payload : any){}
}
export class GetAllAlbumsSuccessAction implements Action{
    type :AlbumsActionsTypes = AlbumsActionsTypes.GET_ALL_ALBUMS_SUCCESS;
    constructor (public payload : Album[]){}
}
export class GetAllAlbumsErrorAction implements Action{
    type : AlbumsActionsTypes = AlbumsActionsTypes.GET_ALL_ALBUMS_ERROR;
    constructor(public payload : string){}
}
export class GetAlbumsByIdMusicAction implements Action{
    type : AlbumsActionsTypes = AlbumsActionsTypes.GET_ALBUMS_BY_ID_MUSIC;
    constructor(public payload : number){}
}
export class GetAlbumsByIdMusicSuccessAction implements Action{
    type : AlbumsActionsTypes = AlbumsActionsTypes.GET_ALBUMS_BY_ID_MUSIC_SUCCESS;
    constructor(public payload : Album[]){}
}
export class GetAlbumsByIdMusicErrorAction implements Action{
    type : AlbumsActionsTypes = AlbumsActionsTypes.GET_ALBUMS_BY_ID_MUSIC_ERROR;
    constructor(public payload : string){}
}
export type AlbumsActions = GetAllAlbumsAction | GetAllAlbumsSuccessAction | GetAllAlbumsErrorAction | GetAlbumsByIdMusicAction | GetAlbumsByIdMusicSuccessAction | GetAlbumsByIdMusicErrorAction;