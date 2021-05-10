import { ema } from '../core'

import axios from 'axios'

const na53Nq = async () => {
  const res = await axios.get(
    `https://api.binance.com/api/v3/klines?symbol=LINAUSDT&interval=1m&limit=1000`
  )

  const kline = {
    open: [],
    high: [],
    low: [],
    close: [],
  }

  res.data.forEach((element, index) => {
    if (index !== res.data.length) {
      kline.open.push(parseFloat(element[1]))
      kline.high.push(parseFloat(element[2]))
      kline.low.push(parseFloat(element[3]))
      kline.close.push(parseFloat(element[4]))
    }
  })

  console.log(ema([kline.close, 0], 12).slice(-10))
}

na53Nq()
