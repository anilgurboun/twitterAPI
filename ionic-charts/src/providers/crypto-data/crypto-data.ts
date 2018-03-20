import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
/*
  Generated class for the CryptoDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CryptoDataProvider {
  closeData = [];
  volumeData = [];
  //dateData = [];
  constructor(public http: HttpClient) { }
  getRemoteData() {
    this.http.get('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=8').subscribe(data => {
      const bulk = data["Data"];
      //this.characterData = data["Data"][0]; //silinir, normali ustteki
      bulk.forEach(element => {
        this.closeData.push(element.close);
      });
      bulk.forEach(element => {
        this.volumeData.push(element.volumefrom)
      });
    }
    );
    return {close:this.closeData,volume:this.volumeData};

  }

}
