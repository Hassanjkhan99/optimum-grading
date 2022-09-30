import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Season} from '../../interfaces/season.interface';
import {SeasonActions} from '../actions/season.actions';
import {SeasonService} from '../../services/season.service';
import {tap} from 'rxjs';

export class SeasonStateModel {
  seasons: Season[];
}

@State<SeasonStateModel>({
  name: 'Season',
  defaults: {
    seasons: [],
  },
})
@Injectable()
export class SeasonState {
  constructor(private seasonService: SeasonService) {}

  @Selector()
  static seasons(state: SeasonStateModel) {
    return state.seasons;
  }

  @Action(SeasonActions.GetAllSeasons)
  setLoading({ getState, patchState }: StateContext<SeasonStateModel>) {
    this.seasonService
      .getAllSeasons()
      .pipe(
        tap(
          (response) => {
            patchState({
              seasons: response,
            });
          },
          () => {},
          () => {}
        )
      )
      .subscribe();
  }
}
