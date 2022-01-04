const request = require('request')

const WeatherUpdate = (laitude,longitude,callback) => {

    const url = "http://api.weatherstack.com/current?access_key=649b0479d2c7c4676cc5fcc96b7577fb&query="+laitude+","+longitude+"&units=f"

    request({url : url,json : true},(error,{body}) => {
    if(error)
    {
        callback('please check url and network connection',undefined);
    }
    else if(body.error)
    {
        callback('please provide correct parameterserror',undefined);
    } 
    else{
        callback(undefined,"The Temp is "+body.current.temperature+" and description is "+body.current.weather_descriptions[0]);
    }
        
    })
}


module.exports = WeatherUpdate;