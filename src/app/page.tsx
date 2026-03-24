import { redirect } from 'next/navigation';

export default function RootPage() {
  // Use Next.js redirect which handles client-side routing
  redirect('/fr');
}
