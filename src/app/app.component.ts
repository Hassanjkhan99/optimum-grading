import {Component, OnInit} from '@angular/core';
import {TranslationService} from './core/services/translation.service';
import {Store} from '@ngxs/store';
import {AuthActions} from './core/NgXs/actions/auth.actions';
import SetAuthStateFromLocalstorage = AuthActions.SetAuthStateFromLocalstorage;

@Component({
  selector: 'optimum-grading-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'optimum-grading';

  constructor(
    private translationService: TranslationService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.translationService.setLanguage(
      this.translationService.getSelectedLanguage()
    );
    this.store.dispatch(new SetAuthStateFromLocalstorage());
  }
}
