/* eslint-disable react/display-name */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="stylesheet" href="https://use.typekit.net/jpj8own.css" /> */}
          <link
            rel="preload"
            href="/fonts/EditorialNew-Ultralight.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
