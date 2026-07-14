import { CorsaLegendsHomePage } from '@/components/corsalegends/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Corsa Legends Wiki - Codes, Cars and Tuning Guides',
    description:
      'Corsa Legends codes, car choices, tuning, money routes, races, maps and current Roblox update guides for Cogito’s vehicle sim.',
    locale,
    pathname: '',
    image: '/corsalegends/media/official-4.png',
  });
}

export default function HomePage() {
  return <CorsaLegendsHomePage />;
}
