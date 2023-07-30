const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geo=require('./utilis/geo')
const forg=require('./utilis/for')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'sajjad ahmed'
    })
  //  const webfrom= document.querySelector('form')
// const searchelemet=document.querySelector('submit')
// webfrom.addeventlistner('submit',(e)=>
// {
//     e.preventDefault()
//     console.log("kskskk")

// })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'sajjad ahmed'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'sajjad ahmed'
    })
})

app.get('/weather', (req, res) => {
     if(!req.query.address)
     {
         return res.send(
         {
             error:'no address provided'
         }
         )
     }
     geo(req.query.address,(error,{lat,long}={})=>
     {
        if(error)
        {
            console.log(error)
        }
        else
        {
            console.log('lat= '+lat+'long = '+long)
            forg(lat,long,(error,fodata)=>
            {
               if(error)
               {
                   
                   return res.send(foerror)
               }
               else{
                   console.log('temp = '+fodata+'°C')
                   res.send({
                    temprature: fodata,
                    location: req.query.address
                   })
               }
            })
        }
     }
     )
    
   

})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'sajjad ahmed',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'sajjad ahmed',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})