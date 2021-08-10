import Head from 'next/head'
import { defaultTheme } from '../themes'

const PageHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui"
    />
    <meta name="theme-color" content={defaultTheme.borderColor} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="shuff.app" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link rel="apple-touch-icon" href="/icons/apple-touch-icon-iphone-60x60.png" />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="/icons/apple-touch-icon-ipad-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="/icons/apple-touch-icon-iphone-retina-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="/icons/apple-touch-icon-ipad-retina-152x152.png"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
      integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
      crossOrigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,700;1,400&display=swap"
      rel="stylesheet"
    />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.2.0/inobounce.min.js" />
  </Head>
)

export default PageHead
