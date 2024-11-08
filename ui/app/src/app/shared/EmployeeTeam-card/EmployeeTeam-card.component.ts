import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './EmployeeTeam-card.component.html',
  styleUrls: ['./EmployeeTeam-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.EmployeeTeam-card]': 'true'
  }
})

export class EmployeeTeamCardComponent {


}