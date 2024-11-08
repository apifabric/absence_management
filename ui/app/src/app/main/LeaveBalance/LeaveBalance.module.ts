import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {LEAVEBALANCE_MODULE_DECLARATIONS, LeaveBalanceRoutingModule} from  './LeaveBalance-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    LeaveBalanceRoutingModule
  ],
  declarations: LEAVEBALANCE_MODULE_DECLARATIONS,
  exports: LEAVEBALANCE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LeaveBalanceModule { }