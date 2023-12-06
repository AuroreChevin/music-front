import { Action } from "@ngrx/store";
import { AlbumsState, AlbumsStateEnum, initState } from "./albums.state";
import { AlbumsActions, AlbumsActionsTypes } from "./albums.actions";

export function AlbumsReducer(state : AlbumsState = initState, action : Action){
    switch(action.type){
        case AlbumsActionsTypes.GET_ALL_ALBUMS:
            return{...state, dataState : AlbumsStateEnum.LOADING}
        case AlbumsActionsTypes.GET_ALL_ALBUMS_SUCCESS:
            return{...state, dataState : AlbumsStateEnum.LOADED, albums : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.GET_ALL_ALBUMS_ERROR:
            return{...state, dataState : AlbumsStateEnum.ERROR, errorMessage : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.GET_ALBUMS_BY_ID_MUSIC:
            return{...state, dataState : AlbumsStateEnum.LOADING}
        case AlbumsActionsTypes.GET_ALBUMS_BY_ID_MUSIC_SUCCESS:
            return{...state, dataState : AlbumsStateEnum.LOADED, albums : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.GET_ALBUMS_BY_ID_MUSIC_ERROR:
            return{...state, dataState : AlbumsStateEnum.ERROR, errorMessage : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.SEARCH_ALBUMS_BY_BAND_NAME:
            return{...state, dataState : AlbumsStateEnum.LOADING}
        case AlbumsActionsTypes.SEARCH_ALBUMS_BY_BAND_NAME_SUCCESS:
            return{...state, dataState : AlbumsStateEnum.LOADED, albums : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.SEARCH_ALBUMS_BY_BAND_NAME_EROOR:
            return{...state, dataState : AlbumsStateEnum.ERROR, errorMessage : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.GET_ALBUMS_PAGINATION:
                return{...state, dataState : AlbumsStateEnum.LOADING} 
        case AlbumsActionsTypes.GET_ALBUMS_PAGINATION_SUCCESS:
            return{...state, dataState : AlbumsStateEnum.LOADED, albums : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.GET_ALBUMS_PAGINATION_ERROR:
            return{...state, dataState : AlbumsStateEnum.ERROR, albums : (<AlbumsActions> action).payload}
        default :
            return {...state}
    }
}