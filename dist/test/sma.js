"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
const axios_1 = __importDefault(require("axios"));
const na53Nq = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.get(`https://api.binance.com/api/v3/klines?symbol=BTTUSDT&interval=1d&limit=21`);
    const kline = {
        open: [],
        high: [],
        low: [],
        close: [],
    };
    res.data.forEach((element, index) => {
        if (index !== res.data.length - 1) {
            kline.open.push(parseFloat(element[1]));
            kline.high.push(parseFloat(element[2]));
            kline.low.push(parseFloat(element[3]));
            kline.close.push(parseFloat(element[4]));
        }
    });
    console.log(core_1.sma([kline.close], 13));
});
na53Nq();
