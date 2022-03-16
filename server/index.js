const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

"use strict";

const ccxt = require ('ccxt');

var lastPrice_bit = 0
var lastPrice_eth = 0

;(async function main () {
    const index = 4
    const ohlcv_bit = await new ccxt.okcoin ().fetchOHLCV ('BTC/EUR', '15m')
    const ohlcv_eth = await new ccxt.okcoin ().fetchOHLCV ('ETH/USD', '15m')
    lastPrice_bit = ohlcv_bit[ohlcv_bit.length - 1][index]
    lastPrice_eth = ohlcv_eth[ohlcv_eth.length - 1][index]
}) ()

app.get("/bitcoin", (req, res) => {
    res.json({ message: [lastPrice_bit] });
});

app.get("/ethereum", (req, res) => {
    res.json({ message: lastPrice_eth });
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});