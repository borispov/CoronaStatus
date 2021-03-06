import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { GA_TRACKING_ID } from '../utils/gtag'

export default class extends Document {
  static async getInitialProps( ctx ) {
    const sheet = new ServerStyleSheet();
    const page = ctx.renderPage;

    try {
      ctx.renderPage = () => page({ enhanceApp: App => props => sheet.collectStyles(<App {...props} />) })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally { sheet.seal() }

  }
  render() {
    return (
      <html>
        <Head>
          { this.props.styleTags }
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <meta charSet="utf-8" />
          <title>nCorona - Novel Coronavirus Statistics & Resources for Coping</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="This website provides updated Coronavirus statistics as well as a resourceful list that includes general information for the public, methods & techniques for coping, activities for individuals, families and children, etc"/>
          <meta name="description" content="אתר זה כולל מידע ונתונים עדכניים אודות נגיף הקורונה, כמו כן כולל מידע שימושי עבור כלל הציבור הכולל מידע כללי ומידע ממשרדי הבריאות מהעולם, מידע שימושי ויעיל להתמודדות עם המצב כגון פעילויות עם הילדים, לימודים מקוונים ועוד"/>
          <meta property="og:title" content="https://nCorona.live"/>
          <meta property="og:description" content="COVID19 Novel Coronavirus live data & graphs covering total and daily deaths, recoveries, critical cases for each country as well as globally." />
          <meta property="og:image" content="https://ncorona.live/apple-touch-icon.png" />
          <meta property="og:site_name" content="nCorona C19" />

          <link rel="icon" type="image/x-icon" href="https://ncorona.live/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>

          <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700|Rubik:400,500,700&display=swap&subset=hebrew" rel="stylesheet" type="text/css" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
