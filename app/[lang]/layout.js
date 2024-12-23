import { Noto_Sans, Permanent_Marker } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "./main.css";

import Link from "next/link";
import { getDictionary } from "./dictionaries";

const noto = Noto_Sans({ variable: [400, 500, 600, 700, 800, 900], subsets: ["latin"] })
const permanentMarker = Permanent_Marker({ weight: '400', subsets: ["latin"] })

export const metadata = {
  title: {
    template: 'AMIGO Comedy | %s', // | Amigo Comedy
    default: 'AMIGO Comedy', // a default is required when creating a template
  },
  description: "Monthly Stand-up Jokes.",
  metadataBase: new URL('https://www.amigo.cy/'),
  // openGraph: {
  //   images: [
  //     {
  //       url: "https://www.amigo.cy/logo.jpg",
  //       width: 300,
  //       height: 300,
  //     },
  //   ]
  // },
};

export default async function RootLayout({ children, params }) {
  const { lang } = params

  const dictionary = await getDictionary(lang)

  return (
    <html lang={lang}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body className={noto.className}>
        <nav>
          <div className={'nav-inner'}>
            <Link href={`/${lang}`} className="logo">
              <img src={`/android-chrome-512x512.png`} alt="" />
              <span className={"logo-text"}>AMIGO <span>Comedy</span></span>
            </Link>

            <Link href={`/${lang}/language`} className='language'>
              {lang === 'en' && <span className='em em-gb'></span>}
              {lang === 'zh' && <span className='em em-cn'></span>}
              {lang === 'es' && <span className='em em-es'></span>}
              {lang === 'hi' && <span className='em em-flag-in'></span>}
              {lang === 'ar' && <span className='em em-sa'></span>}
              {lang === 'bn' && <span className='em em-flag-bd'></span>}
              {lang === 'pt' && <span className='em em-flag-pt'></span>}
              {lang === 'ru' && <span className='em em-ru'></span>}
              {lang === 'ja' && <span className='em em-jp'></span>}
              {lang === 'pa' && <span className='em em-flag-in'></span>}
              {lang === 'de' && <span className='em em-de'></span>}
              {lang === 'jv' && <span className='em em-id'></span>}
              {lang === 'ko' && <span className='em em-kr'></span>}
              {lang === 'fr' && <span className='em em-fr'></span>}
              {lang === 'te' && <span className='em em-flag-in'></span>}
              {lang === 'mr' && <span className='em em-flag-in'></span>}
              {lang === 'ta' && <span className='em em-flag-in'></span>}
              {lang === 'vi' && <span className='em em-flag-vn'></span>}
              {lang === 'ur' && <span className='em em-flag-pk'></span>}
              {lang === 'tl' && <span className='em em-flag-ph'></span>}
              {lang === 'ro' && <span className='em em-flag-ro'></span>}
              {lang === 'sq' && <span className='em em-flag-al'></span>}
              {lang === 'ne' && <span className='em em-flag-np'></span>}
              {lang === 'km' && <span className='em em-flag-kh'></span>}
              {lang === 'si' && <span className='em em-flag-lk'></span>}
              {lang === 'am' && <span className='em em-flag-et'></span>}
              {lang === 'ps' && <span className='em em-flag-af'></span>}
              {lang === 'my' && <span className='em em-flag-mm'></span>}
              {lang === 'so' && <span className='em em-flag-so'></span>}
            </Link>
          </div>
        </nav>

        <main>
          {children}

          <div className={'footer'}>
            <div className={'brand'}>{dictionary['copyright']}</div>
            <div className={'links'}>
              <Link href='/privacy-policy'>{dictionary['privacy']}</Link>
              <Link href='/terms-of-use'>{dictionary['terms']}</Link>
            </div>
          </div>
        </main>

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SBNBGZLG0E" />
        <Script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SBNBGZLG0E');
        `}</Script>
      </body>
    </html>
  );
}
