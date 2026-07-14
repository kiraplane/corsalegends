import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/corsalegends/sources';
import { LocaleLink } from '@/i18n/navigation';
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
    title: 'Corsa Legends Wiki Disclaimer',
    description:
      'Independent-site disclaimer for Corsa Legends, Cogito, Roblox, changing ALPHA game details, community sources and account-safety boundaries.',
    locale,
    pathname: '/disclaimer',
    image: '/corsalegends/icon.png',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#08090B] py-6 text-[#F5F2EA]">
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#E43D30] text-white">Disclaimer</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Corsa Legends Wiki Disclaimer
          </h1>
          <p className="text-[#BDBAB4] text-lg leading-8">
            This is an independent guide site. It is not created, endorsed,
            sponsored, or operated by Roblox or the Cogito group.
          </p>
        </header>

        <section className="rounded-lg border border-[#30343B] bg-[#121418] p-6 text-[#BDBAB4] leading-8">
          <h2 className="font-display text-[#F5F2EA] text-2xl font-bold">
            Game and ownership boundary
          </h2>
          <p className="mt-3">
            Roblox lists {officialGameFacts.creatorName} as the creator of Corsa
            Legends. This wiki covers that Roblox experience without claiming
            ownership of its game, vehicles, branding, media or community.
            Assetto Corsa, FR Legends, Vehicle Legends and similarly named
            Roblox experiences are separate products.
          </p>
          <h2 className="mt-8 font-display text-[#F5F2EA] text-2xl font-bold">
            Accuracy and game changes
          </h2>
          <p className="mt-3">
            Codes, cars, prices, tune behavior, fusion prompts, races, rewards,
            locations and update details can change whenever the ALPHA
            experience is revised. First-party facts and community cross-checks
            are kept separate, and uncertain details are labelled as such.
          </p>
          <h2 className="mt-8 font-display text-[#F5F2EA] text-2xl font-bold">
            Safety boundary
          </h2>
          <p className="mt-3">
            This site does not provide scripts, executors, modified clients,
            money glitches, private account access, fake codes or instructions
            that bypass Roblox or game restrictions. Never send a password,
            cookie or recovery code to this site or to a community member.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#E43D30] text-white hover:bg-[#FF5A4D]"
          >
            <LocaleLink href="/guides/beginner-guide">Start Guide</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/official-links">Official Links</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
