import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { JoystickEvent, NgxJoystickComponent } from 'ngx-joystick';
import {Joystick, JoystickManagerOptions, JoystickOutputData, Position} from 'nipplejs';

@Component({
  selector: 'app-teleop',
  templateUrl: './teleop.component.html',
  styleUrls: ['./teleop.component.css']
})
export class TeleopComponent implements OnInit {

  @ViewChild('staticJoystic') staticJoystick: NgxJoystickComponent | undefined;

  @Output() moveEvent = new EventEmitter<JoystickOutputData>();

  staticOptions: JoystickManagerOptions = {
    mode: 'static',
    position: { left: '50%', top: '50%' },
    color: '#222222',
  };

  staticOutputData: JoystickOutputData | undefined;

  directionStatic: string;
  interactingStatic: boolean;
  showInfo: boolean = false;

  constructor() {
    this.directionStatic = '';
    this.interactingStatic = false;
  }

  ngOnInit() {
  }

  onStartStatic(event: JoystickEvent) {
    this.interactingStatic = true;
  }

  onEndStatic(event: JoystickEvent) {
    if (this.staticOutputData) {
      let data = this.staticOutputData;
      data.vector.x = 0;
      data.vector.y = 0;
      this.moveEvent.emit(data);
    }
    this.interactingStatic = false;
  }

  onMoveStatic(event: JoystickEvent) {
    this.staticOutputData = event.data;
    this.moveEvent.emit(this.staticOutputData);
  }

  onPlainUpStatic(event: JoystickEvent) {
    this.directionStatic = 'UP';
  }

  onPlainDownStatic(event: JoystickEvent) {
    this.directionStatic = 'DOWN';
  }

  onPlainLeftStatic(event: JoystickEvent) {
    this.directionStatic = 'LEFT';
  }

  onPlainRightStatic(event: JoystickEvent) {
    this.directionStatic = 'RIGHT';
  }

}
