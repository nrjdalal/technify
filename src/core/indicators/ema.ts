import { sma } from './sma'
import roundoff from '../utils/roundoff'

export const ema = (source, period) => {
  if (source[0].length < period) {
    return []
  }

  const ema = []

  const emaFirst = sma(source, period)

  let emaLast = 0

  source[0].forEach((element, index) => {
    const prices = source[0].slice(index - period + 1, index + 1)

    const multiplier = 2 / (period + 1)

    if (emaLast !== 0) {
      emaLast = (element - emaLast) * multiplier + emaLast
      const limit = roundoff(prices)
      ema.push(emaLast.toFixed(limit))
    } else {
      emaLast = parseFloat(emaFirst[index])
      const limit = roundoff(prices)
      ema.push(emaLast.toFixed(limit))
    }
  })

  return ema
}
