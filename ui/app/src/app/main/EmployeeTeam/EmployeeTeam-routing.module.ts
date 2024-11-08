import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTeamHomeComponent } from './home/EmployeeTeam-home.component';
import { EmployeeTeamNewComponent } from './new/EmployeeTeam-new.component';
import { EmployeeTeamDetailComponent } from './detail/EmployeeTeam-detail.component';

const routes: Routes = [
  {path: '', component: EmployeeTeamHomeComponent},
  { path: 'new', component: EmployeeTeamNewComponent },
  { path: ':id', component: EmployeeTeamDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EmployeeTeam-detail-permissions'
      }
    }
  }
];

export const EMPLOYEETEAM_MODULE_DECLARATIONS = [
    EmployeeTeamHomeComponent,
    EmployeeTeamNewComponent,
    EmployeeTeamDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeTeamRoutingModule { }