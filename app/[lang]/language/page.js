import Main from "./main";
import { getDictionary } from '../dictionaries'

export async function generateMetadata({ params: { lang } }) {
    const { home } = await getDictionary(lang)
    return {
        title: "Language",
        description: "Choose your language."
    }
}

export default ({ params: { lang } }) => <Main lang={lang} />