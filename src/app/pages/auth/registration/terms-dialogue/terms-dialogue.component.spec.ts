import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TermsDialogueComponent} from './terms-dialogue.component';

describe('TermsDialogueComponent', () => {
  let component: TermsDialogueComponent;
  let fixture: ComponentFixture<TermsDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsDialogueComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TermsDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
