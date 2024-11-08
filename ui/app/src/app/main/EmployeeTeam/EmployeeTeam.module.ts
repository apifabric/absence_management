import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EMPLOYEETEAM_MODULE_DECLARATIONS, EmployeeTeamRoutingModule} from  './EmployeeTeam-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EmployeeTeamRoutingModule
  ],
  declarations: EMPLOYEETEAM_MODULE_DECLARATIONS,
  exports: EMPLOYEETEAM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeTeamModule { }