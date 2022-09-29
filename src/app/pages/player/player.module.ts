import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayerRoutingModule} from "./player-routing.module";
import {PlayerComponent} from "./player.component";
import {PlayerTableComponent} from "./player-table/player-table.component";




@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    PlayerTableComponent,

  ]
})
export class PlayerModule { }
