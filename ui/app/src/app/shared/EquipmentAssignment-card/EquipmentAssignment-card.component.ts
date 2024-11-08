import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EquipmentAssignment-card.component.html',
  styleUrls: ['./EquipmentAssignment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EquipmentAssignment-card]': 'true'
  }
})

export class EquipmentAssignmentCardComponent {


}