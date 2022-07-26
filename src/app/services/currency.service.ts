import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  private host = 'https://api.exchangerate.host/latest'


  constructor(private httpClient: HttpClient) { }

  getCurrencyRates(currency:string){
    return this.httpClient.get(this.host + `?base=${currency}`)
  }
}
