import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { Action } from "@ngrx/store";
import { AlbumsActionsTypes, GetAllAlbumsErrorAction, GetAllAlbumsSuccessAction } from "./albums.actions";

@Injectable()
export class AlbumsEffects {
    constructor(private apiService : ApiService, private effectActions : Actions){
    }
    getAllAlbumsEffects : Observable<Action> = createEffect(
        () => this.effectActions.pipe(
            ofType(AlbumsActionsTypes.GET_ALL_ALBUMS),
            mergeMap((action)=> {
                return this.apiService.getAllAlbums().pipe(
                    map((albums) => new GetAllAlbumsSuccessAction(albums)),
                    catchError((err)=> of(new GetAllAlbumsErrorAction(err.message)))
                    )
            }
            )
        )
    )
}