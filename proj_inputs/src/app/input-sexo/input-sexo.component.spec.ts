import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSexoComponent } from './input-sexo.component';

describe('InputSexoComponent', () => {
  let component: InputSexoComponent;
  let fixture: ComponentFixture<InputSexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSexoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
