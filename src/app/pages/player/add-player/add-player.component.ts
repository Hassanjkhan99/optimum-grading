import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Season} from '../../../core/interfaces/season.interface';
import {SeasonState} from '../../../core/NgXs/states/season.state';
import {SeasonActions} from '../../../core/NgXs/actions/season.actions';
import {NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {InlineSVGModule} from 'ng-inline-svg-2';
import {TabsComponent} from '../../../core/components/tabs/tabs.component';
import GetAllSeasons = SeasonActions.GetAllSeasons;

@Component({
  selector: 'optimum-grading-add-player',
  standalone: true,
  imports: [
    CommonModule,
    NgbNavModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbTooltipModule,
    FormsModule,
    TabsComponent,
  ],
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPlayerComponent implements OnInit {
  activeTab: number = 0;
  @Select(SeasonState.seasons) seasons$: Observable<Season[]>;

  addPlayer = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    jersey: new FormControl(0),
    email: new FormControl(''),
    type: new FormControl(''),
    phone: new FormControl(''),
    types: new FormControl(''),
    carrier: new FormControl(''),
  });

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllSeasons());
  }

  setActiveTab(tabId: number) {
    this.activeTab = tabId;
  }
}
