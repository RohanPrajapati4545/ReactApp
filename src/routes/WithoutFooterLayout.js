import React from 'react'
import Navbar from '../components/Navbar'

const WithoutFooterLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default WithoutFooterLayout