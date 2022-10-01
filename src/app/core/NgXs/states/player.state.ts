import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Player} from '../../interfaces/player.interface';
import {PlayerActions} from '../actions/player.actions';
import {PlayerService} from '../../services/player.service';
import {tap} from 'rxjs';
import {UIActions} from '../actions/UI.actions';
import Loading = UIActions.Loading;

export class PlayerStateModel {
  playersList: Player[];
}

@State<PlayerStateModel>({
  name: 'Player',
  defaults: {
    playersList: [],
  },
})
@Injectable()
export class PlayersState {
  constructor(private playersService: PlayerService, private store: Store) {
  }

  @Selector()
  static getPlayers(state: PlayerStateModel) {
    return state.playersList;
  }

  @Action(PlayerActions.GetPlayers)
  getPlayers({getState, patchState}: StateContext<PlayerStateModel>) {
    this.store.dispatch(new Loading(true));
    this.playersService
      .getPlayers()
      .pipe(
        tap(
          (response) => {
            this.store.dispatch(new Loading(false));
            patchState({
              playersList: response.results,
            });
          },
          () => {
          }
        )
      )
      .subscribe();
  }
}
