import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Position, Season} from '../../../core/interfaces/season.interface';
import {SeasonState} from '../../../core/NgXs/states/season.state';
import {SeasonActions} from '../../../core/NgXs/actions/season.actions';
import {NgbNavModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {
  FormArray,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {InlineSVGModule} from 'ng-inline-svg-2';
import {TabsComponent} from '../../../core/components/tabs/tabs.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import GetAllSeasons = SeasonActions.GetAllSeasons;
import GetPositions = SeasonActions.GetPositions;

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
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss'],
})
export class AddPlayerComponent implements OnInit {
  activeTab: number = 0;
  @ViewChild('multiSelect') select: ElementRef<HTMLElement>;
  @Select(SeasonState.seasons) seasons$: Observable<Season[]>;
  @Select(SeasonState.positions) positions$: Observable<{
    pg_name: Position[];
  }>;
  itemEmail!: FormArray;
  addPlayer = this.fb.group({
    firstName: '',
    lastName: '',
    jersey: 0,
    emails: this.fb.array([]),
    phones: this.fb.array([]),
  });

  constructor(private store: Store, private fb: FormBuilder) {
    this.positions$.subscribe((value) => {
      console.log(value);
    });
  }

  get emailsFormArray(): FormArray {
    return this.addPlayer.controls['emails'] as FormArray;
  }

  get phonesFormArray(): FormArray {
    return this.addPlayer.controls['phones'] as FormArray;
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllSeasons());
    this.store.dispatch(new GetPositions());
    this.addEmail();
    this.addPhone();
  }

  setActiveTab(tabId: number) {
    this.activeTab = tabId;
  }

  ngAfterViewChecked(): void {
  }

  addEmail() {
    const group = this.fb.group({
      email: '',
      type: '',
    });
    this.emailsFormArray.push(group);
  }

  removeEmail(index: number) {
    this.emailsFormArray.removeAt(index);
  }

  addPhone() {
    const group = this.fb.group({
      phone: '',
      type: '',
      carrier: '',
    });
    this.phonesFormArray.push(group);
  }

  removePhone(index: number) {
    this.phonesFormArray.removeAt(index);
  }
}
