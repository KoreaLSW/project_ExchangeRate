import axios from 'axios';

export function selectSymbol() {
    return axios.get('/symbol/symbols.json');
}

export function selectLatestRates(base, amount) {
    return axios.get('https://api.exchangerate.host/latest', {
        params: {
            base,
            amount,
            places: '2',
        },
    });
}

export function selectConvertCurrency(from, to, amount) {
    return axios.get('https://api.exchangerate.host/convert', {
        params: {
            from,
            to,
            amount,
            places: '2',
        },
    });
}
