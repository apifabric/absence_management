import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeBenefitHomeComponent } from './home/EmployeeBenefit-home.component';
import { EmployeeBenefitNewComponent } from './new/EmployeeBenefit-new.component';
import { EmployeeBenefitDetailComponent } from './detail/EmployeeBenefit-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeBenefitHomeComponent},
  { path: 'new', component: EmployeeBenefitNewComponent },
  { path: ':id', component: EmployeeBenefitDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EmployeeBenefit-detail-permissions'
      }
    }
  }
];

export const EMPLOYEEBENEFIT_MODULE_DECLARATIONS = [
    EmployeeBenefitHomeComponent,
    EmployeeBenefitNewComponent,
    EmployeeBenefitDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeBenefitRoutingModule { }