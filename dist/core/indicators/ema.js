"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ema = void 0;
const sma_1 = require("./sma");
const roundoff_1 = __importDefault(require("../utils/roundoff"));
const ema = (source, period) => {
    if (source[0].length < period) {
        return [];
    }
    const ema = [];
    const emaFirst = sma_1.sma(source, period);
    let emaLast = 0;
    source[0].forEach((element, index) => {
        const prices = source[0].slice(index - period + 1, index + 1);
        const multiplier = 2 / (period + 1);
        if (emaLast !== 0) {
            emaLast = (element - emaLast) * multiplier + emaLast;
            const limit = roundoff_1.default(prices);
            ema.push(emaLast.toFixed(limit));
        }
        else {
            emaLast = parseFloat(emaFirst[index]);
            const limit = roundoff_1.default(prices);
            ema.push(emaLast.toFixed(limit));
        }
    });
    return ema;
};
exports.ema = ema;
