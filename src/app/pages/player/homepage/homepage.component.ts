import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Select, Store} from '@ngxs/store';
import {SeasonActions} from '../../../core/NgXs/actions/season.actions';
import {SeasonState} from '../../../core/NgXs/states/season.state';
import {Observable} from 'rxjs';
import {Season} from '../../../core/interfaces/season.interface';
import GetAllSeasons = SeasonActions.GetAllSeasons;

@Component({
  selector: 'optimum-grading-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent implements OnInit {
  @Select(SeasonState.seasons) seasons: Observable<Season[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetAllSeasons());
    this.seasons.subscribe({
      next: (value) => {
        console.log(value);
      },
    });
  }
}
