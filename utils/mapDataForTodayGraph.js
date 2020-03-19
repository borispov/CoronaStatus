const vocab = {
  'cases': 'infected',
  'recovered': 'recovered',
  'country': 'country',
  'deaths': 'deaths',
  'todayCases': 'today',
}

const prop = o => k => o[k]
const switchToVocab = word => vocab[word]

const mapDataForTodayGraph = d => {
  const mapToKeyword = (k) => ({[switchToVocab(k)]: prop(d)(k)})
  return Object.keys(d).map(mapToKeyword)
}
export default mapDataForTodayGraph
