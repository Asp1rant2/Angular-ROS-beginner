import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ConnectionComponent } from './connection/connection.component';
import { TeleopComponent } from './connection/teleop/teleop.component';
import {NgxJoystickModule} from "ngx-joystick";

const route: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component :AboutComponent},
  {path: 'robot', component: ConnectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ConnectionComponent,
    TeleopComponent
  ],
  imports: [
    BrowserModule,
    NgxJoystickModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
