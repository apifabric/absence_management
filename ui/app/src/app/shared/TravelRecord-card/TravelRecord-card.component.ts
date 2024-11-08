import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './TravelRecord-card.component.html',
  styleUrls: ['./TravelRecord-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.TravelRecord-card]': 'true'
  }
})

export class TravelRecordCardComponent {


}