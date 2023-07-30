


  const webfrom= document.querySelector('form')
 const searchelemet=document.querySelector('input')
 var msg1=document.querySelector('#msg1')
 webfrom.addEventListener('submit',(e)=>
 {
     e.preventDefault()
     console.log(searchelemet.value)
   
     msg1.textContent='رائے مہربانی انتظار کریں'
      fetch('http://localhost:3000/weather?address='+searchelemet.value).then((response)=>
      {
        response.json().then((data)=>{
            if(data.error)
       {
        console.log(data.error)
        msg1.textContent=data.error
           
       }
       else{
        console.log(data.temprature)
        msg1.textContent='temprarture of '+data.location+ ' is '+data.temprature+'°C'
      
         }})
          

      })

    
  } )
    
   



