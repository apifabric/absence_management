import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeShiftHomeComponent } from './home/EmployeeShift-home.component';
import { EmployeeShiftNewComponent } from './new/EmployeeShift-new.component';
import { EmployeeShiftDetailComponent } from './detail/EmployeeShift-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeShiftHomeComponent},
  { path: 'new', component: EmployeeShiftNewComponent },
  { path: ':id', component: EmployeeShiftDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EmployeeShift-detail-permissions'
      }
    }
  }
];

export const EMPLOYEESHIFT_MODULE_DECLARATIONS = [
    EmployeeShiftHomeComponent,
    EmployeeShiftNewComponent,
    EmployeeShiftDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeShiftRoutingModule { }