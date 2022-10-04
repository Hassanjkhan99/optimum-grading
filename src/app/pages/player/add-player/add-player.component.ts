import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {Season} from "../../../core/interfaces/season.interface";
import {SeasonState} from "../../../core/NgXs/states/season.state";
import {SeasonActions} from "../../../core/NgXs/actions/season.actions";
import {NgbNavModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InlineSVGModule} from "ng-inline-svg-2";
import GetAllSeasons = SeasonActions.GetAllSeasons;

type Tabs = 'Sidebar' | 'Header' | 'Toolbar';

@Component({
  selector: 'optimum-grading-add-player',
  standalone: true,
  imports: [CommonModule, NgbNavModule, ReactiveFormsModule, InlineSVGModule, NgbTooltipModule, FormsModule],
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPlayerComponent implements OnInit {
  activeTab: Tabs = 'Sidebar';
  @Select(SeasonState.seasons) seasons$: Observable<Season[]>;


  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllSeasons());
  }

  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }
}
