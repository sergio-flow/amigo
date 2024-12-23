import styles from "./page.module.css";
import { langs, storageUrl } from "@/app/_utils/constants";
import Back from "@/app/_components/Back";
// import Bit from "@/app/_components/Bit";
import Link from "next/link";
import BitRouter from "@/app/_components/BitRouter";

const slugToTitle = slug => slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
const truncateString = (str = "", num) => str.length > num ? str.slice(0, num) + "..." : str;

// export const revalidate = 7884000

export async function generateMetadata({ params }) {
  const { edition, lang, slug, card, year, } = params

  // const currentYear = new Date().getFullYear();

  const data = await getData(lang, edition, slug, year)

  const content = data.script[parseInt(card) - 1]

  return {
    title: `${data.title} (${card}/${data.script.length})`,
    description: `${truncateString(content, 80)}`,
    openGraph: {
      images: [
        {
          url: `${storageUrl}/${year}/${edition}/${slug}/${card}.jpg`,
          // width: 400,
          // height: 400,
        },
      ]
    },
  }
}

export default async function Home({ params }) {
  const { edition, lang, slug, card, year } = params

  const data = await getData(lang, edition, slug, year)

  const { flag, youtubeUrl, title, script } = data

  const isLast = !!!data.script[parseInt(card)]
  const isFirst = card == '1'

  const baseHref = `/${lang}/${year}/${edition}/${slug}`
  const prevHref = isFirst ? null : `${baseHref}/${parseInt(card) === 1 ? 1 : parseInt(card) - 1}`
  const nextHref = isLast ? null : `${baseHref}/${parseInt(card) + 1}`

  const content = script[parseInt(card) - 1]
  const width = `${Math.ceil(parseInt(card) * 100 / script.length)}%`

  return (
    <div className={`main ${styles.main}`}>
      <Back lang={lang} path={`/${lang}/${year}/${edition}`} />

      <div className={styles.lesson}>
        <div className={styles.cards}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}>
            <div className={`${styles.content}`}>
              <h5><span className={`em ${flag}`} /> <a href={youtubeUrl} target="_blank">{title}</a></h5>

              <img src={`${storageUrl}/${year}/${edition}/${slug}/${card}.jpg`} alt={`AMIGO Comedy | ${title}`} />

              <h1>{content}</h1>

              <div className={styles.actions}>
                {!isFirst &&
                  <Link href={prevHref} className={styles.back}>
                    <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
                      <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
                    </svg>
                  </Link>
                }

                {isFirst && <div style={{ width: 64 }} />}

                {/* <button className={styles.loadNew}>
                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C14.5006 4 16.7332 5.14727 18.2002 6.94416M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 16.4183 16.4183 20 12 20C9.61061 20 7.46589 18.9525 6 17.2916M9 17H6V17.2916M18.2002 4V6.94416M18.2002 6.94416V6.99993L15.2002 7M6 20V17.2916" stroke="#35d992" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Load new</span>
                            </button> */}

                {!isLast && (
                  <Link href={nextHref} className={styles.next}>
                    <svg fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve">
                      <path id="XMLID_27_" d="M15,180h263.787l-49.394,49.394c-5.858,5.857-5.858,15.355,0,21.213C232.322,253.535,236.161,255,240,255
s7.678-1.465,10.606-4.394l75-75c5.858-5.857,5.858-15.355,0-21.213l-75-75c-5.857-5.857-15.355-5.857-21.213,0
c-5.858,5.857-5.858,15.355,0,21.213L278.787,150H15c-8.284,0-15,6.716-15,15S6.716,180,15,180z"/>
                    </svg>
                  </Link>
                )}

                {isLast && <div style={{ width: 64 }} />}
              </div>
            </div>

            <div className={styles.progressContainer}>
              <div className={styles.step} style={{ width }}></div>
            </div>
          </div>
        </div>

        <BitRouter
          slug={slug}
          edition={edition}
          card={card}
          prev={prevHref}
          next={nextHref}
          year={year}
          isLast={isLast}
        />
      </div>
    </div>
  );
}

async function getData(lang, edition, slug, year) {
  const language = langs[lang]['label']

  // const currentYear = new Date().getFullYear();

  const resVideos = await fetch(`${storageUrl}/${year}/${edition}.json`, { next: { revalidate: 43200 } })
  if (!resVideos.ok) throw new Error('Failed to fetch data')
  const resVideosJSON = await resVideos.json()
  const videoJSON = resVideosJSON.videos.find(o => o.slug === slug)

  const { flag, youtubeUrl } = videoJSON

  const title = videoJSON['title'][language]

  const res = await fetch(`${storageUrl}/${year}/${edition}/${slug}/${language}.txt`, { next: { revalidate: 7884000 } })
  if (!res.ok) throw new Error('Failed to fetch data')
  const res2 = await res.text()

  return {
    flag,
    title,
    slug,
    youtubeUrl,
    script: res2.split("\n")
  }
}