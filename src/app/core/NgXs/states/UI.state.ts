import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {UIActions} from '../actions/UI.actions';
import Loading = UIActions.Loading;

export class UIStateModel {
  isLoading: boolean;
}

@State<UIStateModel>({
  name: 'UI',
  defaults: {
    isLoading: false,
  },
})
@Injectable()
export class UIState {
  @Selector()
  static isLoading(state: UIStateModel) {
    return state.isLoading;
  }

  @Action(UIActions.Loading)
  setLoading(
    {getState, patchState}: StateContext<UIStateModel>,
    {loading}: Loading
  ) {
    patchState({
      isLoading: loading,
    });
  }
}
