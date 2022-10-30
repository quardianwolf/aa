import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="/asset/js/jquery-3.3.1.min.js" strategy="beforeInteractive"></Script>
        <Script src="/asset/js/bootstrap.min.js" strategy="beforeInteractive"></Script>
        <Script src="/asset/js/jquery-ui/jquery-1.10.2.710.js" strategy="beforeInteractive"></Script>
        <Script src="/asset/js/jquery-ui/jquery-ui_c2.js" strategy="beforeInteractive"></Script>
        <Script src="/asset/js/slick.min.js" strategy="beforeInteractive"></Script>
        <Script src="/asset/js/function-main.js" strategy="lazyOnload"></Script>
        <Script src="/asset/js/function-select-custom.js" strategy="lazyOnload"></Script>
        <Script src="/asset/js/function-input-number.js" strategy="lazyOnload"></Script>
      </body>
    </Html>
  )
}