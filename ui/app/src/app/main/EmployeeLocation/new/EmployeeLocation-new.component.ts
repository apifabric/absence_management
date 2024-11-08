import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EmployeeLocation-new',
  templateUrl: './EmployeeLocation-new.component.html',
  styleUrls: ['./EmployeeLocation-new.component.scss']
})
export class EmployeeLocationNewComponent {
  @ViewChild("EmployeeLocationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}