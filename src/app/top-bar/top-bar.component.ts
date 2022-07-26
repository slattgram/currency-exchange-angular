import { Component, OnInit } from '@angular/core';
import {CurrencyService} from ".././services/currency.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  currencies:any;
  constructor(private service:CurrencyService) {}

  ngOnInit() {
    this.service.getCurrencyRates('UAH')
      .subscribe(response => {
        this.currencies = response;
      });
  }

}
