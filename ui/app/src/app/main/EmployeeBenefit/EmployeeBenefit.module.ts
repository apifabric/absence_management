import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {EMPLOYEEBENEFIT_MODULE_DECLARATIONS, EmployeeBenefitRoutingModule} from  './EmployeeBenefit-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    EmployeeBenefitRoutingModule
  ],
  declarations: EMPLOYEEBENEFIT_MODULE_DECLARATIONS,
  exports: EMPLOYEEBENEFIT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeBenefitModule { }