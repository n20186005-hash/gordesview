import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { guides } from '@/lib/fr-guides';
export const metadata:Metadata={title:'Guides pratiques de Gordes | Gordes View',description:'Préparer une visite de Gordes : photographies, stationnement, itinéraires, patrimoine et saisons.',alternates:{canonical:'https://www.gordesview.com/fr/guides/'}};
export function generateStaticParams(){return [{locale:'fr'}];}
export default async function Guides({params}:{params:Promise<{locale:string}>}){
  const {locale}=await params;if(locale!=='fr') notFound();setRequestLocale('fr');
  return <div className="pt-24 pb-20 max-w-6xl mx-auto px-4"><p className="section-label">Explorer le Luberon</p><h1 className="text-4xl md:text-5xl font-semibold mb-5">Guides pratiques pour visiter Gordes</h1><p className="mb-10 max-w-3xl">Photographie, patrimoine, accès, saisons et excursions : choisissez le sujet qui répond à votre projet de visite. Les informations variables sont à vérifier auprès des sites concernés.</p><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{guides.map(g=><a key={g.slug} href={`/fr/guides/${g.slug}/`} className="card hover:opacity-80"><h2 className="text-xl font-semibold mb-3">{g.title}</h2><p className="text-sm" style={{color:'var(--text-secondary)'}}>{g.intro}</p></a>)}</div></div>;
}
