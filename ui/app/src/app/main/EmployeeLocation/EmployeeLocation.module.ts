import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EMPLOYEELOCATION_MODULE_DECLARATIONS, EmployeeLocationRoutingModule} from  './EmployeeLocation-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EmployeeLocationRoutingModule
  ],
  declarations: EMPLOYEELOCATION_MODULE_DECLARATIONS,
  exports: EMPLOYEELOCATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeLocationModule { }