import { FaqSection } from '@/components/corsalegends/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/corsalegends/guides';
import { officialGameFacts } from '@/data/corsalegends/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Corsa Legends Guides - Cars, Cash and Tuning Help',
    description:
      'Read Corsa Legends guides for beginners, money, best cars, full tuning, Supra setups, engine swaps and safe Roblox progression.',
    locale,
    pathname: '/guides',
    image: '/corsalegends/media/official-2.png',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Corsa Legends Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#08090B] py-6 text-[#F5F2EA]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#E43D30] text-white">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Corsa Legends Guides
          </h1>
          <p className="text-[#BDBAB4] text-lg leading-8">
            Practical Roblox guides for building Cash, choosing a useful car,
            tuning engines and gearing, testing a Supra setup, and avoiding
            unsafe shortcuts or outdated rankings.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#30343B] bg-[#121418] p-5"
            >
              <h2 className="font-display text-[#FFE0A6] text-xl font-bold">
                {category}
              </h2>
              <p className="mt-2 text-[#BDBAB4] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#30343B] bg-[#121418]"
            >
              <div className="relative aspect-video border-[#30343B] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090B]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#F0B24C] text-[#08090B]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#30343B] text-[#BDBAB4]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#30343B] text-[#BDBAB4]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#BDBAB4] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 h-auto whitespace-normal bg-[#E43D30] text-left text-white hover:bg-[#FF5A4D]"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question: 'Which guide should I read first?',
              answer:
                'Start with the beginner guide, then use the money route and full tuning guide around one repeatable car and activity.',
            },
            {
              question: 'Why is there no permanent car tier list?',
              answer:
                'The game is in ALPHA, current broad ranking media is outdated, and isolated build clips are not a comparable full-roster test.',
            },
            {
              question: 'Do these guides provide money glitches or scripts?',
              answer:
                'No. The site uses legitimate codes, group bonuses, jobs, races and tuning decisions without executors or modified clients.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
