import { Action } from "@ngrx/store";
import { Album } from "../model/album.model";

export enum AlbumsActionsTypes{
    GET_ALL_ALBUMS = "Ask all albums",
    GET_ALL_ALBUMS_SUCCESS = "Get all albums success",
    GET_ALL_ALBUMS_ERROR = "Get all albums error"
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
export type AlbumsActions = GetAllAlbumsAction | GetAllAlbumsSuccessAction | GetAllAlbumsErrorAction;