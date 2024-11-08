import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './OvertimeRecord-card.component.html',
  styleUrls: ['./OvertimeRecord-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.OvertimeRecord-card]': 'true'
  }
})

export class OvertimeRecordCardComponent {


}