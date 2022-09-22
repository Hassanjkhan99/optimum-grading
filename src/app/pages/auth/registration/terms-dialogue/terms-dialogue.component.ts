import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'optimum-grading-terms-dialogue',
  templateUrl: './terms-dialogue.component.html',
  styleUrls: ['./terms-dialogue.component.scss'],
  standalone: true,
})
export class TermsDialogueComponent {
  constructor(public dialogRef: MatDialogRef<TermsDialogueComponent>) {
  }
}
