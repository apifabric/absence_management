import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentAssignmentHomeComponent } from './home/EquipmentAssignment-home.component';
import { EquipmentAssignmentNewComponent } from './new/EquipmentAssignment-new.component';
import { EquipmentAssignmentDetailComponent } from './detail/EquipmentAssignment-detail.component';

const routes: Routes = [
  {path: '', component: EquipmentAssignmentHomeComponent},
  { path: 'new', component: EquipmentAssignmentNewComponent },
  { path: ':id', component: EquipmentAssignmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'EquipmentAssignment-detail-permissions'
      }
    }
  }
];

export const EQUIPMENTASSIGNMENT_MODULE_DECLARATIONS = [
    EquipmentAssignmentHomeComponent,
    EquipmentAssignmentNewComponent,
    EquipmentAssignmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipmentAssignmentRoutingModule { }