const express = require('express');
const path = require('path');
const geolocation = require('./utils/Geolocation');
const WeatherDetails = require('./utils/WeatherDetails')

const app = express();

const publicDirectoryPath = path.join(__dirname,'../public');

//app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>
{
    res.send("reuest received for index");
})

app.get('/home',(req,resp)=>{
    resp.send("request came for Home page");
})

app.get('/about',(req,resp)=>{
    resp.send("<h1>About</h1>");
})

app.get('/weather',(req,resp)=>{
    if(!req.query.location)
    {
        return resp.send({
            error : "Please provide the location"
        })
    }

    geolocation(req.query.location,(error,{latitude,longitude}={}) => {
            if(error){
                return resp.send({
                    errorMsg : error
                })
            }
           if(error == undefined)
           {
             WeatherDetails(latitude,longitude,(error,Weatherdata)=>{
                if(error){
                    return resp.send({
                        errorMsg : error
                    })
                }
                if(error ==  undefined)
                {
                    return resp.send({
                        location : {
                            latitude : latitude,
                            longitude : longitude
                        },
                        ClimateDetails : Weatherdata
                    })
                }

             })
           }
    })


    
})


app.listen(3000,() => {
    console.log("app server started");
})
