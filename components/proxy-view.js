import React, { useContext } from 'react'
import { ProxyContext } from '../context/proxy-context'

const ProxyView = () => {
    const [proxy] = useContext(ProxyContext)
    const { ipAddress, countryName } = proxy

    return (
        <div className="box center" 
            style={{
              fontSize: '18px', 
              textAlign: 'center', 
              padding: '12px', 
              margin: '0 auto', 
              width: '100%'
            }}>
                <ul>
                    <li>IP Address : {ipAddress} </li>
                    <li>Country : {countryName} </li>
                </ul>
        </div>
    )
}

export default ProxyView
