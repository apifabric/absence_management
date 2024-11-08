import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OvertimeRecordHomeComponent } from './home/OvertimeRecord-home.component';
import { OvertimeRecordNewComponent } from './new/OvertimeRecord-new.component';
import { OvertimeRecordDetailComponent } from './detail/OvertimeRecord-detail.component';

const routes: Routes = [
  {path: '', component: OvertimeRecordHomeComponent},
  { path: 'new', component: OvertimeRecordNewComponent },
  { path: ':id', component: OvertimeRecordDetailComponent,
    data: {
      oPermission: {
        permissionId: 'OvertimeRecord-detail-permissions'
      }
    }
  }
];

export const OVERTIMERECORD_MODULE_DECLARATIONS = [
    OvertimeRecordHomeComponent,
    OvertimeRecordNewComponent,
    OvertimeRecordDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OvertimeRecordRoutingModule { }