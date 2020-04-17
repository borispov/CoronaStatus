
const formatNumber = x => x
  .toString()
  .split('')
  .reverse()
  .map((x,i) => i % 3 === 0 ? x + ',' : x)
  .reverse()
  .join('')
  .slice(0, -1)

const calcDiff = current => prev => current !== 0 ? ((current - prev) / prev * 100).toFixed(2) : 0
// Percentage of increase = |100 - 150|/100 = 50/100 = 0.5 = 50%

export const F = {
  formatNumber,
  calcDiff
}
