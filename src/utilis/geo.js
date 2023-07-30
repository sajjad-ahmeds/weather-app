const request = require('request')
const geo=((address,callback)=>
     {
        const geourl='https://geocode.maps.co/search?q='+encodeURIComponent(address)
        request({url:geourl,json:true},(error,response)=>{
       
        if(error)
        {
            callback('error occured',undefined)
        }
        else
        {
            const lat=response.body[0].lat
            const long=response.body[0].lon
            callback(undefined,{
                 lat:response.body[0].lat,
             long:response.body[0].lon
            })
        }
    })
     })

     module.exports=geo