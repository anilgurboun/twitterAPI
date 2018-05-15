var Twit = require('twit')
var T = new Twit({
  consumer_key:         'r5svvAM7pJfZ7xL8llQPXtw2p',
  consumer_secret:      'yGfWnX94oiuShEZFuVtV7mBR1IXSI2u3ombo1NET4SVAqZX92E',
  access_token:         '426129228-ORNN8pwUv8DFsumaOqAJbavIoq4aijrHdVteSQc8',
  access_token_secret:  'IHukj3F4mfWHZtNkEXd4gyzxDdP7oNqBFvjRxnQ7XKhMf',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})
var btc=0, 
    eth=0,
    bch=0,
    xrp=0,
    miota=0,
    dash=0,
    ltc=0,
    btg=0,
    xmr=0,
    ada=0,
    etc=0,
    xem=0,
    neo=0,
    xlm=0,
    eos=0,
    lsk=0,
    bcc=0,
    omg=0,
    qtum=0,
    zec=0,
    usdt=0,
    strat=0,
    waves=0,
    hsr=0,
    mona=0,
    ardr=0,
    ppt=0,
    ark=0,
    bts=0,
    nxt=0,
    bcn=0,
    vtc=0,
    rep=0,
    dcr=0,
    steem=0,
    kmd=0,
    qash=0,
    salt=0,
    gnt=0,
    pivx=0,
    veri=0,
    sc=0,
    doge=0,
    pay=0,
    maid=0,
    bnb=0,
    snt=0,
    powr=0,
    wtc=0,
    dgd=0,
    sonm=0,
    mana=0,
    bnt=0,
    trx=0,
    denominator=0;
    var stream = T.stream('statuses/filter', { track: ["bitcoin","ethereum","bitcoin cash",
    "ripple","iota","dash","litecoin","bitcoin gold","monero","cardano","ethereum classic",
    "nem","neo","stellar lumens","eos","lisk","bitconnect","omisego","qtum","zcash","tether",
    "stratis","waves","monacoin","ardor","populous","ark","bitshares","nxt","bytecoin","vertcoin",
    "augur","decred","steem","komodo","qash","salt","golem","pivx","veritaseum","siacoin",
    "dogecoin","tenx","maidsafecoin","binance coin","status","power ledges","waiton",
    "digixdao","sonm","mana","tnb"] })
stream.on('tweet', function (tweet) {
   if(tweet.text.toLowerCase().includes("#bitcoin")){btc++;}

   else if(tweet.text.toLowerCase().includes("#btc")){btc++;console.log(tweet.text)}
   else if(tweet.text.toLowerCase().includes("$btc")){btc++;}
   else if(tweet.text.toLowerCase().includes("#sonm")){sonm++;}
   else if(tweet.text.toLowerCase().includes("$sonm")){sonm++;}
   else if(tweet.text.toLowerCase().includes("$snm")){sonm++;}
   else if(tweet.text.toLowerCase().includes("#snm")){sonm++;}
   else if(tweet.text.toLowerCase().includes("#mana")){mana++;}
   else if(tweet.text.toLowerCase().includes("#decentraland")){mana++;}
   else if(tweet.text.toLowerCase().includes("$mana")){mana++;}
   else if(tweet.text.toLowerCase().includes("#ethereum")){eth++;}
   else if(tweet.text.toLowerCase().includes("#bitcoin cash")){bch++;}
   else if(tweet.text.toLowerCase().includes("#ripple")){xrp++;}
   else if(tweet.text.toLowerCase().includes("#iota")){console.log(tweet.text); miota++;}
   else if(tweet.text.toLowerCase().includes("#dash")){dash++;}
   else if(tweet.text.toLowerCase().includes("#litecoin")){ltc++;}
   else if(tweet.text.toLowerCase().includes("#bitcoin gold")){btg++;}
   else if(tweet.text.toLowerCase().includes("#monero")){xmr++;}
   else if(tweet.text.toLowerCase().includes("#cardano")){ada++;}
   else if(tweet.text.toLowerCase().includes("#ethereum classic")){etc++;}
   else if(tweet.text.toLowerCase().includes("#nem")){xem++;}
   else if(tweet.text.toLowerCase().includes("#neo")){neo++;}
   else if(tweet.text.toLowerCase().includes("#stellar lumens")){xlm++;}
   else if(tweet.text.toLowerCase().includes("#eos")){eos++;}
   else if(tweet.text.toLowerCase().includes("#lisk")){lsk++;}
   else if(tweet.text.toLowerCase().includes("#bitconnect")){bcc++;}
   else if(tweet.text.toLowerCase().includes("#omisego")){omg++;}
   else if(tweet.text.toLowerCase().includes("#qtum")){qtum++;}
   else if(tweet.text.toLowerCase().includes("#zcash")){zec++;}
   else if(tweet.text.toLowerCase().includes("#tether")){usdt++;}
   else if(tweet.text.toLowerCase().includes("#stratis")){strat++;}
   else if(tweet.text.toLowerCase().includes("#waves")){waves++;}
   else if(tweet.text.toLowerCase().includes("#hshare")){hsr++;}
   else if(tweet.text.toLowerCase().includes("#monacoin")){mona++;}
   else if(tweet.text.toLowerCase().includes("#ardor")){ardr++;}
   else if(tweet.text.toLowerCase().includes("#populous")){ppt++;}
   else if(tweet.text.toLowerCase().includes("#ark")){ark++;}
   else if(tweet.text.toLowerCase().includes("#bitshares")){bts++;}
   else if(tweet.text.toLowerCase().includes("#nxt")){nxt++;}
   else if(tweet.text.toLowerCase().includes("#bytecoin")){bcn++;}
   else if(tweet.text.toLowerCase().includes("#vertcoin")){vtc++;}
   else if(tweet.text.toLowerCase().includes("#augur")){rep++;}
   else if(tweet.text.toLowerCase().includes("#decred")){dcr++;}
   else if(tweet.text.toLowerCase().includes("#steem")){steem++;}
   else if(tweet.text.toLowerCase().includes("#komodo")){kmd++;}
   else if(tweet.text.toLowerCase().includes("#qash")){qash++;}
   else if(tweet.text.toLowerCase().includes("#salt")){salt++;}
   else if(tweet.text.toLowerCase().includes("#golem")){gnt++;}
   else if(tweet.text.toLowerCase().includes("#pivx")){pivx++;}
   else if(tweet.text.toLowerCase().includes("#veritaseum")){veri++;}
   else if(tweet.text.toLowerCase().includes("#siacoin")){sc++;}
   else if(tweet.text.toLowerCase().includes("#dogecoin")){doge++;}
   else if(tweet.text.toLowerCase().includes("#tenx")){pay++;}
   else if(tweet.text.toLowerCase().includes("#maidsafecoin")){maid++;}
   else if(tweet.text.toLowerCase().includes("#binance coin")){bnb++;}
   else if(tweet.text.toLowerCase().includes("#power ledger")){powr++;}
   else if(tweet.text.toLowerCase().includes("#waiton")){wtc++;}
   else if(tweet.text.toLowerCase().includes("#tnb")){dgd++;
  console.log(tweet.text)}
   else{
     //lol
   }
})


setInterval(function(){
  var blessed = require('blessed')
, contrib = require('blessed-contrib')
, screen = blessed.screen()
, bar = contrib.bar(
  { label: 'Tweets'
       , barWidth: 4
       , barSpacing: 6
       , xOffset: 0
       , maxHeight: 9
       , height: "60%"
       , width: "100%"})
    screen.append(bar) //must append before setting data
    bar.setData(
       { titles: 
        ['btc', 
        'eth',
        'bch',
        'xrp',
        'ltc',
        'btg',
        'bcc',
        'omg',
        'ppt',
        'bnb',
        'bnt',
        'trx',
        'mana',
        'sonm']
       , data: 
       [btc,
        eth,
        bch,
        xrp,
        ltc,
        btg,
        bcc,
        omg,
        ppt,
        bnb,
        bnt,
        trx,
        mana,
        sonm]})
  screen.render()},1000);
