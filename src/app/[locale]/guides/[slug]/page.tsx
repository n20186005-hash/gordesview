import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { guides } from '@/lib/fr-guides';
import { details } from '@/lib/fr-guide-details';
import { SITE_URL } from '@/lib/site-data';

// Selected by visually reviewing the existing gallery; all original files remain untouched.
// A photograph illustrates the named subject, not necessarily every stop in a multi-stop itinerary.
const photos: Record<string, [number,string]> = {
 'photo-gordes-bel-air':[33,'Panorama du village perché de Gordes'], 'lever-soleil-gordes':[23,'Soleil bas sur un paysage provençal'],
 'coucher-soleil-gordes':[23,'Lumière du soir sur les reliefs provençaux'], 'visiter-gordes-en-une-heure':[21,'Rues et maisons de Gordes sur le relief'],
 'demi-journee-gordes':[25,'Maisons de pierre de Gordes'], 'journee-gordes-senanque':[13,'Champ de lavande dans le Luberon'],
 'gordes-roussillon-itineraire':[19,'Paysage d’ocre rouge du Luberon'], 'gordes-les-bories':[2,'Cabanes en pierre sèche du Village des Bories'],
 'chateau-de-gordes-guide':[32,'Façade et tours du château de Gordes'], 'eglise-saint-firmin-gordes':[26,'Intérieur d’une église provençale'],
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
const locatedPhotos:Record<string,{file:string;alt:string;source:string}[]> = {
 'journee-gordes-senanque':[{file:'senanque-abbey.jpg',alt:'Bâtiments de l’abbaye de Sénanque dans le vallon près de Gordes',source:'https://commons.wikimedia.org/wiki/File:Abbaye-senanque-gordes-iso.jpg'}],
 'gordes-roussillon-itineraire':[{file:'roussillon-ocres.jpg',alt:'Falaises de terre ocre près de Roussillon',source:'https://commons.wikimedia.org/wiki/File:Roussillon-CheminOcres.jpg'}],
 'gordes-les-bories':[{file:'village-des-bories.jpg',alt:'Assemblage de pierres sèches au Village des Bories à Gordes',source:'https://commons.wikimedia.org/wiki/File:Village_des_Bories,_Gordes,_France_(470003301).jpg'}],
 'chateau-de-gordes-guide':[{file:'chateau-gordes.jpg',alt:'Le château de Gordes et ses volumes de pierre vus en hauteur',source:'https://commons.wikimedia.org/wiki/File:Castle_of_Gordes_by_JM_Rosier.JPG'}],
 'eglise-saint-firmin-gordes':[{file:'eglise-saint-firmin.jpg',alt:'Intérieur de l’église Saint-Firmin de Gordes',source:'https://commons.wikimedia.org/wiki/File:Gordes_-_Eglise_Saint-Firmin_11.jpg'}],
 'caves-du-palais-saint-firmin':[{file:'caves-saint-firmin.jpg',alt:'Salle souterraine voûtée des Caves du Palais Saint-Firmin à Gordes',source:'https://commons.wikimedia.org/wiki/File:Cave_Saint_Firmain_Gordes_by_JM_Rosier_1.jpg'}],
};
const mapDestinations:Record<string,string>={
 'parking-centre-gordes':'Parking Charles de Gaulle, Gordes, Vaucluse, France',
 'marche-gordes':'Place du Château, Gordes, Vaucluse, France',
 'gordes-avec-enfants':'Château de Gordes, Place du Château, Gordes, France',
 'gordes-accessibilite':'Place du Château, Gordes, France',
 'gordes-par-temps-de-pluie':'Caves du Palais Saint-Firmin, Gordes, France',
};
type Management = { title:string; body:string; source:string; sourceLabel:string };
const publicManagement:Management={
 title:'À propos des espaces publics de Gordes',
 body:'Gordes est une commune du Vaucluse dont les rues, places et parcs de stationnement publics relèvent de la municipalité pour les questions de voirie et de stationnement. Le village perché s’est développé sur un éperon de molasse calcaire : son château, son église et ses maisons de pierre composent le paysage que l’on découvre depuis le Rocher Bel-Air. Les sites visitables situés dans et autour du village conservent chacun leurs propres conditions d’accueil et leur propre responsable.',
 source:'https://www.gordes-village.com/en/stationnement%2Cstationner-a-gordes%2C1028.html',sourceLabel:'Commune de Gordes — stationnement'
};
const managementBySlug:Record<string,Management>={
 'journee-gordes-senanque':{
  title:'À propos de l’abbaye Notre-Dame de Sénanque',
  body:'L’abbaye Notre-Dame de Sénanque abrite encore une communauté de moines cisterciens qui y vit selon la règle de saint Benoît. Fondée en 1148 dans le vallon de la Sénancole, elle conserve sa vocation religieuse tout en accueillant des visiteurs dans les espaces et créneaux prévus. La communauté monastique est donc l’interlocuteur de référence pour les offices, l’accueil spirituel et les modalités de visite, tandis que la commune de Gordes gère ses propres espaces publics.',
  source:'https://www.senanque.fr/',sourceLabel:'Abbaye de Sénanque — communauté et visites'
 },
 'gordes-les-bories':{
  title:'À propos du Village des Bories',
  body:'Le Village des Bories appartient à la commune de Gordes, qui en est devenue gestionnaire dans les années 1980. Ce musée d’habitat rural conserve un ensemble de cabanes, murets et constructions en pierre sèche qui témoignent de la vie agricole des plateaux du Luberon. Le parcours permet de comprendre les techniques de construction traditionnelles et les usages des espaces ; les horaires et les règles de visite sont communiqués par le site et la commune.',
  source:'https://www.levillagedesbories.com/la-restauration.php',sourceLabel:'Village des Bories — histoire de la restauration'
 },
 'chateau-de-gordes-guide':{
  title:'À propos du château de Gordes',
  body:'Au centre du village, le château de Gordes constitue l’un des principaux repères historiques et architecturaux de la commune. La mairie de Gordes est installée place du Château et le monument figure parmi les éléments protégés de son patrimoine. La commune est le contact de référence pour les informations municipales et l’usage des espaces publics autour du château ; pour une exposition ou un accès intérieur, consultez l’organisateur de la visite annoncée.',
  source:'https://www.chateaudegordes.com/mentions-legales.php',sourceLabel:'Château de Gordes — mentions légales'
 },
 'eglise-saint-firmin-gordes':{
  title:'À propos de l’église Saint-Firmin',
  body:'L’église Saint-Firmin est propriété de la commune de Gordes, selon la notice patrimoniale du ministère de la Culture. Le monument a fait l’objet de restaurations conduites avec la commune ; l’association des Amis de l’église contribue à la sauvegarde du patrimoine, tandis que la vie liturgique relève de la paroisse. Il faut donc distinguer entretien patrimonial, activités associatives et célébrations religieuses. Le bâtiment actuel date principalement du XVIIIe siècle.',
  source:'https://pop.culture.gouv.fr/notice/merimee/PA84000091',sourceLabel:'Ministère de la Culture — église Saint-Firmin'
 },
 'caves-du-palais-saint-firmin':{
  title:'À propos des Caves du Palais Saint-Firmin',
  body:'Les Caves du Palais Saint-Firmin sont un site patrimonial privé situé sous une demeure de la Renaissance, au cœur de Gordes. La famille Morand a contribué pendant plusieurs décennies au dégagement et à la restauration de cet ensemble semi-troglodytique, où l’on découvre des traces d’activités artisanales anciennes. Les modalités de visite et l’accueil relèvent des responsables du site privé, et non du service municipal de stationnement.',
  source:'https://rendezvousauxjardins.culture.gouv.fr/w/386955/evenement/19510564/decouvrez-les-jardins-prives-du-palais-saint-firmin',sourceLabel:'Ministère de la Culture — Palais Saint-Firmin'
 },
 'gordes-roussillon-itineraire':{
  title:'À propos des communes de Gordes et de Roussillon',
  body:'Cet itinéraire relie deux communes distinctes du Luberon : Gordes, célèbre pour ses maisons de pierre claire sur un éperon, et Roussillon, caractérisé par ses paysages d’ocre. Chacune assure ses propres services et espaces publics ; le Sentier des Ocres possède ses propres règles d’accès et d’accueil. Il ne faut donc pas attribuer la gestion de Roussillon à la mairie de Gordes, même dans le cadre d’une excursion commune.',
  source:'https://www.destinationluberon.com/decouvrir/villes-et-villages/gordes',sourceLabel:'Destination Luberon — Gordes et alentours'
 }
};

const travelOrigins:Record<string,string>={
 'avignon-gordes':'Avignon, France','apt-gordes':'Apt, Vaucluse, France','cavaillon-gordes':'Cavaillon, Vaucluse, France'
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
  const destination=mapDestinations[slug]??g.mapName;
  const map=travelOrigins[slug]
    ? `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(travelOrigins[slug])}&destination=${encodeURIComponent(destination)}&travelmode=driving`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(destination)}`;
  const others=guides.filter(x=>x.slug!==g.slug).slice(Math.max(0,guides.indexOf(g)-1),Math.max(0,guides.indexOf(g)-1)+3);
  const canonical=`${SITE_URL}/fr/guides/${slug}/`;
  const photo=photos[slug];
  const additional=locatedPhotos[slug]??[];
  const d=details[slug];
  const schema={'@context':'https://schema.org','@type':'Article',headline:g.title,description:g.intro,inLanguage:'fr',mainEntityOfPage:canonical,author:{'@type':'Organization',name:'Gordes View'}};
  return <article className="pt-24 pb-20"><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><div className="max-w-5xl mx-auto px-4">
    <nav aria-label="Fil d’Ariane" className="text-sm mb-8" style={{color:'var(--text-secondary)'}}><a href="/fr/">Accueil</a> / <a href="/fr/guides/">Guides de Gordes</a> / {g.title}</nav>
    <p className="section-label">Conseils de visite · Gordes, Luberon</p><h1 className="text-4xl md:text-5xl font-semibold mb-6">{g.title}</h1>
    <p className="text-lg mb-8 max-w-3xl" style={{color:'var(--text-secondary)'}}>{g.intro}</p>
    {photo && <figure className="mb-10"><img src={`/gallery/images%20(${photo[0]}).jpg`} alt={photo[1]} width="900" height="600" loading="lazy" className="w-full rounded-xl object-cover max-h-[520px]"/><figcaption className="mt-2 text-sm" style={{color:'var(--text-muted)'}}>{photo[1]} · Photographie de la galerie existante</figcaption></figure>}
    {additional.length>0 && <div className="grid md:grid-cols-2 gap-5 mb-10">{additional.map(p=><figure key={p.file}><img src={`/guide-photos/${p.file}`} alt={p.alt} width="720" height="480" loading="lazy" className="w-full rounded-xl object-cover h-72"/><figcaption className="text-sm mt-2" style={{color:'var(--text-muted)'}}>{p.alt} · <a href={p.source} className="underline" target="_blank" rel="noopener noreferrer">Photo : Wikimedia Commons</a></figcaption></figure>)}</div>}
    <section className="card mb-10" aria-labelledby="management-title">
      <p className="section-label">Patrimoine et accueil</p>
      <h2 id="management-title" className="text-2xl md:text-3xl font-semibold mb-4">{(managementBySlug[slug]??publicManagement).title}</h2>
      <p>{(managementBySlug[slug]??publicManagement).body}</p>
      <p className="text-sm mt-4" style={{color:'var(--text-secondary)'}}>Référence : <a className="underline" target="_blank" rel="noopener noreferrer" href={(managementBySlug[slug]??publicManagement).source}>{(managementBySlug[slug]??publicManagement).sourceLabel}</a></p>
    </section>
    <div className="grid md:grid-cols-3 gap-8"><div className="md:col-span-2 space-y-8">
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Découvrir et comprendre</h2><p>{g.context}</p><p className="mt-4">{d.heritage}</p></section>
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Architecture, paysage et points d’observation</h2><p>{d.look}</p></section>
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Itinéraire conseillé</h2><ol className="list-decimal pl-6 space-y-3"><li>Identifiez votre point de départ et un lieu de stationnement ou un arrêt de transport approprié.</li><li>{g.route}</li><li>{d.look}</li><li>Revenez par un passage autorisé et gardez du temps pour les pauses.</li></ol></section>
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Accès, marche et stationnement</h2><p>{d.transport}</p></section>
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Où et comment photographier</h2><p>{d.photo}</p></section>
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Conseils de visite</h2><p>{g.advice}</p><p className="mt-4">Pour les horaires, tarifs ou restrictions changeantes, privilégiez l’affichage à l’entrée et les informations du site concerné.</p></section>
      <section className="card"><h2 className="text-2xl font-semibold mb-4">Questions fréquentes</h2>{d.faq.map(([q,a])=><div key={q} className="mt-5"><h3 className="font-semibold mb-2">{q}</h3><p>{a}</p></div>)}<div className="mt-5"><h3 className="font-semibold mb-2">Comment vérifier les conditions du jour ?</h3><p>Consultez les informations de la commune ou du gestionnaire du site visité, ainsi que la météo et la signalisation sur place.</p></div><div className="mt-5"><h3 className="font-semibold mb-2">Quelles précautions prendre ?</h3><p>{g.advice}</p></div></section>
    </div><aside className="space-y-6"><div className="card"><h2 className="text-xl font-semibold mb-3">Lieu et navigation</h2><p className="text-sm mb-2"><strong>Destination :</strong> {destination}</p><p className="text-sm mb-4">Vaucluse · Provence-Alpes-Côte d’Azur · France</p><a className="btn-primary inline-block" target="_blank" rel="noopener noreferrer" href={map}>{travelOrigins[slug]?'Afficher le trajet sur Google Maps':'Rechercher ce lieu sur Google Maps'}</a><p className="text-xs mt-3">Lien de recherche ou itinéraire propre à la destination nommée ci-dessus ; aucune fiche Place ID n’est présumée.</p></div><div className="card"><h2 className="text-xl font-semibold mb-3">Sources utiles</h2><ul className="space-y-3 text-sm">{d.source&&<li><a className="underline" href={d.source[1]}>{d.source[0]}</a></li>}<li><a className="underline" href="https://www.parcduluberon.fr/en/geosite-en/gordes-en/">Parc naturel régional du Luberon — panorama et géologie</a></li><li><a className="underline" href="https://www.destinationluberon.com/decouvrir/villes-et-villages/gordes">Destination Luberon — Gordes et ses sites</a></li><li><a className="underline" href="https://www.gordes-village.com/en/stationnement%2Cstationner-a-gordes%2C1028.html">Commune de Gordes — stationnement</a></li></ul></div></aside></div>
    <section className="mt-12"><h2 className="section-title">À lire également</h2><div className="grid md:grid-cols-3 gap-4">{others.map(x=><a className="card hover:opacity-80" href={`/fr/guides/${x.slug}/`} key={x.slug}><h3 className="font-semibold mb-2">{x.title}</h3><p className="text-sm" style={{color:'var(--text-secondary)'}}>{x.intro}</p></a>)}</div></section>
  </div></article>;
}
