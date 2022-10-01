import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InlineSVGModule} from 'ng-inline-svg-2';
import {Select, Store} from '@ngxs/store';
import {PlayerActions} from '../../../core/NgXs/actions/player.actions';
import {Observable} from 'rxjs';
import {PlayersState} from '../../../core/NgXs/states/player.state';
import {Player} from '../../../core/interfaces/player.interface';
import {MatTableModule} from '@angular/material/table';
import GetPlayers = PlayerActions.GetPlayers;

@Component({
  selector: 'optimum-grading-player-table',
  standalone: true,
  imports: [CommonModule, InlineSVGModule, MatTableModule],
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerTableComponent implements OnInit {
  @Select(PlayersState.getPlayers) players$: Observable<Player[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPlayers());
  }
}

interface PlayerTableRow {
  avatar: string;
  firstname: string;
  lastname: string;
  roles: string[];
  pg_names: string[];
  positions: string[];
  jersey: number;
}
