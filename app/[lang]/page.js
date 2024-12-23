import { langs } from "../_utils/constants";
import getMonth from "../_utils/getMonth";
import { getDictionary } from "./dictionaries";
import Main from "./main";
import { maxEdition, prevEdition, storageUrl } from "@/app/_utils/constants";

export const revalidate = 60

export async function generateMetadata({ params }) {
    const { edition, lang, slug, card } = params

    const dictionary = await getDictionary(lang)

    return {
        title: `AMIGO Comedy | ${dictionary[getMonth()]}`,
        description: dictionary['title']
    }
}

export default async ({ params }) => {
    const data = await getData(params)
    const currentYear = new Date().getFullYear();

    return (
        <Main
            prev={data.hasPrev ? getMonth(-1) : null}
            next={null}
            edition={getMonth()}
            data={data}
            lang={params.lang}
            year={currentYear}
        />
    )
}

async function getData(params) {
    const { lang } = params

    const language = langs[lang]['label']

    const currentYear = new Date().getFullYear();

    const res = await fetch(`${storageUrl}/${currentYear}/${getMonth()}.json`)

    if (!res.ok) throw new Error('Failed to fetch data')

    const resJSON = await res.json()

    resJSON.videos = resJSON.videos.map(v => ({
        ...v,
        title: v['title'][language]
    }))

    return resJSON
}
