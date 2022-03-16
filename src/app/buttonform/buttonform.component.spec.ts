import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonformComponent } from './buttonform.component';

describe('ButtonformComponent', () => {
  let component: ButtonformComponent;
  let fixture: ComponentFixture<ButtonformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
