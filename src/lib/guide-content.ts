import type { ParkingGuideLocale } from '@/lib/site-data';
import { ADDRESS, GOOGLE_MAPS_LINK, PARKING_GUIDE_PATHS, PLUS_CODE } from '@/lib/site-data';

export type AppLocale = 'fr' | 'en' | 'de' | 'zh-Hant';

type HomeIntentContent = {
  label: string;
  title: string;
  intro: string;
  photoQuestion: string;
  photoAnswer: string;
  photoPoints: string[];
  parkingTitle: string;
  parkingText: string;
  parkingCta: string;
};

type ParkingGuideContent = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  intro: string;
  quickFacts: Array<{ label: string; value: string }>;
  sections: Array<{
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  mapCta: string;
  homeCta: string;
  homeLabel: string;
};

export const homeIntentContent: Record<AppLocale, HomeIntentContent> = {
  en: {
    label: 'Photo & Parking',
    title: 'Where is the famous Gordes photo taken?',
    intro: 'The classic postcard photo of Gordes is taken from Town View Point Gordes on the roadside belvedere along Route de Cavaillon. It offers a wide view of the village near a small roadside parking area.',
    photoQuestion: 'Where is the famous Gordes photo taken?',
    photoAnswer: 'It is taken from the signed roadside lookout known as Town View Point Gordes. From here you get the full frontal panorama of the village, with the stone houses stacked above the valley exactly like the best-known Gordes photos online.',
    photoPoints: [
      'Light changes with the season and weather; choose your time accordingly.',
      'Sunset can be beautiful too, especially for warmer tones and panoramic sky colors.',
      'Stay inside the parking and belvedere area when taking photos because the roadside can be busy.'
    ],
    parkingTitle: 'Need parking first?',
    parkingText: 'Our parking guide explains the viewpoint parking area and how it differs from village parking.',
    parkingCta: 'Read the Gordes Viewpoint Parking Guide'
  },
  fr: {
    label: 'Photo et parking',
    title: 'Où prendre la célèbre photo de Gordes ?',
    intro: 'La photo carte postale la plus connue de Gordes se prend depuis le Town View Point Gordes, le belvédère routier situé sur la route de Cavaillon. Ce belvédère offre une vue panoramique près d’un petit parking routier.',
    photoQuestion: 'Où prendre la célèbre photo de Gordes ?',
    photoAnswer: 'La photo emblématique se prend depuis le belvédère signalé comme Town View Point Gordes. Depuis ce point de vue sur Gordes, on voit toute la façade du village perché avec les maisons en pierre dorée empilées au-dessus de la vallée.',
    photoPoints: [
      'La lumière varie selon la saison et la météo.',
      'Le coucher du soleil fonctionne aussi très bien pour des tons plus chauds et une vue panoramique plus dramatique.',
      'Restez dans la zone de stationnement et sur le belvédère pour prendre vos photos, car la route peut être passante.'
    ],
    parkingTitle: 'Vous cherchez où vous garer ?',
    parkingText: 'Notre guide présente le parking du point de vue et les différences avec le stationnement dans le village.',
    parkingCta: 'Lire le guide parking du point de vue Gordes'
  },
  de: {
    label: 'Foto und Parken',
    title: 'Wo entsteht das bekannte Foto von Gordes?',
    intro: 'Das bekannte Postkartenfoto von Gordes entsteht am Town View Point Gordes, dem Aussichtspunkt an der Route de Cavaillon. Der Aussichtspunkt liegt nahe einem kleinen Parkplatz und bietet einen Panoramablick.',
    photoQuestion: 'Wo entsteht das bekannte Foto von Gordes?',
    photoAnswer: 'Es wird am ausgeschilderten Aussichtspunkt Town View Point Gordes aufgenommen. Von hier sieht man das Dorf frontal und vollständig, genau aus der Perspektive, die auf den meisten bekannten Gordes-Fotos zu sehen ist.',
    photoPoints: [
      'Das Licht variiert mit Jahreszeit und Wetter.',
      'Auch zum Sonnenuntergang lohnt sich der Stopp, besonders fuer warme Farben und einen weiten Himmel.',
      'Bitte fuer Fotos im Parkplatz- und Aussichtspunktbereich bleiben, weil die Strasse stark befahren sein kann.'
    ],
    parkingTitle: 'Erst parken?',
    parkingText: 'Unser Parkplatz-Guide erklärt den Parkplatz am Aussichtspunkt und den Unterschied zu den Dorfparkplätzen.',
    parkingCta: 'Zum Parkplatz-Guide fuer Gordes'
  },
  'zh-Hant': {
    label: '拍照與停車',
    title: 'Gordes 最有名的照片在哪裡拍？',
    intro: '大家最熟悉的 Gordes 明信片視角，就是在 Town View Point Gordes 這個路邊觀景台拍到的。這裡靠近小型停車區，可以欣賞村莊全景。',
    photoQuestion: 'Gordes 最有名的照片在哪裡拍？',
    photoAnswer: '經典照片通常就是在標示為 Town View Point Gordes 的路邊觀景點拍攝。站在這裡可以正面看到整個山城輪廓，和網路上最常見的 Gordes 全景照片角度幾乎一致。',
    photoPoints: [
      '光線會隨季節和天氣變化。',
      '日落時段也很適合，色調更暖，天空層次更豐富。',
      '拍照時請留在停車區與觀景台範圍內，路邊車流有時會比較多。'
    ],
    parkingTitle: '想先確認停車？',
    parkingText: '英文、法文與德文停車指南介紹觀景台停車區及村內停車場的差異。',
    parkingCta: '查看觀景台停車資訊'
  }
};

export const parkingGuideContent: Record<ParkingGuideLocale, ParkingGuideContent> = {
  en: {
    metadataTitle: 'Gordes Viewpoint Parking: Where to Park for the Famous Gordes View',
    metadataDescription: 'Find where to park for Town View Point Gordes, the roadside lot, a short walk and the difference between viewpoint parking and Gordes village parking.',
    eyebrow: 'Parking Guide',
    title: 'Gordes Viewpoint Parking: Where to Park for the Famous Gordes View',
    intro: 'If you want the iconic panoramic view of Gordes without circling the village first, park at the small roadside lot next to Town View Point Gordes. It provides a short walk to the viewpoint when a space is available.',
    quickFacts: [
      { label: 'Parking spot', value: 'Small roadside parking beside the viewpoint' },
      { label: 'Address', value: ADDRESS },
      { label: 'Plus Code', value: PLUS_CODE },
      { label: 'Maps', value: GOOGLE_MAPS_LINK }
    ],
    sections: [
      {
        title: 'Where to park for Town View Point Gordes',
        paragraphs: [
          'The main parking area for the viewpoint is directly beside the belvedere on the road into Gordes from Cavaillon. You do not need to park inside the village if your main goal is to see the famous panorama first.',
          'Because the lot is right next to the viewpoint, the walk is minimal. That makes it a practical stop for families, photographers and travelers doing a Luberon road trip with several villages in one day.'
        ]
      },
      {
        title: 'Is the parking free?',
        paragraphs: [
          'The Luberon regional park describes a small free parking area beside the D15. Conditions may change; check local signs when you arrive.',
          'If the viewpoint lot is full, continue carefully toward Gordes village and compare with the official village parking areas rather than stopping unsafely on the roadside.'
        ]
      },
      {
        title: 'Best time to find a space',
        paragraphs: [
          'The small parking area can be occupied when you arrive. Allow time for an alternative and follow local signs.',
          'Light varies with the season and weather.'
        ],
        bullets: [
          'Allow extra time if the small parking area is full',
          'Check local signs before parking',
          'Use village parking if needed'
        ]
      },
      {
        title: 'Viewpoint parking vs Gordes village parking',
        paragraphs: [
          'The viewpoint lot is for the panorama and quick photo stop. Gordes village parking is better if you plan to walk the streets, visit shops, or stay for lunch.',
          'Many visitors use both: first the viewpoint for photos, then the village parking for a longer visit. That sequence keeps the iconic photo stop simple and efficient.'
        ]
      },
      {
        title: 'Safety and photography tips',
        paragraphs: [
          'Only park in marked or obviously permitted areas. The road can be active and visibility matters.',
          'For the best photos, stay near the belvedere and avoid stepping into the roadway. Light varies with the season and weather.'
        ]
      }
    ],
    mapCta: 'Open the location in Google Maps',
    homeCta: 'Back to the Gordes viewpoint guide',
    homeLabel: 'Home guide'
  },
  fr: {
    metadataTitle: 'Parking point de vue Gordes : où se garer pour la vue la plus célèbre',
    metadataDescription: 'Guide pratique du parking du point de vue sur Gordes : où se garer, la courte marche et différence entre le parking du belvédère et le parking du village.',
    eyebrow: 'Guide parking',
    title: 'Parking point de vue Gordes : où se garer pour la vue la plus célèbre',
    intro: 'Si vous voulez voir immédiatement la célèbre vue panoramique sur Gordes, le plus simple est de vous garer sur le petit parking routier juste à côté du Town View Point Gordes. Il permet de rejoindre le belvédère après une courte marche, si une place est disponible.',
    quickFacts: [
      { label: 'Parking', value: 'Petit parking au bord de la route, juste à côté du belvédère' },
      { label: 'Adresse', value: ADDRESS },
      { label: 'Plus Code', value: PLUS_CODE },
      { label: 'Google Maps', value: GOOGLE_MAPS_LINK }
    ],
    sections: [
      {
        title: 'Où se garer pour le point de vue sur Gordes',
        paragraphs: [
          'Le parking principal se trouve directement à côté du belvédère, sur la route venant de Cavaillon. Si votre objectif principal est de voir le panorama le plus connu de Gordes, vous n’avez pas besoin d’entrer d’abord dans le village.',
          'Comme le parking est juste à côté du point de vue, il y a très peu de marche. C’est pratique pour les familles, les photographes et les visiteurs qui font un road trip dans le Luberon.'
        ]
      },
      {
        title: 'Le parking est-il gratuit ?',
        paragraphs: [
          'Le Parc naturel régional du Luberon décrit un petit parking gratuit près de la D15. Les conditions peuvent évoluer : vérifiez la signalisation sur place.',
          'Si le parking est complet, avancez prudemment vers Gordes et utilisez les parkings officiels du village plutôt que de vous arrêter dans une zone dangereuse.'
        ]
      },
      {
        title: 'Quand est-il le plus facile de se garer ?',
        paragraphs: [
          'Le petit parking peut être occupé à votre arrivée. Prévoyez une solution de repli et respectez la signalisation.',
          'La lumière varie selon la saison et la météo.'
        ],
        bullets: [
          'Prévoyez du temps si le petit parking est complet',
          'Vérifiez la signalisation avant de stationner',
          'Utilisez un parking du village si nécessaire'
        ]
      },
      {
        title: 'Parking du belvédère ou parking du village ?',
        paragraphs: [
          'Le parking du belvédère sert surtout à voir la vue panoramique et faire la photo emblématique. Le parking du village est plus adapté si vous comptez visiter les ruelles, les boutiques ou déjeuner à Gordes.',
          'Beaucoup de visiteurs utilisent les deux : d’abord le point de vue pour la photo, puis le parking du village pour une visite plus longue.'
        ]
      },
      {
        title: 'Conseils de sécurité et de photo',
        paragraphs: [
          'Garez-vous uniquement dans les zones autorisées ou clairement utilisées comme stationnement. La circulation peut être active sur cette route.',
          'Pour les meilleures photos, restez près du belvédère et évitez de marcher sur la chaussée. La lumière varie selon la saison et la météo.'
        ]
      }
    ],
    mapCta: 'Ouvrir l’emplacement dans Google Maps',
    homeCta: 'Retour au guide du point de vue de Gordes',
    homeLabel: 'Guide principal'
  },
  de: {
    metadataTitle: 'Parken Gordes Aussichtspunkt: Wo man fuer den bekannten Blick parkt',
    metadataDescription: 'Praktischer Guide zum Parken am Gordes Aussichtspunkt: Standort, kurzer Fussweg und Unterschied zwischen Aussichtspunkt-Parkplatz und Dorfparkplaetzen.',
    eyebrow: 'Parkplatz-Guide',
    title: 'Parken Gordes Aussichtspunkt: Wo man fuer den bekannten Blick parkt',
    intro: 'Wenn Sie die bekannte Panoramaaussicht auf Gordes moeglichst direkt sehen moechten, ist der kleine Parkplatz neben dem Town View Point Gordes ein möglicher Startpunkt. Er eignet sich fuer den klassischen Fotostopp, fuer einen kurzen Besuch und fuer Anreisen am fruehen Morgen.',
    quickFacts: [
      { label: 'Parkplatz', value: 'Kleiner Parkplatz direkt neben dem Aussichtspunkt' },
      { label: 'Adresse', value: '13 Rte de Cavaillon, 84220 Gordes, Frankreich' },
      { label: 'Plus Code', value: PLUS_CODE },
      { label: 'Google Maps', value: GOOGLE_MAPS_LINK }
    ],
    sections: [
      {
        title: 'Wo parkt man fuer den Aussichtspunkt?',
        paragraphs: [
          'Der wichtigste Parkplatz liegt direkt neben dem Belvedere an der Strasse von Cavaillon nach Gordes. Wenn Ihr Hauptziel zuerst der beruehmte Panoramablick ist, muessen Sie nicht zunaechst ins Dorf fahren.',
          'Da der Parkplatz unmittelbar am Aussichtspunkt liegt, ist kaum ein Fussweg noetig. Das ist besonders praktisch fuer Familien, Fotografen und Reisende mit mehreren Stopps im Luberon.'
        ]
      },
      {
        title: 'Ist das Parken kostenlos?',
        paragraphs: [
          'Der regionale Naturpark Luberon beschreibt einen kleinen kostenlosen Parkplatz an der D15. Regeln können sich ändern; beachten Sie die Beschilderung vor Ort.',
          'Wenn der kleine Parkplatz voll ist, besser weiter Richtung Gordes fahren und die offiziellen Dorfparkplaetze nutzen, statt unsicher am Strassenrand zu halten.'
        ]
      },
      {
        title: 'Wann findet man am ehesten einen Platz?',
        paragraphs: [
          'Der kleine Parkplatz kann bei Ihrer Ankunft belegt sein. Planen Sie eine Alternative ein und beachten Sie die Beschilderung.',
          'Das Licht hängt von Jahreszeit und Wetter ab.'
        ],
        bullets: [
          'Zeit einplanen, falls der kleine Parkplatz voll ist',
          'Beschilderung vor dem Parken beachten',
          'Bei Bedarf einen Dorfparkplatz nutzen'
        ]
      },
      {
        title: 'Aussichtspunkt-Parkplatz oder Dorfparkplatz?',
        paragraphs: [
          'Der Parkplatz am Aussichtspunkt ist ideal fuer Panorama und schnellen Fotostopp. Die Dorfparkplaetze sind besser, wenn Sie durch die Gassen laufen, einkaufen oder laenger bleiben wollen.',
          'Viele Besucher kombinieren beides: zuerst das Foto am Aussichtspunkt, danach Parken im Dorf fuer einen laengeren Aufenthalt.'
        ]
      },
      {
        title: 'Sicherheit und Fototipps',
        paragraphs: [
          'Bitte nur in markierten oder klar erlaubten Bereichen parken. Die Strasse kann viel Verkehr haben.',
          'Fuer die besten Bilder in der Naehe des Belvedere bleiben und nicht auf die Fahrbahn treten. Das Licht hängt von Jahreszeit und Wetter ab.'
        ]
      }
    ],
    mapCta: 'Standort in Google Maps oeffnen',
    homeCta: 'Zurueck zum Gordes Aussichtspunkt Guide',
    homeLabel: 'Hauptguide'
  }
};

export function getParkingGuidePath(locale: AppLocale) {
  if (locale === 'zh-Hant') {
    return PARKING_GUIDE_PATHS.en;
  }

  return PARKING_GUIDE_PATHS[locale as ParkingGuideLocale];
}
