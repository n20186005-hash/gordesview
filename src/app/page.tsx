import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.gordesview.com/fr',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RootPage() {
  // Use Next.js redirect which handles client-side routing
  redirect('/fr');
}
