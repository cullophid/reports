import React from 'react'
import App from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from '../src/theme'
const Global = createGlobalStyle`
  html, body, #__next {
    margin:0;
    padding:0;
    height:100%;
  }
`
class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <Global />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    )
  }
}

export default MyApp