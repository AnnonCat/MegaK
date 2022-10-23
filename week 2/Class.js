class Country {
    constructor(currency, language, currencyConvertRatioToUsd) {
        this.currency = currency;
        this.language = language;
        this.currencyConvertRatioToUsd = currencyConvertRatioToUsd;
        this.isShengen = true;
    }

    convertMoney(valueInLocalCurrency) {
        return valueInLocalCurrency * this.currencyConvertRatioToUsd;
    }
}

const poland = new Country('PLN', 'PL', 1/5);
const souvenirInPln = 50;
const souvenirInUsd = poland.convertMoney(souvenirInPln);
console.log(souvenirInUsd);