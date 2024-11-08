import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelRecordHomeComponent } from './home/TravelRecord-home.component';
import { TravelRecordNewComponent } from './new/TravelRecord-new.component';
import { TravelRecordDetailComponent } from './detail/TravelRecord-detail.component';

const routes: Routes = [
  {path: '', component: TravelRecordHomeComponent},
  { path: 'new', component: TravelRecordNewComponent },
  { path: ':id', component: TravelRecordDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TravelRecord-detail-permissions'
      }
    }
  }
];

export const TRAVELRECORD_MODULE_DECLARATIONS = [
    TravelRecordHomeComponent,
    TravelRecordNewComponent,
    TravelRecordDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRecordRoutingModule { }