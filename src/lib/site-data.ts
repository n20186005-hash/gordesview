export const SITE_URL = 'https://www.gordesview.com';
export const PLACE_NAME = 'Town View Point Gordes';
export const PLACE_ALT_NAME = 'Point de vue sur la ville de Gordes';
export const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/wnuddYxyYNwaXRPd6';
export const ADDRESS = '13 Rte de Cavaillon, 84220 Gordes, France';
export const PLUS_CODE = 'W55X+64 Gordes, France';
export const GOOGLE_RATING_VALUE = 4.7;
export const GOOGLE_REVIEW_COUNT = 3510;

export const PARKING_GUIDE_PATHS = {
  en: '/en/gordes-viewpoint-parking',
  fr: '/fr/parking-point-de-vue-gordes',
  de: '/de/parken-gordes-aussichtspunkt',
} as const;

export type ParkingGuideLocale = keyof typeof PARKING_GUIDE_PATHS;
