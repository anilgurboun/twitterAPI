import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/*
  Generated class for the BitcointweetcounterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BitcointweetcounterServiceProvider {

  constructor(private _http: HttpClient) { }
  BTCtweetTicker() {
    return this._http.get('http://localhost:3000')
    .pipe(map(result => result));
  }

}
