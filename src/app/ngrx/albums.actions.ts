import { Action } from "@ngrx/store";
import { Album } from "../model/album.model";

export enum AlbumsActionsTypes{
    GET_ALL_ALBUMS = "Ask all albums",
    GET_ALL_ALBUMS_SUCCESS = "Get all albums success",
    GET_ALL_ALBUMS_ERROR = "Get all albums error",
    
    GET_ALBUMS_BY_ID_MUSIC = "Ask albums by Id music",
    GET_ALBUMS_BY_ID_MUSIC_SUCCESS = "Get albums by Id music success",
    GET_ALBUMS_BY_ID_MUSIC_ERROR = "Get albums by Id music error",

    SEARCH_ALBUMS_BY_BAND_NAME ="Search albums by band name",
    SEARCH_ALBUMS_BY_BAND_NAME_SUCCESS ="Search albums by band name success",
    SEARCH_ALBUMS_BY_BAND_NAME_EROOR ="Search albums by band name error",

    GET_ALBUMS_PAGINATION = "Ask albums pagination",
    GET_ALBUMS_PAGINATION_SUCCESS = "Get albums pagination success",
    GET_ALBUMS_PAGINATION_ERROR = "Get albums pagination error",
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
export class SearchAlbumsByBandNameAction implements Action{
    type : AlbumsActionsTypes = AlbumsActionsTypes.SEARCH_ALBUMS_BY_BAND_NAME;
    constructor(public payload : string){}
}
export class SearchAlbumsByBandNameSuccessAction implements Action{
    type : AlbumsActionsTypes = AlbumsActionsTypes.SEARCH_ALBUMS_BY_BAND_NAME_SUCCESS;
    constructor(public payload : Album[]){}
}
export class SearchAlbumsByBandNameErrorAction implements Action{
    type : AlbumsActionsTypes = AlbumsActionsTypes.SEARCH_ALBUMS_BY_BAND_NAME_EROOR;
    constructor(public payload : string){}
}
export class GetAlbumsPaginationAction implements Action {
    type : AlbumsActionsTypes = AlbumsActionsTypes.GET_ALBUMS_PAGINATION;
    constructor(public payload : number){}
}
export class GetAlbumsPaginationSuccessAction implements Action {
    type : AlbumsActionsTypes = AlbumsActionsTypes.GET_ALBUMS_PAGINATION_SUCCESS;
    constructor(public payload : Album[]){}
}
export class GetAlbumsPaginationErrorAction implements Action {
    type : AlbumsActionsTypes = AlbumsActionsTypes.GET_ALBUMS_PAGINATION_ERROR;
    constructor(public payload : string){}
}
export type AlbumsActions = GetAllAlbumsAction | GetAllAlbumsSuccessAction | GetAllAlbumsErrorAction 
            | GetAlbumsByIdMusicAction | GetAlbumsByIdMusicSuccessAction | GetAlbumsByIdMusicErrorAction
            | SearchAlbumsByBandNameAction | SearchAlbumsByBandNameSuccessAction | SearchAlbumsByBandNameErrorAction
            | GetAlbumsPaginationAction | GetAlbumsPaginationSuccessAction | GetAlbumsPaginationErrorAction;