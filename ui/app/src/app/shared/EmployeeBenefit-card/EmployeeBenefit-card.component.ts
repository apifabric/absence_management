import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EmployeeBenefit-card.component.html',
  styleUrls: ['./EmployeeBenefit-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EmployeeBenefit-card]': 'true'
  }
})

export class EmployeeBenefitCardComponent {


}