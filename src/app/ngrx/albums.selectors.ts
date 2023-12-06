import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AlbumsState } from "./albums.state";

export const selectCountAlbums = createSelector(
    createFeatureSelector('albumState'),
    (state :AlbumsState) =>{
        let  total: number =0;
        state.albums.forEach(a => {
            total++;
        }
            )
            return total;
    }
)