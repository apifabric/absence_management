import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLocationHomeComponent } from './home/EmployeeLocation-home.component';
import { EmployeeLocationNewComponent } from './new/EmployeeLocation-new.component';
import { EmployeeLocationDetailComponent } from './detail/EmployeeLocation-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeLocationHomeComponent},
  { path: 'new', component: EmployeeLocationNewComponent },
  { path: ':id', component: EmployeeLocationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EmployeeLocation-detail-permissions'
      }
    }
  }
];

export const EMPLOYEELOCATION_MODULE_DECLARATIONS = [
    EmployeeLocationHomeComponent,
    EmployeeLocationNewComponent,
    EmployeeLocationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeLocationRoutingModule { }