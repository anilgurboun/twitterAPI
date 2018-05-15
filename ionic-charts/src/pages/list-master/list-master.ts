import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Item } from '../../models/item';
import { Items } from '../../providers';
import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { BitcointickerServiceProvider } from '../../providers/bitcointicker-service/bitcointicker-service';
import { BitcointweetcounterServiceProvider } from '../../providers/bitcointweetcounter-service/bitcointweetcounter-service';
import { Chart } from 'chart.js';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  public lineChartDataBTC_tweet:Array<any> = [
    {data: []},
  ];
  public lineChartData_BTC_usd:Array<any> = [
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
  constructor(public loadingCtrl: LoadingController, private _bitcoin: BitcointickerServiceProvider, private _tweet: BitcointweetcounterServiceProvider, public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
      
    this.currentItems = this.items.query(); //alakasız
      let firstValueOfBTCTweets: Number;
      let firstValueOfBTC: Number;
      this._tweet.BTCtweetTicker()
      .subscribe(resp => {
console.log(resp)
        firstValueOfBTCTweets = resp['numberOfBitcoinTweets'][0];
      });
      this._bitcoin.bitcoinTicker()
        .subscribe(res => {
          firstValueOfBTC = res['BTC']['USD'];
          });
          this.presentLoading()
      setInterval(() => {
        this._tweet.BTCtweetTicker().
        subscribe(resp => {
          this.lineChartDataBTC_tweet[0].data.push(resp['numberOfBitcoinTweets'][0]);
        });
        this._bitcoin.bitcoinTicker()
        .subscribe(res => {
          this.lineChartData_BTC_usd[0].data.push(res['BTC']['USD']);
          const jsdate = new Date(Date.now());
          this.lineChartLabels.push(jsdate.toLocaleTimeString('en', { /* year: 'numeric', month: 'numeric', day: 'numeric' */ }));
        });
              const clone = JSON.parse(JSON.stringify(this.lineChartDataBTC_tweet));
              const clone2 = JSON.parse(JSON.stringify(this.lineChartData_BTC_usd));

              clone[0].data = this.lineChartDataBTC_tweet[0].data;
              clone2[0].data = this.lineChartData_BTC_usd[0].data;
              this.lineChartDataBTC_tweet = clone;
              this.lineChartData_BTC_usd = clone2;

              
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
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
}
