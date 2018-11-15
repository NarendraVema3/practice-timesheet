import { ProjectService } from './service/project.service';
import { EventSesrvice } from './service/Event.service';

import { RoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { EmployeeCalendarComponent } from './employee-calendar/employee-calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { EmployeeTimesheetComponent } from './employee/employee-timesheet/employee-timesheet.component';
import { NewTimesheetComponent } from './employee/new-timesheet/new-timesheet.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatButtonToggleModule, MatTabsModule, MatCardModule } from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { ProjectsComponent } from './projects/projects.component';
import { NewprojectsComponent } from './newprojects/newprojects.component';
import { ProjectMappingComponent } from './project-mapping/project-mapping.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { ClientComponent } from './client/client.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AdminCalendarComponent } from './admin-calendar/admin-calendar.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { TypingAnimationDirective } from 'angular-typing-animation';
import { CountoModule }  from 'angular2-counto';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { ViewResourceComponent } from './add-resource/view-resource/view-resource.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewEmployeeDetailsComponent } from './add-resource/view-employee-details/view-employee-details.component';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    TimesheetComponent,
    EmployeeCalendarComponent,
    EmployeeTimesheetComponent,
    NewTimesheetComponent,
    ProjectsComponent,
    NewprojectsComponent,
    ProjectMappingComponent,
    AddResourceComponent,
    ClientComponent,
    AdminCalendarComponent,
    TypingAnimationDirective,
    EditProjectComponent,
    ViewResourceComponent,
    ReportsComponent,
    ViewEmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatTabsModule,
    MatCardModule,
    FullCalendarModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    SelectDropDownModule,
    MatSidenavModule,
    HttpClientModule,
    MatIconModule,
    CountoModule,
    
  ],
  providers: [EventSesrvice,ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
