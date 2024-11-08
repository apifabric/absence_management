import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Attendance', loadChildren: () => import('./Attendance/Attendance.module').then(m => m.AttendanceModule) },
    
        { path: 'Department', loadChildren: () => import('./Department/Department.module').then(m => m.DepartmentModule) },
    
        { path: 'Employee', loadChildren: () => import('./Employee/Employee.module').then(m => m.EmployeeModule) },
    
        { path: 'EmployeeBenefit', loadChildren: () => import('./EmployeeBenefit/EmployeeBenefit.module').then(m => m.EmployeeBenefitModule) },
    
        { path: 'EmployeeLocation', loadChildren: () => import('./EmployeeLocation/EmployeeLocation.module').then(m => m.EmployeeLocationModule) },
    
        { path: 'EmployeeProject', loadChildren: () => import('./EmployeeProject/EmployeeProject.module').then(m => m.EmployeeProjectModule) },
    
        { path: 'EmployeeShift', loadChildren: () => import('./EmployeeShift/EmployeeShift.module').then(m => m.EmployeeShiftModule) },
    
        { path: 'EmployeeTeam', loadChildren: () => import('./EmployeeTeam/EmployeeTeam.module').then(m => m.EmployeeTeamModule) },
    
        { path: 'EmployeeTraining', loadChildren: () => import('./EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule) },
    
        { path: 'EquipmentAssignment', loadChildren: () => import('./EquipmentAssignment/EquipmentAssignment.module').then(m => m.EquipmentAssignmentModule) },
    
        { path: 'Holiday', loadChildren: () => import('./Holiday/Holiday.module').then(m => m.HolidayModule) },
    
        { path: 'LeaveBalance', loadChildren: () => import('./LeaveBalance/LeaveBalance.module').then(m => m.LeaveBalanceModule) },
    
        { path: 'Location', loadChildren: () => import('./Location/Location.module').then(m => m.LocationModule) },
    
        { path: 'OvertimeRecord', loadChildren: () => import('./OvertimeRecord/OvertimeRecord.module').then(m => m.OvertimeRecordModule) },
    
        { path: 'PerformanceReview', loadChildren: () => import('./PerformanceReview/PerformanceReview.module').then(m => m.PerformanceReviewModule) },
    
        { path: 'Project', loadChildren: () => import('./Project/Project.module').then(m => m.ProjectModule) },
    
        { path: 'Shift', loadChildren: () => import('./Shift/Shift.module').then(m => m.ShiftModule) },
    
        { path: 'Team', loadChildren: () => import('./Team/Team.module').then(m => m.TeamModule) },
    
        { path: 'TrainingProgram', loadChildren: () => import('./TrainingProgram/TrainingProgram.module').then(m => m.TrainingProgramModule) },
    
        { path: 'TravelRecord', loadChildren: () => import('./TravelRecord/TravelRecord.module').then(m => m.TravelRecordModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }