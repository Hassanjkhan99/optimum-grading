import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerComponent} from "./player.component";
import {PlayerTableComponent} from "./player-table/player-table.component";
import {AddPlayerComponent} from "./add-player/add-player.component";
import {PlayerSubstitutionComponent} from "./player-substitution/player-substitution.component";


const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'player-info',
        component: PlayerTableComponent,
      },
      {
        path: 'add-player',
        component: AddPlayerComponent,
      },
      {
        path: 'player-subs',
        component: PlayerSubstitutionComponent,
      },

      {path: '', redirectTo: 'player-info', pathMatch: 'full'},
      {path: '**', redirectTo: 'player-info', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule{}
