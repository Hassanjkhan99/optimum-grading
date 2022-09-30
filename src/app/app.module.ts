import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsModule} from '@ngxs/store';
import {AuthState} from './core/NgXs/states/auth.state';
import {TranslateModule} from '@ngx-translate/core';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {UIState} from './core/NgXs/states/UI.state';
import {ToastrModule} from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import {PlayersState} from "./core/NgXs/states/player.state";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderInterceptor} from './core/interceptors/header.interceptor';
import {SeasonState} from './core/NgXs/states/season.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgbModule,
    RouterOutlet,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([AuthState, UIState, SeasonState, PlayersState]),
    TranslateModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      onActivateTick: true,
    }),
    MatDialogModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
