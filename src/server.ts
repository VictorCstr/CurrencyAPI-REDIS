import express from 'express';
import CurrencyCachedControler from './controller/CurrencyCachedController';
import CurrencyControler from './controller/CurrencyController';

const app = express();

app.get('/', CurrencyControler.findCurrency )
app.get('/cache' , CurrencyCachedControler.findCurrency)

app.listen(3000, () =>{
    console.log('Server running on port 3000')
})