import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerComponent} from "./player.component";
import {PlayerTableComponent} from "./player-table/player-table.component";


const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'player-info',
        component: PlayerTableComponent,
      },

      { path: '', redirectTo: 'player-info', pathMatch: 'full' },
      { path: '**', redirectTo: 'player-info', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerRoutingModule{}
