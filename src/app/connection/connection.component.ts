import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import {JoystickOutputData} from "nipplejs";
// import * as ROSLIB from "roslib"

// declare var ROS2D: any;
// declare function custom_add(num1: any, num2: any): any;

declare var ROSLIB: any;
declare var ROS2D: any;

enum RobotStatus{
  Disconnected="Disconnected",
  Connecting="Connecting",
  Connected="Connected"
}

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  constructor() { }

  robotStatus: RobotStatus = RobotStatus.Disconnected;

  ros: any = null;

  cmdVel: any = null;

  ngOnInit(): void {
    // this.initConnection();
  }

  onConnect(): void {
    this.initConnection();
  }

  initConnection() {
    this.ros = new ROSLIB.Ros();

    this.ros.on("connection", () => {
      this.robotStatus = RobotStatus.Connected;
    });

    this.ros.on("close", () => {
      this.robotStatus = RobotStatus.Disconnected;
      setTimeout(() => {
        try {
          const url = `ws://${environment.ROSConfig.ROSBRIDGE_SERVER_IP}:${environment.ROSConfig.ROSBRIDGE_SERVER_PORT}`;
          this.ros.connect(url);
        } catch (e) {
          console.log("Connect error:", e);
        }
      }, environment.ROSConfig.RECONNECTION_TIMER)
    });

    try {
      const url = `ws://${environment.ROSConfig.ROSBRIDGE_SERVER_IP}:${environment.ROSConfig.ROSBRIDGE_SERVER_PORT}`;
      this.ros.connect(url);
    } catch (e) {
      console.log("Connect error:", e);
    }

    this.cmdVel = new ROSLIB.Topic({
      ros : this.ros,
      name : '/cmd_vel',
      messageType : 'geometry_msgs/Twist'
    });

    // var twist = new ROSLIB.Message({
    //   linear : {
    //     x : 0.1,
    //     y : 0.2,
    //     z : 0.3
    //   },
    //   angular : {
    //     x : -0.1,
    //     y : -0.2,
    //     z : -0.3
    //   }
    // });
    // cmdVel.publish(twist);
  }

  onDisconnect() {
    if (this.ros)
      this.ros.close();
  }

  onMoveEvent(move: JoystickOutputData) {
    // console.log("move event triggered", move);
    const twist = new ROSLIB.Message({
      linear : {
        x : move.vector.y,
        y : 0,
        z : 0
      },
      angular : {
        x : 0,
        y : 0,
        z : -move.vector.x
      }
    });
    if (this.cmdVel)
      this.cmdVel.publish(twist);
  }
}
