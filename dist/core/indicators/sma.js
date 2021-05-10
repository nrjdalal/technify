"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sma = void 0;
const roundoff_1 = __importDefault(require("../utils/roundoff"));
const sma = (source, period) => {
    if (source[0].length < period) {
        return [];
    }
    const sma = [];
    source[0].forEach((element, index) => {
        const prices = source[0].slice(index - period + 1, index + 1);
        let sop = 0;
        prices.forEach((element) => {
            sop += element;
        });
        const limit = roundoff_1.default(prices);
        sma.push((sop / period).toFixed(limit));
    });
    return sma;
};
exports.sma = sma;
