const util = require("./util.js");
const MARKET_URL = require("./util.js").MARKET_URL;
const TRADE_URL = require("./util.js").TRADE_URL;

const httpGetNosign = require("./util.js").httpGetNosign;
const httpPostSign = require("./util.js").httpPostSign;

/**
 * 获取最新价
 * @param {string} symbol - 必填，为 all 或交易对代码: btcusdt
 */
function getTicker(symbol) {
    let url = MARKET_URL + "ticker?symbol=" + symbol;
    return httpGetNosign(url);
}

/**
 * 获取挂单
 * @param {string} symbol - 必填，为 all 或交易对代码: btcusdt
 * @param {number|string} [depth = 200] - 选填项，默认为 200
 */
function getOrderbook(symbol, depth = 200) {
    let url = MARKET_URL + "orderbook?symbol=" + symbol + "&depth=" + depth;
    return httpGetNosign(url);
}

/**
 * 
 * @param {string} symbol - 必填，为 all 或交易对代码: btcusdt
 * @param {number|string} [size = 300] - 获取记录数量，按照时间倒序传输。默认为 300
 */
function getTrade(symbol, size = 300) {
    let url = MARKET_URL + "trades?symbol=" + symbol + "&size=" + size
    return httpGetNosign(url)
}

/**
 * 查询账户余额
 * @param {Object} config - 以字典形式传参。
 * apiid: 可在coinbene申请，
 * secret: 个人密钥(请勿透露给他人)，
 * timestamp: 时间戳，
 * account: 默认为exchange。
 * 
 * @param {string} config.apiid
 * @param {string} config.secret
 * @param {string|number} config.timestamp
 * @param {string} [config.account = "exchange"]
 * 
 */
function postBalance(config) {
    url = TRADE_URL + "balance"
    return httpPostSign(url, config)
}

/**
 * 下单
 * @param {Object} config - 以字典形式传参。
 * apiid: 可在coinbene申请，
 * secret: 个人密钥(请勿透露给他人)，
 * timestamp: 时间戳，
 * type: buy-limit / sell-limit
 * price: 购买单价
 * quantity: 购买数量
 * @param {string} config.apiid
 * @param {string} config.secret
 * @param {string|number} config.timestamp
 * @param {string} config.type
 * @param {string|number} config.price
 * @param {string|number} config.quantity
 */
function postOrderPlace(config) {
    url = TRADE_URL + "order/place"
    return httpPostSign(url, config)
}

/**
 * 查询委托
 * @param {Object} config - 以字典形式传参。
 * apiid: 可在coinbene申请，
 * secret: 个人密钥(请勿透露给他人)，
 * timestamp: 时间戳，
 * orderid: id (string)
 * 
 * @param {string} config.apiid
 * @param {string} config.secret
 * @param {string|number} config.timestamp
 * @param {string} orderid
 * 
 */
function postInfo(config) {
    url = TRADE_URL + "order/info"
    return httpPostSign(url, config)
}


/**
 * 查询当前委托
 * @param {Object} config - 以字典形式传参。
 * apiid: 可在coinbene申请，
 * secret: 个人密钥(请勿透露给他人)，
 * timestamp: 时间戳，
 * symbol: 交易对代码: btcusdt
 * 
 * @param {string} config.apiid
 * @param {string} config.secret
 * @param {string|number} config.timestamp
 * @param {string} symbol
 * 
 */
function postOpenOrders(config) {
    url = TRADE_URL + "order/open-orders"
    return httpPostSign(url, config)
}

/**
 * 撤单
 * @param {Object} config - 以字典形式传参。
 * apiid: 可在coinbene申请，
 * secret: 个人密钥(请勿透露给他人)，
 * timestamp: 时间戳，
 * orderid: id (string)
 * 
 * @param {string} config.apiid
 * @param {string} config.secret
 * @param {string|number} config.timestamp
 * @param {string} orderid
 * 
 */
function postCancel(config) {
    url = TRADE_URL + "order/cancel"
    return httpPostSign(url, config)
}

exports.getOrderbook = getOrderbook;
exports.getTicker = getTicker;
exports.getTrade = getTrade;

exports.postBalance = postBalance;
exports.postCancel = postCancel;
exports.postInfo = postInfo;
exports.postOpenOrders = postOpenOrders;
exports.postOrderPlace = postOrderPlace;
exports.postCancel = postCancel;
