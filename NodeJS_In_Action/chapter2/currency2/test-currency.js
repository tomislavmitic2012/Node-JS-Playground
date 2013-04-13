var Currency = require('./lib/currency'),
    canadianDollar = 0.91;

currency = new Currency(canadianDollar);
console.log(currency.canadianToUS(50));
console.log(currency.USToCanadian(30));
