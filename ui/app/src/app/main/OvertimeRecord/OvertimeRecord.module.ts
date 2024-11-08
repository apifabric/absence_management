import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {OVERTIMERECORD_MODULE_DECLARATIONS, OvertimeRecordRoutingModule} from  './OvertimeRecord-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    OvertimeRecordRoutingModule
  ],
  declarations: OVERTIMERECORD_MODULE_DECLARATIONS,
  exports: OVERTIMERECORD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OvertimeRecordModule { }