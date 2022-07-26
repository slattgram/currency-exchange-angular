import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  private host = 'https://api.exchangerate.host/latest?base=UAH'


  constructor(private httpClient: HttpClient) { }

  getCurrencyRates(){
    return this.httpClient.get(this.host)
  }
}
