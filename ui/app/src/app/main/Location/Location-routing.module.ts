import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationHomeComponent } from './home/Location-home.component';
import { LocationNewComponent } from './new/Location-new.component';
import { LocationDetailComponent } from './detail/Location-detail.component';

const routes: Routes = [
  {path: '', component: LocationHomeComponent},
  { path: 'new', component: LocationNewComponent },
  { path: ':id', component: LocationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Location-detail-permissions'
      }
    }
  },{
    path: ':location_id/EmployeeLocation', loadChildren: () => import('../EmployeeLocation/EmployeeLocation.module').then(m => m.EmployeeLocationModule),
    data: {
        oPermission: {
            permissionId: 'EmployeeLocation-detail-permissions'
        }
    }
}
];

export const LOCATION_MODULE_DECLARATIONS = [
    LocationHomeComponent,
    LocationNewComponent,
    LocationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }