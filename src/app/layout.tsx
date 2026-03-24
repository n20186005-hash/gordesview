import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Town View Point Gordes',
  description: 'Guide du Visiteur — Town View Point Gordes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
