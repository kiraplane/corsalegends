import { FaqSection } from '@/components/corsalegends/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  knownExpiredCodes,
  watchCodes,
} from '@/data/corsalegends/codes';
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
    title: 'Corsa Legends Codes July 2026 - Active Cash Codes',
    description:
      'Corsa Legends codes checked July 14, 2026: UNDERGLOW, 4THOFJULY and 60K, plus redeem steps, expired codes and the 75K rotation conflict.',
    locale,
    pathname: '/codes',
    image: '/corsalegends/icon.png',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'What are the active Corsa Legends codes?',
      answer:
        'UNDERGLOW, 4THOFJULY and 60K were cross-checked as active on July 14, 2026. Codes can rotate quickly during ALPHA updates.',
    },
    {
      question: 'How do I redeem Corsa Legends codes?',
      answer:
        'Open the official Roblox experience, press the Settings or cogwheel button, enter the exact code in the Enter Code box, and press OK.',
    },
    {
      question: 'Is 75K still active?',
      answer:
        'The current first-party Roblox description still advertises 75K, but two newer July trackers agree on a different active three. Treat 75K as a rotation check, not a guaranteed active code.',
    },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: 'Corsa Legends Codes',
        description: codeCheckSummary.status,
        dateModified: codeCheckSummary.checkedAt,
        mainEntityOfPage: `${officialGameFacts.domain}/codes`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-[#08090B] py-6 text-[#F5F2EA]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#E43D30] text-white">Checked 2026-07-14</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Corsa Legends Codes
          </h1>
          <p className="text-[#BDBAB4] text-lg leading-8">
            {codeCheckSummary.status}
          </p>
        </header>

        <section className="rounded-lg border border-[#30343B] bg-[#121418] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#F0B24C] text-xs uppercase tracking-[0.18em]">
                Cross-checked active codes
              </p>
              <p className="mt-2 font-display text-5xl font-black">
                {activeCodes.length}
              </p>
            </div>
            <Badge
              variant="outline"
              className="border-[#E43D30] text-[#FFF1D6]"
            >
              Rewards rotate during ALPHA
            </Badge>
          </div>

          <div className="mt-6 overflow-x-auto rounded-lg border border-[#30343B]">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead className="bg-[#08090B] text-[#F0B24C] text-xs uppercase tracking-[0.14em]">
                <tr>
                  <th className="px-4 py-3">Code</th>
                  <th className="px-4 py-3">Reward</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Note</th>
                </tr>
              </thead>
              <tbody>
                {activeCodes.map((item) => (
                  <tr
                    key={item.code}
                    className="border-[#30343B] border-t text-[#D3D0C9] text-sm"
                  >
                    <td className="px-4 py-4">
                      <code className="rounded bg-[#E43D30] px-2 py-1 font-bold text-white">
                        {item.code}
                      </code>
                    </td>
                    <td className="px-4 py-4 font-semibold text-[#F5F2EA]">
                      {item.reward}
                    </td>
                    <td className="px-4 py-4">{item.status}</td>
                    <td className="px-4 py-4 text-[#BDBAB4]">{item.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E43D30] text-white hover:bg-[#FF5A4D]"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Corsa Legends
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/make-money-fast">
                Money Guide
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#F0B24C]/50 bg-[#1B1710] p-6">
          <p className="font-semibold text-[#F0B24C] text-xs uppercase tracking-[0.18em]">
            First-party description watch
          </p>
          {watchCodes.map((item) => (
            <div key={item.code} className="mt-3">
              <div className="flex flex-wrap items-center gap-3">
                <code className="rounded bg-[#F0B24C] px-2 py-1 font-bold text-[#08090B]">
                  {item.code}
                </code>
                <span className="font-semibold text-[#FFF1D6]">
                  {item.status}
                </span>
              </div>
              <p className="mt-3 max-w-4xl text-[#D3D0C9] text-sm leading-7">
                {item.note}
              </p>
            </div>
          ))}
        </section>

        <article className="rounded-lg border border-[#30343B] bg-[#121418] p-6 md:p-8">
          <div className="space-y-8">
            <section>
              <h2 className="font-display text-2xl font-bold">
                How to redeem codes
              </h2>
              <ol className="mt-4 space-y-3 text-[#BDBAB4] leading-8">
                <li>
                  1. Open the verified Corsa Legends experience by Cogito.
                </li>
                <li>2. Press the Settings or cogwheel button.</li>
                <li>3. Find the Enter Code box.</li>
                <li>4. Enter the code exactly as written and press OK.</li>
              </ol>
              <p className="mt-4 text-[#BDBAB4] leading-8">
                If a code fails, check capitalization, confirm that the server
                is current, and try a fresh server once. A failed current code
                may have rotated; do not enter Roblox credentials on another
                site to “activate” it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">
                Recently expired or inactive codes
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {knownExpiredCodes.map((code) => (
                  <code
                    key={code}
                    className="rounded-md border border-[#30343B] bg-[#08090B] px-3 py-2 text-[#BDBAB4] text-sm"
                  >
                    {code}
                  </code>
                ))}
              </div>
              <p className="mt-4 text-[#BDBAB4] leading-8">
                Expired lists are retained only to explain why copied codes
                fail. They should not be retried repeatedly or imported from
                another Roblox driving game.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold">
                What was checked
              </h2>
              <ul className="mt-4 space-y-3">
                {codeCheckSummary.sourcesChecked.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F0B24C] underline underline-offset-4"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[#BDBAB4] leading-8">
                Community code trackers are useful freshness signals, not
                official patch notes. This page separates their current
                consensus from the older 75K message still visible in the
                first-party description.
              </p>
            </section>
          </div>
        </article>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
