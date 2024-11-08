import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamHomeComponent } from './home/Team-home.component';
import { TeamNewComponent } from './new/Team-new.component';
import { TeamDetailComponent } from './detail/Team-detail.component';

const routes: Routes = [
  {path: '', component: TeamHomeComponent},
  { path: 'new', component: TeamNewComponent },
  { path: ':id', component: TeamDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Team-detail-permissions'
      }
    }
  },{
    path: ':team_id/EmployeeTeam', loadChildren: () => import('../EmployeeTeam/EmployeeTeam.module').then(m => m.EmployeeTeamModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeTeam-detail-permissions'
        }
    }
}
];

export const TEAM_MODULE_DECLARATIONS = [
    TeamHomeComponent,
    TeamNewComponent,
    TeamDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }