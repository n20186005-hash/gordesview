import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

const path = 'https://www.gordesview.com/fr/rejoindre-point-de-vue-gordes/';
export const metadata: Metadata = {
  title: 'Rejoindre le point de vue de Gordes : route, marche et sécurité',
  description: 'Repérez le belvédère de Gordes sur la D15 et préparez un arrêt ou une marche depuis le village en tenant compte de la route et du stationnement.',
  alternates: { canonical: path, languages: { fr: path, 'x-default': path } },
};
export function generateStaticParams() { return [{ locale: 'fr' }]; }
export default async function AccessGuide({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (locale !== 'fr') notFound();
  setRequestLocale(locale);
  return <article className="pt-24 pb-20"><div className="max-w-4xl mx-auto px-4 space-y-8">
    <p className="section-label">Préparer sa visite</p>
    <h1 className="text-3xl md:text-5xl font-bold">Rejoindre le point de vue de Gordes</h1>
    <p>Le Town View Point Gordes est un belvédère au bord de la D15, route de Cavaillon, d’où l’on voit le village perché. Il se distingue du centre du village : choisissez d’abord si vous souhaitez un court arrêt photo ou une visite à pied plus longue.</p>
    <section><h2 className="text-2xl font-semibold mb-4">En voiture : repérer le bon arrêt</h2><p>Le Parc naturel régional du Luberon situe le panorama le long de la D15, près d’un petit parking gratuit. L’office de tourisme désigne le parking du rocher Bel Air sur la droite en montant depuis Coustellet. Les places sont limitées : si elles sont occupées, continuez jusqu’à un stationnement autorisé et ne vous arrêtez pas sur la chaussée. La signalisation sur place fait foi.</p></section>
    <section><h2 className="text-2xl font-semibold mb-4">Depuis le village : prévoir le chemin et la traversée</h2><p>Une fiche de randonnée du parc décrit une boucle de 10,3 km dont le début passe par le chemin de Bel-Air et le parking avant de rejoindre le belvédère. Ce tronçon ne constitue qu’une partie de la boucle complète. Consultez sa carte pour préparer votre trajet : elle demande explicitement de la prudence lors de la traversée de la route de Cavaillon. Le trafic, la visibilité et l’état du parcours varient ; ne considérez pas cette description comme une garantie d’accès ou d’accessibilité.</p></section>
    <section><h2 className="text-2xl font-semibold mb-4">Choisir entre panorama et visite du village</h2><p>Pour une photo, gardez les enfants près de vous et restez hors de la chaussée. Pour visiter les ruelles, choisissez un parking du village et vérifiez les règles auprès de la commune. Les rues du village sont en pente et pavées ; prévoyez des chaussures adaptées et une marge pour le retour.</p></section>
    <section><h2 className="text-2xl font-semibold mb-4">Avant de partir</h2><ul className="list-disc pl-6 space-y-2"><li>Vérifiez météo, conditions locales et signalisation du jour.</li><li>Enregistrez le point de vue et votre lieu de stationnement séparément.</li><li>La lumière dépend de la saison et de la météo : laissez-vous le choix entre plusieurs moments de la journée.</li></ul></section>
    <section><h2 className="text-2xl font-semibold mb-4">Sources consultées le 2 novembre 2026</h2><ul className="list-disc pl-6 space-y-2"><li><a href="https://www.parcduluberon.fr/en/geosite-en/gordes-en/">Parc naturel régional du Luberon : panorama de Gordes</a></li><li><a href="https://www.destinationluberon.com/decouvrir/circuits-thematiques/la-route-des-panoramas">Destination Luberon : route des panoramas</a></li><li><a href="https://www.destinationluberon.com/fichier/download-2323.pdf">Fiche de randonnée : sentier du Maquis de Gordes (PDF)</a></li><li><a href="https://www.gordes-village.com/stationnement%2Cstationner-a-gordes%2C1028.html">Commune de Gordes : stationnement</a></li></ul></section>
    <nav className="flex flex-wrap gap-4"><a className="btn-primary" href="/fr/parking-point-de-vue-gordes/">Guide du parking</a><a className="btn-outline" href="/fr/">Retour au guide principal</a><a className="btn-outline" href="https://maps.app.goo.gl/wnuddYxyYNwaXRPd6">Voir le point de vue sur Google Maps</a></nav>
  </div></article>;
}
