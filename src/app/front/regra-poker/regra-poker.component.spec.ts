import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegraPokerComponent } from './regra-poker.component';

describe('RegraPokerComponent', () => {
  let component: RegraPokerComponent;
  let fixture: ComponentFixture<RegraPokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegraPokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegraPokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
