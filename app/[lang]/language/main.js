import Link from 'next/link';
import { getDictionary } from '../dictionaries'
import Back from '@/app/_components/Back';

const Main = async ({ slug, lang }) => {
  const { language } = await getDictionary(lang)

  return (
    <div className='main'>
      <Back lang={lang} path="/" />

      <div className="services">
        <Link href="/en"><span className='em em-gb'></span> English</Link>
        <Link href="/zh"><span className='em em-cn'></span> Chinese</Link>
        <Link href="/es"><span className='em em-es'></span> Spanish</Link>
        <Link href="/hi"><span className='em em-flag-in'></span> Hindi</Link>
        <Link href="/ar"><span className='em em-sa'></span> Arabic</Link>
        <Link href="/bn"><span className='em em-flag-bd'></span> Bengali</Link>
        <Link href="/pt"><span className='em em-flag-pt'></span> Portuguese</Link>
        <Link href="/ru"><span className='em em-ru'></span> Russian</Link>
        <Link href="/fr"><span className='em em-fr'></span> French</Link>
        <Link href="/ro"><span className='em em-flag-ro'></span> Romanian</Link>
      </div>
    </div>
  );
}



export default Main