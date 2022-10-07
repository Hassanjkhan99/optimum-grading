import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayerSubstitutionComponent} from './player-substitution.component';

describe('PlayerSubstitutionComponent', () => {
  let component: PlayerSubstitutionComponent;
  let fixture: ComponentFixture<PlayerSubstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerSubstitutionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlayerSubstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
