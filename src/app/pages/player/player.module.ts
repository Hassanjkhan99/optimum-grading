import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlayerRoutingModule} from "./player-routing.module";
import {PlayerComponent} from "./player.component";
import {PlayerTableComponent} from "./player-table/player-table.component";
import {AddPlayerComponent} from "./add-player/add-player.component";


@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    PlayerTableComponent,
    AddPlayerComponent

  ]
})
export class PlayerModule { }
