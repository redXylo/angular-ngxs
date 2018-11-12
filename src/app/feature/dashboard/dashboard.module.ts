import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MDBBootstrapModule} from 'ng-uikit-pro-standard';

@NgModule({
  imports: [
    CommonModule,
      MDBBootstrapModule.forRoot()
  ],
  declarations: []
})
export class DashboardModule { }
