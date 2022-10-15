import React from 'react'
import Head from 'next/head'

import Footer from './Footer'
import Header from './Header'
import useSiteMetadata from './SiteMetadata'

const Layout = ({ children, footer }: any) => {
    const { fileName } = useSiteMetadata()
    const SpecificFooter = footer || Footer;

    return (
        <>
            <Head>
                <title>{ fileName }</title>
            </Head>
            <div id='app'>
                {children}
            </div>
        </>
    )

}

export default Layout