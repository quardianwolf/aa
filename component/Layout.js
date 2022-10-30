import Head from 'next/head'
import React from 'react'

const Layout = ({title, children}) => {
  return (
    <div>
      <Head>
        <title>{title ? title + ' - FanteziDunyam.com' : 'FanteziDunyam.com'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="asset/img/logo2.png" />
      </Head>
        {children}
    </div>
  )
}

export default Layout