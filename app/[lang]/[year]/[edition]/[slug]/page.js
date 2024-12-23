import { redirect } from "next/navigation";

export default function Home({ params }) {
  const { edition, lang, slug, year } = params

  redirect(`/${lang}/${year}/${edition}/${slug}/1`)

  return null
}