import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EmployeeLocation-card.component.html',
  styleUrls: ['./EmployeeLocation-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EmployeeLocation-card]': 'true'
  }
})

export class EmployeeLocationCardComponent {


}