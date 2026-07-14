import Container from '@/components/layout/container';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Privacy Policy | Corsa Legends Wiki',
    description:
      'Privacy policy for the independent Corsa Legends Wiki and Roblox guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#08090B] py-12 text-[#F5F2EA]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#BDBAB4]">
          Corsa Legends Wiki is an independent Roblox guide site. We do not
          require accounts for browsing codes, car notes, tuning guides, race
          help, update status, official links, or safety pages.
        </p>
        <p className="leading-8 text-[#BDBAB4]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#BDBAB4]">
          Local image assets are used for faster page loading. We do not sell
          asset files or provide downloads as standalone packs.
        </p>
        <p className="leading-8 text-[#BDBAB4]">
          Privacy questions can be sent to hello@corsalegends.wiki.
        </p>
      </Container>
    </div>
  );
}
