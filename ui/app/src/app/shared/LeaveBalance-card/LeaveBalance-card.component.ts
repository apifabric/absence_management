import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './LeaveBalance-card.component.html',
  styleUrls: ['./LeaveBalance-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.LeaveBalance-card]': 'true'
  }
})

export class LeaveBalanceCardComponent {


}