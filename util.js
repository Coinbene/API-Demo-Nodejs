const rp = require('request-promise-native');
const md5 = require('js-md5');

const MARKET_URL = "http://api.coinbene.com/v1/market/"
const TRADE_URL = "http://api.coinbene.com/v1/trade/"
const HEADER_DICT = {
    "User-Agent": "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
    "Content-Type": "application/json;charset=utf-8",
    "Connection": "keep-alive"
}

// 生成簽名
function sign(data) {
    let keys = Object.keys(data);
    keys.sort();

    let message = "";
    for (let i = 0; i < keys.length; i++) {
        if (i > 0) {
            message += '&';
        }
        message += keys[i] + '=' + data[keys[i]];
    }

    let hash = md5.create();
    hash.update(message.toUpperCase());
    return hash.hex();
}

function createTimestamp() {
    return new Date().getTime();
}

function httpGetNosign(url) {
    return httpRequest(url);
}

function httpPostSign(url, dic) {
    let mysign = sign(dic);
    delete dic['secret'];
    dic['sign'] = mysign;

    return httpRequest(url, dic);
}

async function httpRequest(url, data) {
    let response;
    if (data === undefined) {
        response = await rp(url);
    } else {
        let option = {
            method: 'POST',
            uri: url,
            body: data,
            header: HEADER_DICT,
            json: true
        }
        response = JSON.stringify(await rp(option));
    }
    return response;
}

exports.MARKET_URL = MARKET_URL;
exports.TRADE_URL = TRADE_URL;
exports.sign = sign;
exports.createTimestamp = createTimestamp;
exports.httpGetNosign = httpGetNosign;
exports.httpPostSign = httpPostSign;
exports.httpRequest = httpRequest;