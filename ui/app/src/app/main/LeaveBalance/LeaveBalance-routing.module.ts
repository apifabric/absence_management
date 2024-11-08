import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaveBalanceHomeComponent } from './home/LeaveBalance-home.component';
import { LeaveBalanceNewComponent } from './new/LeaveBalance-new.component';
import { LeaveBalanceDetailComponent } from './detail/LeaveBalance-detail.component';

const routes: Routes = [
  {path: '', component: LeaveBalanceHomeComponent},
  { path: 'new', component: LeaveBalanceNewComponent },
  { path: ':id', component: LeaveBalanceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'LeaveBalance-detail-permissions'
      }
    }
  }
];

export const LEAVEBALANCE_MODULE_DECLARATIONS = [
    LeaveBalanceHomeComponent,
    LeaveBalanceNewComponent,
    LeaveBalanceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveBalanceRoutingModule { }