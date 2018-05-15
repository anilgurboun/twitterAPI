import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { BitcointickerServiceProvider } from '../../providers/bitcointicker-service/bitcointicker-service';
import { BitcointweetcounterServiceProvider } from '../../providers/bitcointweetcounter-service/bitcointweetcounter-service';
import { Chart } from 'chart.js';
import { LoadingController } from 'ionic-angular';
import { ListMasterPage } from '../list-master/list-master'

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  
  currentItems: any = [];
  public lineChartDataETH_tweet:Array<any> = [
    {data: []},
  ];
  public lineChartData_ETH_usd:Array<any> = [
    {data: []},
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true,
  };
  public barChartOptions:any = {
    responsive: true,
    scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';
  public barChartType:string = 'bar';

// events
public chartClicked(e:any):void {
}
public chartHovered(e:any):void {
}  
  constructor(public loadingCtrl: LoadingController, private _bitcoin: BitcointickerServiceProvider, private _tweet: BitcointweetcounterServiceProvider, public navCtrl: NavController, public navParams: NavParams, public items: Items) {     this.currentItems = this.items.query(); //alakasız
    let firstValueOfETHTweets: Number;
    let firstValueOfETH: Number;
    this._tweet.BTCtweetTicker()
    .subscribe(resp => {
console.log(resp)
      firstValueOfETHTweets = resp['numberOfEthereumTweets'][0];

    });
    this._bitcoin.bitcoinTicker()
      .subscribe(res => {
        firstValueOfETH = res['ETH']['USD'];
        });
        this.presentLoading()
    setInterval(() => {
      this._tweet.BTCtweetTicker().
      subscribe(resp => {
        this.lineChartDataETH_tweet[0].data.push(resp['numberOfEthereumTweets'][0]);
      });
      this._bitcoin.bitcoinTicker()
      .subscribe(res => {
        this.lineChartData_ETH_usd[0].data.push(res['ETH']['USD']);
        const jsdate = new Date(Date.now());
        this.lineChartLabels.push(jsdate.toLocaleTimeString('en', { /* year: 'numeric', month: 'numeric', day: 'numeric' */ }));
      });
            const clone3 = JSON.parse(JSON.stringify(this.lineChartDataETH_tweet));
            const clone4 = JSON.parse(JSON.stringify(this.lineChartData_ETH_usd));
            clone3[0].data = this.lineChartDataETH_tweet[0].data;
            clone4[0].data = this.lineChartData_ETH_usd[0].data;
            this.lineChartDataETH_tweet = clone3;
            this.lineChartData_ETH_usd = clone4;

            
    }, 3000);

  }
  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Gathering data...",
      duration: 1000
    });
    loader.present();
  }
  /**
   * Perform a service for the proper items.
   */
  /* getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  } */

  /**
   * Navigate to the detail page for this item.
   */
  /* openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  } */

}
