import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutes } from './dashboard-routes';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
