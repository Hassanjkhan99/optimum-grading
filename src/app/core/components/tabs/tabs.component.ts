import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Season} from '../../interfaces/season.interface';

@Component({
  selector: 'optimum-grading-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit, OnChanges {
  activeTab: number = -1;
  @Input() tabsList: Season[] = [];
  @Output() selectedTab: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

  setActiveTab(tab: number) {
    this.selectedTab.emit(tab);
    this.activeTab = tab;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.activeTab === -1) {
      this.setActiveTab(this.tabsList[0]?.id);
    }
  }
}
