/**
 * Created by dell on 2016/10/20.
 */




function success(data){
    console.log('城市:' + data.results[0].currentCity);
    console.log('时间:' + data.results[0].weather_data[0].date);
    console.log('天气:' + data.results[0].weather_data[0].weather);
    console.log('温度:' + data.results[0].weather_data[0].temperature);
    console.log('风:' +data.results[0].weather_data[0].wind);
    console.log('pm2.5:' + data.results[0].pm25);
    console.log(data.results[0].index[0].tipt +':' + data.results[0].index[0].des);
    console.log(data.results[0].index[1].tipt +':' + data.results[0].index[1].des);
    console.log(data.results[0].index[2].tipt +':' + data.results[0].index[2].des);
    console.log(data.results[0].index[3].tipt +':' + data.results[0].index[3].des);
    console.log(data.results[0].index[4].tipt +':' + data.results[0].index[4].des);
    console.log(data.results[0].index[5].tipt +':' + data.results[0].index[5].des);
    console.log('');

    console.log('======================未来三天天气情况==================');

    console.log('');
    console.log(data.results[0].weather_data[1].date +' '+ data.results[0].weather_data[1].weather +' '+ data.results[0].weather_data[1].wind +' '+ data.results[0].weather_data[1].temperature);
    console.log(data.results[0].weather_data[2].date +' '+ data.results[0].weather_data[2].weather +' '+ data.results[0].weather_data[2].wind +' '+ data.results[0].weather_data[2].temperature);
    console.log(data.results[0].weather_data[3].date +' '+ data.results[0].weather_data[3].weather +' '+ data.results[0].weather_data[3].wind +' '+ data.results[0].weather_data[3].temperature);
    console.log('');

    console.log('===========================end=========================')
}





function successPrint(data){
    console.log('城市:' + data.basic.city);
    console.log('时间:' + data.basic.update.loc);
    console.log('天气状况:' + data.now.cond.txt);
    console.log('温度:' + data.now.tmp);
    console.log('相对湿度（%）:' + data.now.hum);
    console.log('风:' + data.now.wind.dir+' '+data.now.wind.sc);
    console.log('空气质量:' + data.aqi.city.qlty);
    console.log('舒适度指数:' + data.suggestion.comf.txt);
    console.log('洗车指数:' + data.suggestion.cw.txt);
    console.log('穿衣指数:' + data.suggestion.drsg.txt);
    console.log('感冒指数:' + data.suggestion.flu.txt);
    console.log('运动指数:' + data.suggestion.sport.txt);
    console.log('旅游指数:' + data.suggestion.trav.txt);
    console.log('紫外线指数:' + data.suggestion.uv.txt);


    console.log('======================未来七天天气情况==================');

    console.log('');
    console.log(data.daily_forecast[0].date + '白天' +data.daily_forecast[0].cond.txt_d + ' 夜晚' +data.daily_forecast[0].cond.txt_n + ' 温度:' +data.daily_forecast[0].tmp.min +'~'+data.daily_forecast[0].tmp.max);
    console.log(data.daily_forecast[1].date + '白天' +data.daily_forecast[1].cond.txt_d + ' 夜晚' +data.daily_forecast[1].cond.txt_n + ' 温度:' +data.daily_forecast[1].tmp.min +'~'+data.daily_forecast[1].tmp.max);
    console.log(data.daily_forecast[2].date + '白天' +data.daily_forecast[2].cond.txt_d + ' 夜晚' +data.daily_forecast[2].cond.txt_n + ' 温度:' +data.daily_forecast[2].tmp.min +'~'+data.daily_forecast[2].tmp.max);
    console.log(data.daily_forecast[3].date + '白天' +data.daily_forecast[3].cond.txt_d + ' 夜晚' +data.daily_forecast[3].cond.txt_n + ' 温度:' +data.daily_forecast[3].tmp.min +'~'+data.daily_forecast[3].tmp.max);
    console.log(data.daily_forecast[4].date + '白天' +data.daily_forecast[4].cond.txt_d + ' 夜晚' +data.daily_forecast[4].cond.txt_n + ' 温度:' +data.daily_forecast[4].tmp.min +'~'+data.daily_forecast[4].tmp.max);
    console.log(data.daily_forecast[5].date + '白天' +data.daily_forecast[5].cond.txt_d + ' 夜晚' +data.daily_forecast[5].cond.txt_n + ' 温度:' +data.daily_forecast[5].tmp.min +'~'+data.daily_forecast[5].tmp.max);
    console.log(data.daily_forecast[6].date + '白天' +data.daily_forecast[6].cond.txt_d + ' 夜晚' +data.daily_forecast[6].cond.txt_n + ' 温度:' +data.daily_forecast[6].tmp.min +'~'+data.daily_forecast[6].tmp.max);
    console.log('');

    console.log('===========================end=========================')

}









    function error(){
        console.log('error');
    }

    module.exports = {
        success: success,
        error: error,
        successPrint:successPrint
    };
