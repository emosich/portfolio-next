import "bootswatch/dist/cosmo/bootstrap.min.css"
import '../global.css'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return(
      <>
        <Head>
          <title>Erik Mosich</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
  


export default MyApp