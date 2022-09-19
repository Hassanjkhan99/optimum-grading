import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import {TranslationService} from '../../services/translation.service';

@NgModule({
  imports: [CommonModule, TranslateModule],
  exports: [TranslateModule],
  providers: [TranslateService, TranslationService, TranslateStore],
})
export class TranslationModule {
}
