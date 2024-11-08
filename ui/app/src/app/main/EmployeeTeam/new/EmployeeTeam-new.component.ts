import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EmployeeTeam-new',
  templateUrl: './EmployeeTeam-new.component.html',
  styleUrls: ['./EmployeeTeam-new.component.scss']
})
export class EmployeeTeamNewComponent {
  @ViewChild("EmployeeTeamForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}