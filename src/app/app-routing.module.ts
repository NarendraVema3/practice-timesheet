import { ViewEmployeeDetailsComponent } from './add-resource/view-employee-details/view-employee-details.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewResourceComponent } from './add-resource/view-resource/view-resource.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { AdminCalendarComponent } from './admin-calendar/admin-calendar.component';
import { ClientComponent } from './client/client.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { ProjectMappingComponent } from './project-mapping/project-mapping.component';
import { NewprojectsComponent } from './newprojects/newprojects.component';
import { ProjectsComponent } from './projects/projects.component';
import { NewTimesheetComponent } from './employee/new-timesheet/new-timesheet.component';
import { EmployeeTimesheetComponent } from './employee/employee-timesheet/employee-timesheet.component';
import { EmployeeCalendarComponent } from './employee-calendar/employee-calendar.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {
      path: '',
      component: LayoutComponent,
    },
    {
        path: 'home',
        component: ProfileComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'timesheet',
        component: TimesheetComponent,
      },
      {
        path: 'empcalendar',
        component: EmployeeCalendarComponent,
      },
      {
        path: 'emptimesheet',
        component: EmployeeTimesheetComponent,
      },
      {
        path: 'newtimesheet',
        component: NewTimesheetComponent,
      },
      {
        path: 'projects',
        component: ProjectsComponent,
      },
      {
        path: 'newproject',
        component: NewprojectsComponent,
      },
      {
        path: 'projectmapping',
        component: ProjectMappingComponent,
      },
      {
        path: 'resources',
        component: AddResourceComponent,
      },
      {
        path: 'client',
        component: ClientComponent,
      },
      {
        path: 'admincalendar',
        component: AdminCalendarComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'changeproject/:id',
        component: EditProjectComponent,
      },
      {
        path: 'viewresource',
        component: ViewResourceComponent,
      },
      {
        path: 'report',
        component: ReportsComponent,
      },
      {
        path: 'viewEmployeeDetails/:id',
        component: ViewEmployeeDetailsComponent,
      }

      
      
      
      
      

  
];    


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule { }
