import { langs } from "@/app/_utils/constants";
import Main from "../../main";
import { nextEdition, prevEdition, storageUrl } from "@/app/_utils/constants";
import { getDictionary } from "../../dictionaries";
import getMonth from "@/app/_utils/getMonth";

export const revalidate = 60

export async function generateMetadata({ params }) {
    const { edition, lang, slug, card } = params

    const dictionary = await getDictionary(lang)

    return {
        title: `${dictionary[edition]}`,
        description: dictionary['title']
    }
}

export default async ({ params }) => {
    const data = await getData(params)
    // const currentYear = new Date().getFullYear();

    return (
        <Main
            prev={data.hasPrev ? getMonth(-1, params.edition) : null}
            next={data.hasNext ? getMonth(+1, params.edition) : null}
            edition={params.edition}
            data={data}
            lang={params.lang}
            year={params.year}
        />
    )
}

async function getData(params) {
    const { lang, edition } = params

    const language = langs[lang]['label']

    // const currentYear = new Date().getFullYear();

    const res = await fetch(`${storageUrl}/${params.year}/${edition}.json`, { next: { revalidate: 43200 } })

    if (!res.ok) throw new Error('Failed to fetch data')

    const resJSON = await res.json()

    resJSON.videos = resJSON.videos.map(v => ({
        ...v,
        title: v['title'][language]
    }))

    return resJSON
}
