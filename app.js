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

app.get('/product-details', (req, res) => {
    res.render('pages/product-details')
})

app.get('/cart', (req, res) => {
    res.render('pages/cart')
})

app.listen(3000)