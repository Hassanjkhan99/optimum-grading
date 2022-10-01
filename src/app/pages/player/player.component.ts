import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'optimum-grading-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {class: 'w-100'},
})
export class PlayerComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {
  }
}
