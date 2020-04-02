import React from 'react' import Document, { Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../utils/gtag'

export default class extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="This website provides updated Coronavirus statistics as well as a resourceful list that includes general information for the public, methods & techniques for coping, activities for individuals, families and children, etc"/>
          <meta name="description" content="אתר זה כולל מידע ונתונים עדכניים אודות נגיף הקורונה, כמו כן כולל מידע שימושי עבור כלל הציבור הכולל מידע כללי ומידע ממשרדי הבריאות מהעולם, מידע שימושי ויעיל להתמודדות עם המצב כגון פעילויות עם הילדים, לימודים מקוונים ועוד"/>

          <link rel="icon" type="image/x-icon" href="https://ncorona.live/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>

          <link
            href='https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap'
            rel='stylesheet'
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
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
