import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChartsModule } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { BitcointickerServiceProvider } from '../../providers/bitcointicker-service/bitcointicker-service';
import { BitcointweetcounterServiceProvider } from '../../providers/bitcointweetcounter-service/bitcointweetcounter-service';
import { Chart } from 'chart.js';
import { LoadingController } from 'ionic-angular';
import { ListMasterPage } from '../list-master/list-master'

import { Settings } from '../../providers';

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public lineChartDataLTC_tweet:Array<any> = [
    {data: []},
  ];
  public lineChartData_LTC_usd:Array<any> = [
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
  // Our local settings object
  /* options: any;

  settingsReady = false;

  form: FormGroup;

  profileSettings = {
    page: 'profile',
    pageTitleKey: 'SETTINGS_PAGE_PROFILE'
  };

  page: string = 'main';
  pageTitleKey: string = 'SETTINGS_TITLE';
  pageTitle: string;

  subSettings: any = SettingsPage;
*/
  constructor(public loadingCtrl: LoadingController, private _bitcoin: BitcointickerServiceProvider, private _tweet: BitcointweetcounterServiceProvider, public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService) {
      let firstValueOfLTCTweets: Number;
      let firstValueOfLTC: Number;
      this._tweet.BTCtweetTicker()
      .subscribe(resp => {
console.log(resp)
        firstValueOfLTCTweets = resp['numberOfLitecoinTweets'][0]; 

      });
      this._bitcoin.bitcoinTicker()
        .subscribe(res => {
          firstValueOfLTC = res['LTC']['USD']; 
          });
          this.presentLoading()
      setInterval(() => {
        this._tweet.BTCtweetTicker().
        subscribe(resp => {
          this.lineChartDataLTC_tweet[0].data.push(resp['numberOfLitecoinTweets'][0]);
        });
        this._bitcoin.bitcoinTicker()
        .subscribe(res => {
          this.lineChartData_LTC_usd[0].data.push(res['LTC']['USD']);
          const jsdate = new Date(Date.now());
          this.lineChartLabels.push(jsdate.toLocaleTimeString('en', { /* year: 'numeric', month: 'numeric', day: 'numeric' */ }));
        });
              const clone5 = JSON.parse(JSON.stringify(this.lineChartDataLTC_tweet));
              const clone6 = JSON.parse(JSON.stringify(this.lineChartData_LTC_usd));

              clone5[0].data = this.lineChartDataLTC_tweet[0].data;
              clone6[0].data = this.lineChartData_LTC_usd[0].data;
              this.lineChartDataLTC_tweet = clone5;
              this.lineChartData_LTC_usd = clone6;

              
      }, 3000);
  
    }
    
    presentLoading() {
      let loader = this.loadingCtrl.create({
        content: "Gathering data...",
        duration: 1000
      });
      loader.present();
    }

  }
/*
  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch (this.page) {
      case 'main':
        break;
      case 'profile':
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.settings.merge(this.form.value);
    });
  }

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});

    this.page = this.navParams.get('page') || this.page;
    this.pageTitleKey = this.navParams.get('pageTitleKey') || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe((res) => {
      this.pageTitle = res;
    })

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }

  ngOnChanges() {
    console.log('Ng All Changes');
  } */
