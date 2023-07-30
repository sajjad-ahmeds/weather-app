const { response } = require('express')
const request = require('request')

const forg =((lat,long,callback)=>
{
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=2f5ef8dad1aaa4f7cc3f6a42390db3ea&units=metric').then((response)=>
    {
        response.json().then((data)=>{
            if(data.error)
       {
        console.log(data.error)
           callback(data.error,undefined)
       }
       else{
      const temp=data.main.temp
         callback(undefined,temp) }})
          

        })
    })

//     request({url: url, json: true }, (error,response) => {
//        if(error)
//        {
//            callback(error,undefined)
//        }
//        else{
//         const temp=response.body.main.temp
//         callback(undefined,temp) }})
   

// })
module.exports=forg