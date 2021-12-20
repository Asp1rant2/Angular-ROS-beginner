import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {JoystickOutputData} from "nipplejs";
import * as THREE from "three";

declare var ROSLIB: any;
declare var ROS2D: any;

@Component({
  selector: 'app-robot-state',
  templateUrl: './robot-state.component.html',
  styleUrls: ['./robot-state.component.css']
})
export class RobotStateComponent implements OnInit {

  @Input() position: any = null;

  state = {
    x: 0,
    y: 0,
    orientation: 0,
    linear_velocity: 0,
    angular_velocity: 0,
  }

  constructor() {

  }

  ngOnInit(): void {
    setInterval(()=> {
      if (this.position){
        this.state.x = this.position.pose.pose.position.x.toFixed(2);
        this.state.y = this.position.pose.pose.position.y.toFixed(2);
        this.state.orientation = RobotStateComponent.getOrientationFromQuaternion(this.position.pose.pose.orientation);
      }
    }, 100);
  }

  private static getOrientationFromQuaternion(ros_orientation_quaternion: any): number {
    const q = new THREE.Quaternion(ros_orientation_quaternion.x, ros_orientation_quaternion.y,
      ros_orientation_quaternion.z, ros_orientation_quaternion.w);
    const RPY = new THREE.Euler().setFromQuaternion(q);
    return RPY.z * (180 / Math.PI);
  }

}
