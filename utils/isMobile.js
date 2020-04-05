import { useEffect } from 'react'

const getMobileDetect = userAgent => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i))
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPd/i));
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/));
  const isWindows = () => Boolean(userAgent.match(/IEMobilei/));
  const isSSR = () => Boolean(userAgent.match(/SSR/i))

  const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows())
  const isDesktop = () => Boolean(!isMobile() && !isSSR())
  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR
  }
}
const useMobileDetect = () => {
  useEffect(() => {}, [])
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent
  return getMobileDetect(userAgent)
}
export default useMobileDetect
