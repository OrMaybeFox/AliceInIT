const axios = require('axios');
const exchangeRate = (from, to) => {
    return axios.get('http://data.fixer.io/api/latest?access_key=f110e31178c1683d7d9f8774af40cc8&format=1').then((response) => {

    
        let euroBase = 1/response.data.rates[from];
        let rate= euroBase * response.data.rates[to];
        return rate;
    });

;}

exchangeRate('USD', 'EUR').then((rate) => {
    console.log(rate);
});