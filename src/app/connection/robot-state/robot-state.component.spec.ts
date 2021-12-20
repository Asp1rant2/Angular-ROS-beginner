import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotStateComponent } from './robot-state.component';

describe('RobotStateComponent', () => {
  let component: RobotStateComponent;
  let fixture: ComponentFixture<RobotStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobotStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
