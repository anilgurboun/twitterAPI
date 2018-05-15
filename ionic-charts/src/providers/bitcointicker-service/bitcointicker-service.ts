import { HttpClient, /* HttpHeaders */ } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/*
  Generated class for the BitcointickerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BitcointickerServiceProvider {
  constructor(private _http: HttpClient) { }
  bitcoinTicker() {
    return this._http.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
    .pipe(map(result => result));
    
  }

}
