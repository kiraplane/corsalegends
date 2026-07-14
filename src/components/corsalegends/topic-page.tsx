import { FaqSection } from '@/components/corsalegends/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { relatedRouteLabels } from '@/data/corsalegends/guides';
import { officialGameFacts } from '@/data/corsalegends/sources';
import type { TopicPage as TopicPageData } from '@/data/corsalegends/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

function getRelatedRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? (route.replace(/^\/+/, '') || 'Home');
}

export function TopicPage({ topic }: { topic: TopicPageData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: topic.title,
        description: topic.summary,
        dateModified: topic.updatedAt,
        image: `${officialGameFacts.domain}${topic.image}`,
        mainEntityOfPage: `${officialGameFacts.domain}${topic.route}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Corsa Legends Wiki',
            item: officialGameFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: topic.label,
            item: `${officialGameFacts.domain}${topic.route}`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        name: `${topic.title} featured guides`,
        itemListElement: topic.featuredRoutes.map((route, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${officialGameFacts.domain}${route}`,
          name: getRelatedRouteLabel(route),
        })),
      },
    ],
  };

  return (
    <div className="bg-[#08090B] py-6 text-[#F5F2EA]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="max-w-3xl space-y-4">
            <Badge className="bg-[#E43D30] text-white">{topic.eyebrow}</Badge>
            <h1 className="font-display text-4xl font-black md:text-6xl">
              {topic.title}
            </h1>
            <p className="text-[#BDBAB4] text-lg leading-8">{topic.summary}</p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-[#30343B] bg-[#121418]">
            <Image
              src={topic.image}
              alt={`${topic.title} artwork`}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-cover"
            />
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {topic.featuredRoutes.map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="group min-w-0 rounded-lg border border-[#30343B] bg-[#121418] p-5 transition hover:border-[#E43D30]"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="min-w-0 break-words font-display text-[#FFE0A6] text-xl font-bold">
                  {getRelatedRouteLabel(route)}
                </h2>
                <ArrowRight className="size-4 shrink-0 text-[#E43D30] transition group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 text-[#BDBAB4] text-sm leading-6">
                Continue here when this is the next question in your current
                player path.
              </p>
            </LocaleLink>
          ))}
        </section>

        <article className="rounded-lg border border-[#30343B] bg-[#121418] p-6 md:p-8">
          <div className="space-y-8">
            {topic.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-[#BDBAB4] text-base leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-[#BDBAB4] text-sm leading-7">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#E43D30] text-white hover:bg-[#FF5A4D]"
            >
              <LocaleLink href="/guides">All Guides</LocaleLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#E43D30] bg-[#08090B] text-[#FFF1D6] hover:bg-[#E43D30] hover:text-white"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Roblox
                <ExternalLink className="size-4" />
              </a>
            </Button>
          </div>
        </article>

        <FaqSection items={topic.faq} />
      </Container>
    </div>
  );
}
