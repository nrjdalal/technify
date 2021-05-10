import roundoff from '../utils/roundoff'

export const sma = (source, period) => {
  if (source[0].length < period) {
    return []
  }

  const sma = []

  source[0].forEach((element, index) => {
    const prices = source[0].slice(index - period + 1, index + 1)

    let sop = 0

    prices.forEach((element) => {
      sop += element
    })

    const limit = roundoff(prices)
    sma.push((sop / period).toFixed(limit))
  })

  return sma
}
