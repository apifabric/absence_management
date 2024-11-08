import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'EquipmentAssignment-new',
  templateUrl: './EquipmentAssignment-new.component.html',
  styleUrls: ['./EquipmentAssignment-new.component.scss']
})
export class EquipmentAssignmentNewComponent {
  @ViewChild("EquipmentAssignmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}