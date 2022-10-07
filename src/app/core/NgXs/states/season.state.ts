import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Position, Season} from '../../interfaces/season.interface';
import {SeasonActions} from '../actions/season.actions';
import {SeasonService} from '../../services/season.service';
import {tap} from 'rxjs';
import {UIActions} from '../actions/UI.actions';
import Loading = UIActions.Loading;

export class SeasonStateModel {
  seasons: Season[];
  positions: { pg_name?: Position[] };
  specialPositions: { pg_name?: Position[] };
  mobileCarriers: string[];
}

@State<SeasonStateModel>({
  name: 'Season',
  defaults: {
    seasons: [],
    positions: {pg_name: []},
    specialPositions: {pg_name: []},
    mobileCarriers: []
  },
})
@Injectable()
export class SeasonState {
  constructor(private seasonService: SeasonService, private store: Store) {
  }

  @Selector()
  static seasons(state: SeasonStateModel) {
    return state.seasons;
  }

  @Selector()
  static positions(state: SeasonStateModel) {
    return state.positions;
  }

  @Selector()
  static specialPositions(state: SeasonStateModel) {
    return state.specialPositions;
  }

  @Selector()
  static mobileCarriers(state: SeasonStateModel) {
    return state.mobileCarriers;
  }

  @Action(SeasonActions.GetAllSeasons)
  setLoading({getState, patchState}: StateContext<SeasonStateModel>) {
    this.store.dispatch(new Loading(true));
    this.seasonService
      .getAllSeasons()
      .pipe(
        tap(
          (response) => {
            patchState({
              seasons: response,
            });
          },
          () => {
          },
          () => {
          }
        )
      )
      .subscribe();
  }

  @Action(SeasonActions.GetPositions)
  positions({ getState, patchState }: StateContext<SeasonStateModel>) {
    this.store.dispatch(new Loading(true));
    this.seasonService
      .getPositions()
      .pipe(
        tap(
          (response) => {
            let positions = {};
            let specialPositions = {};
            response.forEach((value, index, array) => {
              if (
                value.side_of_ball.toLowerCase() === 'o' ||
                value.side_of_ball.toLowerCase() === 'd'
              ) {
                positions[value.pg_name] = value.positions;
              } else {
                specialPositions[value.pg_name] = value.positions;
              }
            });
            patchState({
              positions: positions,
              specialPositions: specialPositions,
            });
            console.log(getState());
          },
          () => {
          },
          () => {
          }
        )
      )
      .subscribe();
  }

  @Action(SeasonActions.GetMobileCarriers)
  mobileCarriers({getState, patchState}: StateContext<SeasonStateModel>) {
    this.store.dispatch(new Loading(true));
    this.seasonService
      .getMobileCarriers()
      .pipe(
        tap(
          (response) => {
            patchState({
              mobileCarriers: response,
            });
          },
          () => {
          },
          () => {
          }
        )
      )
      .subscribe();
  }

}

