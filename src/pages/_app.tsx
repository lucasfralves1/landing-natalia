import Script from 'next/script';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Google Tag Manager Script */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-NF835BF';f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NF835BF');
          `,
        }}
      />

      <div className={`${inter.variable} antialiased`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;

