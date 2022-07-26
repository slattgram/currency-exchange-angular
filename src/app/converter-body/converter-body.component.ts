import { Component, OnInit} from '@angular/core';
import { CurrencyService } from ".././services/currency.service";

@Component({
  selector: 'app-converter-body',
  templateUrl: './converter-body.component.html',
  styleUrls: ['./converter-body.component.css']
})
export class ConverterBodyComponent implements OnInit {
  constructor(private service:CurrencyService) { }
  UahRates:any;
  UAHEUR:any;
  UAHUSD:any;

  ngOnInit(): void {
    this.service.getCurrencyRates('UAH')
      .subscribe(response => {
        this.UahRates = response;
        this.UAHUSD = this.UahRates.rates.USD;
        this.UAHEUR = this.UahRates.rates.EUR;
      });
  }

  firstInputValue : number = 0;
  firstInputCurrency : string = 'UAH';
  secondInputValue : number = 0;
  secondInputCurrency : string = 'USD';
  rate : number = 1;
  rateTopPart : number = 1;
  rateBottomPart : number = 1;

  testFunction(msg:string){
    console.log(msg)
  }

  setValue(inputToChange:number){
    switch (this.firstInputCurrency) {
      case ('UAH'):
        this.rateTopPart = 1;
        break;
      case ('USD'):
        this.rateTopPart = this.UAHUSD;
        break;
      case ('EUR'):
        this.rateTopPart = this.UAHEUR;
        break;
    }
    switch (this.secondInputCurrency) {
      case ('UAH'):
        this.rateBottomPart = 1;
        break;
      case ('USD'):
        this.rateBottomPart = this.UAHUSD;
        break;
      case ('EUR'):
        this.rateBottomPart = this.UAHEUR;
        break;
    };
    this.rate = this.rateTopPart/this.rateBottomPart;

    inputToChange === 2 ?
      this.secondInputValue = this.firstInputValue * this.rate
      : this.firstInputValue = this.secondInputValue * (1/this.rate);

  }

}
