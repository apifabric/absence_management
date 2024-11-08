import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TravelRecord-new',
  templateUrl: './TravelRecord-new.component.html',
  styleUrls: ['./TravelRecord-new.component.scss']
})
export class TravelRecordNewComponent {
  @ViewChild("TravelRecordForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}