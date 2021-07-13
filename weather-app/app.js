const request = require("request")
const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

const address = process.argv[2]

if(!address){
    console.log("Please provide an address.")
}else{
    geocode(address,(error,data)=>{ //Object destructuring (error,{latitude,longitude,location}={})
        if(error){
            console.log(error)
        }else{
            forecast(data.latitude,data.longitude,(error,forecastData)=>{ //callback chaining
                if(error){
                    return console.log(error)
                }
                console.log(data.location)
                console.log(forecastData)
        })
        }
    })
}