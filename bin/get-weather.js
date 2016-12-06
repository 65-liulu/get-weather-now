#!/usr/bin/env node

    var print = require('./print.js');
    var url = 'http://api.jirengu.com/weather.php';
    var request = require('request');
    var cityList = require('../city-list.js');
    var argv = require( 'yargs' )
        .usage('Usage: get-weather [城市拼音，不填写默认为所在城市]')
        .example('get-weather beijing')
        .argv;


    var ctid = cityList.fundCity(process.argv.slice(2));
    var wordString ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var word = wordString.split('');

    var options = {
        url: 'http://apis.baidu.com/heweather/weather/free?cityid='+ctid,
        headers: {
            'apikey': 'd39eca91ccabaeeca89e5d94d14e7db8'
        }
    };


    var optionsE = {
        url: 'http://apis.baidu.com/heweather/weather/free?city=' + process.argv.slice(2),
        headers: {
            'apikey': 'd39eca91ccabaeeca89e5d94d14e7db8'
        }
    };


    function english(){
        var str = process.argv.slice(2)+"";
        var arr = str.split('');
        for(var i = 0;i<word.length;i++){
            if(word[i]===arr[0]){
                return true;
            }
        }
        return false;
    }



    if(process.argv.slice(2)==0){
        request(url,function(err,response,body){
            var json =JSON.parse(body);
            print.success(json);
        });
    }else if(english()){
        request(optionsE, function (error, response, body) {
            if (!error) {
                var json = JSON.parse(body)['HeWeather data service 3.0'][0];
                print.successPrint(json)
            }else{
                print.error();
            }
            });
    }
    else{
        request(options, function (error, response, body) {
            if (!error) {
                var json = JSON.parse(body)['HeWeather data service 3.0'][0];
                print.successPrint(json)

            }else{
                print.error();
            }
        });

    }







