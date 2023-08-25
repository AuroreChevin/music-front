import { Action } from "@ngrx/store";
import { AlbumsState, AlbumsStateEnum, initState } from "./albums.state";
import { AlbumsActions, AlbumsActionsTypes } from "./albums.actions";

export function AlbumsReducer(state : AlbumsState = initState, action : Action){
    switch(action.type){
        case AlbumsActionsTypes.GET_ALL_ALBUMS:
            console.log('yeah')
            return{...state, dataState : AlbumsStateEnum.LOADING}
        case AlbumsActionsTypes.GET_ALL_ALBUMS_SUCCESS:
            console.log('youhou')
            return{...state, dataState : AlbumsStateEnum.LOADED, albums : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.GET_ALL_ALBUMS_ERROR:
            return{...state, dataState : AlbumsStateEnum.ERROR, albums : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.GET_ALBUMS_BY_ID_MUSIC:
            return{...state, dataState : AlbumsStateEnum.LOADING}
        case AlbumsActionsTypes.GET_ALBUMS_BY_ID_MUSIC_SUCCESS:
            return{...state, dataState : AlbumsStateEnum.LOADED, albums : (<AlbumsActions> action).payload}
        case AlbumsActionsTypes.GET_ALBUMS_BY_ID_MUSIC_ERROR:
            return{...state, dataState : AlbumsStateEnum.ERROR, albums : (<AlbumsActions> action).payload}
        default :
            return {...state}
    }
}