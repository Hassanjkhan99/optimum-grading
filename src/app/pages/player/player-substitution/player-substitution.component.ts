import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'optimum-grading-player-substitution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-substitution.component.html',
  styleUrls: ['./player-substitution.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerSubstitutionComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
