const api = require("./api.js");

// 查询最新价
api.getTicker('btcusdt').then(res => { console.log(res, '\n') });
// result:
// {
//     "ticker": [
//         {
//             "symbol": "BTCUSDT",
//             "24hrHigh": "6798.39",
//             "last": "6714.54",
//             "24hrVol": "5591.1010",
//             "ask": "6714.55",
//             "24hrLow": "6611.98",
//             "bid": "6714.54",
//             "24hrAmt": "37694522.351754"
//         }
//     ],
//     "status": "ok",
//     "timestamp": 1529598925985
// }

// 查询成交记录, 传参: symbol, size默认为300
api.getTrade('ethusdt', 2).then(res => { console.log(res, '\n') });
// {
//     "symbol": "ETHUSDT",
//     "trades": [
//         {
//             "price": "529.07",
//             "quantity": "0.01",
//             "time": 1529599014000,
//             "take": "sell",
//             "tradeId": "201806220035559610014931201806220036548650015602"
//         },
//         {
//             "price": "529.07",
//             "quantity": "0.11",
//             "time": 1529599014000,
//             "take": "sell",
//             "tradeId": "201806220035559610014931201806220036541990015342"
//         }
//     ],
//     "status": "ok",
//     "timestamp": 1529599015128
// }

// 下订单, 以字典形式传参
let config = {
    "apiid": "xxx",
    "secret": "xxx",
    "timestamp": new Date().getTime(),
    "type": "buy-limit",
    "price": 0.001001,
    "quantity": 1,
    "symbol": "conieth"
}
api.postOrderPlace(config).then(res => { console.log(res, '\n') });
// result:
// {
//     "orderid": "201806220040123660019271",
//     "status": "ok",
//     "timestamp": 1529599212395
// }

// 查询当前委托, 以字典形式传参
config = {
    "apiid": "XXX",
    "secret": "XXX",
    "timestamp": new Date().getTime(),
    "symbol": "LTCBTC"
}
api.postOpenOrders(config).then(res => { console.log(res, '\n') });
// result:
// {
//     "orders": {
//         "result": [
//             {
//                 "createtime": 1529628195000,
//                 "filledamount": "0",
//                 "filledquantity": "0",
//                 "orderid": "201806220043150910015121",
//                 "orderquantity": "1",
//                 "orderstatus": "unfilled",
//                 "price": "0.001001",
//                 "symbol": "CONIETH",
//                 "type": "buy-limit"
//             }
//         ],
//         "totalcount": 1,
//         "pagesize": 200,
//         "page": 1
//     },
//     "status": "ok",
//     "timestamp": 1529599492923
// }

// 撤销订单, 以字典形式传参
config = {
    "apiid": "xxx",
    "secret": "xxx",
    "timestamp": new Date().getTime(),
    "orderid": "201806220043150910015121"
}
api.postCancel(config).then(res => { console.log(res, '\n') });