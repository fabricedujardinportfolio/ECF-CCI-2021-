const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));


// EJS
app.set('views', "./views")
app.set('view engine', 'ejs')

        

// INCLUSE LAST FOR TRY 
let message = "Ces trop cool j'ai placer une variable ..."

app.get('/', (req, res) => {
    res.render('home',{message:message})
})

app.get('/product-details-1', (req, res) => {
    res.render('product-details-1')
})
app.get('/product-details-2', (req, res) => {
    res.render('product-details-2')
})

app.get('/product-details-3', (req, res) => {
    res.render('product-details-3')
})
app.get('/product-details-4', (req, res) => {
    res.render('product-details-4')
})
app.get('/product-details-5', (req, res) => {
    res.render('product-details-5')
})
app.get('/product-details-6', (req, res) => {
    res.render('product-details-6')
})


app.get('/cart', (req, res) => {
    res.render('cart')
})

app.listen(3000)