import Head from 'next/head'

const PageHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui"
    />
    <meta name="theme-color" content="#50c3f8" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-title" content="shuff.app" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
      integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700,900&display=swap"
    />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/inobounce/0.2.0/inobounce.min.js"></script>
  </Head>
)

export default PageHead
