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
    title: 'Terms of Service | Corsa Legends Wiki',
    description:
      'Terms for using the independent Corsa Legends Wiki and Roblox guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#08090B] py-12 text-[#F5F2EA]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#BDBAB4]">
          This site provides independent Corsa Legends guides, data notes and
          strategy content. It is not affiliated with, endorsed by, sponsored
          by, or operated by Roblox or Cogito.
        </p>
        <p className="leading-8 text-[#BDBAB4]">
          Game data can change quickly. Codes, cars, prices, tuning, races,
          maps, update markers and guide advice should be treated as guidance,
          not official instructions.
        </p>
        <p className="leading-8 text-[#BDBAB4]">
          Do not use this site to distribute cheats, automation scripts, copied
          clients, account services, or other content that violates game or
          platform terms.
        </p>
        <p className="leading-8 text-[#BDBAB4]">
          Questions about these terms can be sent to hello@corsalegends.wiki.
        </p>
      </Container>
    </div>
  );
}
