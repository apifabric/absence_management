import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'LeaveBalance-new',
  templateUrl: './LeaveBalance-new.component.html',
  styleUrls: ['./LeaveBalance-new.component.scss']
})
export class LeaveBalanceNewComponent {
  @ViewChild("LeaveBalanceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}