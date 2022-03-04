import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSubmitComponent } from './botao-submit.component';

describe('BotaoSubmitComponent', () => {
  let component: BotaoSubmitComponent;
  let fixture: ComponentFixture<BotaoSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
