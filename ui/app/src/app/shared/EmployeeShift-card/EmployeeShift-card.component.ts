import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EmployeeShift-card.component.html',
  styleUrls: ['./EmployeeShift-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EmployeeShift-card]': 'true'
  }
})

export class EmployeeShiftCardComponent {


}