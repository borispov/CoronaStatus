import React, {
    useState,
    useEffect,
    useRef,
    createContext
} from 'react'

export const ProxyContext = createContext()

export const ProxyContextProvider = (props) => {

    const initialState = {
        ipAddress: 'localhost',
        countryName: 'Nowhere',
    }

    // Declare shareable proxy state
    const [proxy, setProxy] = useState(initialState)
    const prev = useRef()

    // Read and Write Proxy State to Local Storage
    useEffect(() => {
         if (proxy.countryName == 'Nowhere') {
            const localState = JSON.parse(localStorage.getItem('ip2proxy'))
            if (localState) {
                console.info('reading local storage')
                prev.current = localState.ipAddress
                setProxy(localState)
            }
        } else if (prev.current !== proxy.ipAddress) {
            console.info('writing local storage')
            localStorage.setItem('ip2proxy', JSON.stringify(proxy))
        }

        // if (prev.current === undefined && proxy.countryName == 'israel') {
        //     const localState = JSON.parse(localStorage.getItem('ip2proxy'))
        //     if (localState) {
        //         console.info('reading local storage')
        //         prev.current = localState.ipAddress
        //         setProxy(localState)
        //     } else {
        //       localStorage.setItem('ip2proxy', JSON.stringify(proxy))
        //     }
        // } else if (prev.current !== proxy.ipAddress) {
        //     console.info('writing local storage')
        //     localStorage.setItem('ip2proxy', JSON.stringify(proxy))
        // }
    }, [proxy])

    return(
        <ProxyContext.Provider value={[proxy, setProxy]}>
            {props.children}
        </ProxyContext.Provider>
    )
}
