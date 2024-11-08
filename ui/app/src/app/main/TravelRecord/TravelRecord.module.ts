import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRAVELRECORD_MODULE_DECLARATIONS, TravelRecordRoutingModule} from  './TravelRecord-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TravelRecordRoutingModule
  ],
  declarations: TRAVELRECORD_MODULE_DECLARATIONS,
  exports: TRAVELRECORD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TravelRecordModule { }