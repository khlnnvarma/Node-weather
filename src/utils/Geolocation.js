const request = require('request')

const getLocation = (locationName,callback) => {
const locationURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+locationName+".json?access_token=pk.eyJ1Ijoia2hsbm52YXJtYSIsImEiOiJja3h5ZnB6cGIydXJpMndwNHljbjVubWpsIn0.vxXL_KEaA1eJApQ0IQakWQ&limit=1";
    request({url : locationURL,json : true}, (error,{body}) => {
    if(error)
    {
        callback('please check url and network connection',undefined);
    }
    else if(body.features.length == 0)
    {
        callback('please provide correct parameterserror',undefined);
    } 
    else{
        const location = {latitude: body.features[0].center[0],
            longitude: body.features[0].center[1]};

            callback(undefined,location);
    }
    })
}


module.exports = getLocation;