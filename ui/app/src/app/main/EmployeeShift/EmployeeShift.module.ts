import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EMPLOYEESHIFT_MODULE_DECLARATIONS, EmployeeShiftRoutingModule} from  './EmployeeShift-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EmployeeShiftRoutingModule
  ],
  declarations: EMPLOYEESHIFT_MODULE_DECLARATIONS,
  exports: EMPLOYEESHIFT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeShiftModule { }