import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleopComponent } from './teleop.component';

describe('TeleopComponent', () => {
  let component: TeleopComponent;
  let fixture: ComponentFixture<TeleopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
