import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { guides } from '@/lib/fr-guides';
import { SITE_URL } from '@/lib/site-data';

// Selected by visually reviewing the existing gallery; all original files remain untouched.
// A photograph illustrates the named subject, not necessarily every stop in a multi-stop itinerary.
const photos: Record<string, [number,string]> = {
 'photo-gordes-bel-air':[33,'Panorama du village perché de Gordes'], 'lever-soleil-gordes':[23,'Soleil bas sur un paysage provençal'],
 'coucher-soleil-gordes':[23,'Lumière du soir sur les reliefs provençaux'], 'visiter-gordes-en-une-heure':[21,'Rues et maisons de Gordes sur le relief'],
 'demi-journee-gordes':[25,'Maisons de pierre de Gordes'], 'journee-gordes-senanque':[13,'Champ de lavande dans le Luberon'],
 'gordes-roussillon-itineraire':[19,'Paysage d’ocre rouge du Luberon'], 'gordes-les-bories':[2,'Cabanes en pierre sèche du Village des Bories'],
 'chateau-de-gordes-guide':[32,'Façade et tours du château de Gordes'], 'eglise-saint-firmin-gordes':[26,'Intérieur d’une église de Gordes'],
 'caves-du-palais-saint-firmin':[18,'Escalier en pierre dans un espace ancien'], 'marche-gordes':[15,'Ruelle de Gordes et commerces'],
 'parking-centre-gordes':[32,'Château de Gordes près du centre'], 'stationnement-camping-car-gordes':[31,'Vue sur le paysage autour de Gordes'],
 'gordes-sans-voiture':[17,'Passage étroit dans les rues de Gordes'], 'avignon-gordes':[4,'Pont de pierre à Avignon'],
 'apt-gordes':[31,'Paysage rural du Luberon'], 'cavaillon-gordes':[33,'Panorama de Gordes vu de la route'],
 'gordes-avec-enfants':[25,'Vue des maisons de Gordes'], 'gordes-accessibilite':[17,'Ruelle étroite aux pavés de Gordes'],
 'gordes-par-temps-de-pluie':[16,'Village de Gordes vu parmi les arbres'], 'gordes-en-ete':[22,'Paysage provençal en été'],
 'gordes-en-hiver':[12,'Village de pierre dans le relief du Luberon'], 'gordes-au-printemps':[8,'Végétation près des maisons en pierre'],
 'gordes-en-automne':[6,'Bâtiment de pierre dans la végétation'], 'pierre-seche-gordes':[7,'Mur de pierre sèche le long d’un chemin'],
 'geologie-gordes':[29,'Affleurements de roche calcaire'], 'village-perche-gordes':[21,'Maisons de Gordes sur un escarpement'],
 'photographie-telephone-gordes':[33,'Vue panoramique de Gordes'], 'gordes-hebergement-quartiers':[22,'Hameau et jardins dans le Luberon'],
 'saveurs-luberon-gordes':[24,'Enseignes dans une ruelle provençale']
};

type Props = { params: Promise<{ locale: string; slug: string }> };
export function generateStaticParams() { return guides.map(g => ({locale:'fr',slug:g.slug})); }
export async function generateMetadata({params}:Props):Promise<Metadata> {
  const {locale,slug}=await params;
  const g=guides.find(x=>x.slug===slug);
  if(locale!=='fr'||!g) return {};
  const url=`${SITE_URL}/fr/guides/${slug}/`;
  return {title:`${g.title} | Gordes View`,description:g.intro.slice(0,155),alternates:{canonical:url,languages:{fr:url,'x-default':url}},openGraph:{type:'article',title:g.title,description:g.intro,url,locale:'fr_FR'}};
}
export default async function GuidePage({params}:Props){
  const {locale,slug}=await params;
  const g=guides.find(x=>x.slug===slug);
  if(locale!=='fr'||!g) notFound();
  setRequestLocale('fr');
  const map=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(g.mapName)}`;
  const others=guides.filter(x=>x.slug!==g.slug).slice(Math.max(0,guides.indexOf(g)-1),Math.max(0,guides.indexOf(g)-1)+3);
  const canonical=`${SITE_URL}/fr/guides/${slug}/`;
  const photo=photos[slug];
  const schema={'@context':'https://schema.org','@type':'Article',headline:g.title,description:g.intro,inLanguage:'fr',mainEntityOfPage:canonical,author:{'@type':'Organization',name:'Gordes View'}};
  return <article className="pt-24 pb-20"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><div className="max-w-5xl mx-auto px-4">
    <nav aria-label="Fil d’Ariane" className="text-sm mb-8" style={{color:'var(--text-secondary)'}}><a href="/fr/">Accueil</a> / <a href="/fr/guides/">Guides de Gordes</a> / {g.title}</nav>
    <p className="section-label">Conseils de visite · Gordes, Luberon</p><h1 className="text-4xl md:text-5xl font-semibold mb-6">{g.title}</h1>
    <p className="text-lg mb-8 max-w-3xl" style={{color:'var(--text-secondary)'}}>{g.intro}</p>
    {photo && <figure className="mb-10"><img src={`/gallery/images%20(${photo[0]}).jpg`} alt={photo[1]} width="900" height="600" loading="lazy" className="w-full rounded-xl object-cover max-h-[520px]"/><figcaption className="mt-2 text-sm" style={{color:'var(--text-muted)'}}>{photo[1]} · Photographie de la galerie existante</figcaption></figure>}
    <div className="grid md:grid-cols-3 gap-8"><div className="md:col-span-2 space-y-8">
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Ce qu’il faut comprendre</h2><p>{g.context}</p><p className="mt-4">Le panorama du Rocher Bel-Air et le centre du village sont deux étapes distinctes. Pour une visite agréable, adaptez votre programme à la lumière, à la circulation et à la fréquentation du jour.</p></section>
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Parcours conseillé</h2><ol className="list-decimal pl-6 space-y-3"><li>Repérez l’emplacement de votre première étape sur la carte avant de partir.</li><li>{g.route}</li><li>Gardez une marge pour le retour et les pauses ; évitez d’ajouter une étape si la météo ou les accès se dégradent.</li></ol></section>
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Conseils pratiques</h2><p>{g.advice}</p><p className="mt-4">Pour les horaires, tarifs et règles locales qui peuvent évoluer, consultez les affichages à l’entrée et les informations de la commune ou du site concerné.</p></section>
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Questions fréquentes</h2><h3 className="font-semibold mt-3">Faut-il réserver ?</h3><p>Le belvédère extérieur se visite comme un point de vue ; les musées, monuments ou visites intérieures cités dans cet itinéraire peuvent avoir leurs propres modalités.</p><h3 className="font-semibold mt-3">Comment choisir la meilleure heure ?</h3><p>Privilégiez la visibilité et la sécurité. Pour les photos, une lumière latérale est souvent plus lisible qu’un soleil haut, mais les conditions changent selon la saison.</p><h3 className="font-semibold mt-3">Peut-on faire cette visite à pied ?</h3><p>Le centre comporte des pentes et des pavés. Vérifiez séparément les traversées et distances vers les lieux hors du village.</p><h3 className="font-semibold mt-3">Où vérifier les informations actualisées ?</h3><p>Commencez par la commune et l’office de tourisme ; consultez la carte de l’emplacement précis avant le déplacement.</p></section>
    </div><aside className="space-y-6"><div className="card"><h2 className="text-xl font-semibold mb-3">Se repérer</h2><p className="text-sm mb-4">Gordes · Vaucluse · Provence-Alpes-Côte d’Azur · France</p><a className="btn-primary inline-block" target="_blank" rel="noopener noreferrer" href={map}>Voir ce lieu sur Google Maps</a><p className="text-xs mt-3">La recherche Google Maps contient le nom complet du lieu et sa commune.</p></div><div className="card"><h2 className="text-xl font-semibold mb-3">Sources utiles</h2><ul className="space-y-3 text-sm"><li><a className="underline" href="https://www.parcduluberon.fr/en/geosite-en/gordes-en/">Parc naturel régional du Luberon — panorama et géologie</a></li><li><a className="underline" href="https://www.destinationluberon.com/decouvrir/circuits-thematiques/la-route-des-panoramas">Destination Luberon — route des panoramas</a></li><li><a className="underline" href="https://www.les-plus-beaux-villages-de-france.org/en/our-villages/gordes/">Les Plus Beaux Villages de France — Gordes</a></li></ul></div></aside></div>
    <section className="mt-12"><h2 className="section-title">À lire également</h2><div className="grid md:grid-cols-3 gap-4">{others.map(x=><a className="card hover:opacity-80" href={`/fr/guides/${x.slug}/`} key={x.slug}><h3 className="font-semibold mb-2">{x.title}</h3><p className="text-sm" style={{color:'var(--text-secondary)'}}>{x.intro}</p></a>)}</div></section>
  </div></article>;
}
