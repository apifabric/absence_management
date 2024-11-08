import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeHomeComponent } from './home/Employee-home.component';
import { EmployeeNewComponent } from './new/Employee-new.component';
import { EmployeeDetailComponent } from './detail/Employee-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeHomeComponent},
  { path: 'new', component: EmployeeNewComponent },
  { path: ':id', component: EmployeeDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Employee-detail-permissions'
      }
    }
  },{
    path: ':employee_id/Attendance', loadChildren: () => import('../Attendance/Attendance.module').then(m => m.AttendanceModule),
    data: {
        oPermission: {
            permissionId: 'Attendance-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeBenefit', loadChildren: () => import('../EmployeeBenefit/EmployeeBenefit.module').then(m => m.EmployeeBenefitModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeBenefit-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeLocation', loadChildren: () => import('../EmployeeLocation/EmployeeLocation.module').then(m => m.EmployeeLocationModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeLocation-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeProject', loadChildren: () => import('../EmployeeProject/EmployeeProject.module').then(m => m.EmployeeProjectModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeProject-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeShift', loadChildren: () => import('../EmployeeShift/EmployeeShift.module').then(m => m.EmployeeShiftModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeShift-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeTeam', loadChildren: () => import('../EmployeeTeam/EmployeeTeam.module').then(m => m.EmployeeTeamModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeTeam-detail-permissions'
        }
    }
},{
    path: ':employee_id/EmployeeTraining', loadChildren: () => import('../EmployeeTraining/EmployeeTraining.module').then(m => m.EmployeeTrainingModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeTraining-detail-permissions'
        }
    }
},{
    path: ':employee_id/EquipmentAssignment', loadChildren: () => import('../EquipmentAssignment/EquipmentAssignment.module').then(m => m.EquipmentAssignmentModule),
    data: {
        oPermission: {
            permissionId: 'EquipmentAssignment-detail-permissions'
        }
    }
},{
    path: ':employee_id/LeaveBalance', loadChildren: () => import('../LeaveBalance/LeaveBalance.module').then(m => m.LeaveBalanceModule),
    data: {
        oPermission: {
            permissionId: 'LeaveBalance-detail-permissions'
        }
    }
},{
    path: ':employee_id/OvertimeRecord', loadChildren: () => import('../OvertimeRecord/OvertimeRecord.module').then(m => m.OvertimeRecordModule),
    data: {
        oPermission: {
            permissionId: 'OvertimeRecord-detail-permissions'
        }
    }
},{
    path: ':employee_id/PerformanceReview', loadChildren: () => import('../PerformanceReview/PerformanceReview.module').then(m => m.PerformanceReviewModule),
    data: {
        oPermission: {
            permissionId: 'PerformanceReview-detail-permissions'
        }
    }
},{
    path: ':employee_id/TravelRecord', loadChildren: () => import('../TravelRecord/TravelRecord.module').then(m => m.TravelRecordModule),
    data: {
        oPermission: {
            permissionId: 'TravelRecord-detail-permissions'
        }
    }
}
];

export const EMPLOYEE_MODULE_DECLARATIONS = [
    EmployeeHomeComponent,
    EmployeeNewComponent,
    EmployeeDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }