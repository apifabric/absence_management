import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EmployeeBenefit-new',
  templateUrl: './EmployeeBenefit-new.component.html',
  styleUrls: ['./EmployeeBenefit-new.component.scss']
})
export class EmployeeBenefitNewComponent {
  @ViewChild("EmployeeBenefitForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}