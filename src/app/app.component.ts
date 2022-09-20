import {Component, OnInit} from '@angular/core';
import {TranslationService} from './core/services/translation.service';

@Component({
  selector: 'optimum-grading-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'optimum-grading';

  constructor(private translationService: TranslationService) {
  }

  ngOnInit(): void {
    this.translationService.setLanguage(
      this.translationService.getSelectedLanguage()
    );
  }
}
