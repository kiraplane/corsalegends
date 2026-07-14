import { FaqSection } from '@/components/corsalegends/faq-section';
import {
  CorsaLegendsMobileMenu,
  CorsaLegendsRouteSidebar,
} from '@/components/corsalegends/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides, siteDescription } from '@/data/corsalegends/guides';
import { officialGameFacts } from '@/data/corsalegends/sources';
import { topicPageList } from '@/data/corsalegends/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BadgeDollarSign,
  CarFront,
  CircleGauge,
  ExternalLink,
  Flag,
  MapPinned,
  RadioTower,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'Active Codes',
    body: 'Use the July 2026 cross-checked list, redeem steps and first-party 75K rotation note.',
    href: '/codes',
    icon: BadgeDollarSign,
  },
  {
    title: 'Cars',
    body: 'Choose from an 80+ car-and-trim garage by race, budget and usable performance.',
    href: '/cars',
    icon: CarFront,
  },
  {
    title: 'Full Tuning',
    body: 'Build a baseline, plan engine and boost work, then solve gearing and grip.',
    href: '/guides/full-tuning-guide',
    icon: Wrench,
  },
  {
    title: 'Make Cash',
    body: 'Compare codes, group bonuses, jobs and races without scripts or money glitches.',
    href: '/guides/make-money-fast',
    icon: BadgeDollarSign,
  },
  {
    title: 'Best Car',
    body: 'Find the fastest usable build with matched tests instead of an outdated tier list.',
    href: '/guides/best-car-and-fastest-car',
    icon: CircleGauge,
  },
  {
    title: 'Map + Races',
    body: 'Learn reliable world anchors, event demands and a repeatable test route.',
    href: '/map',
    icon: MapPinned,
  },
];

const quickLinks = [
  { label: 'Beginner', href: '/guides/beginner-guide' },
  { label: 'Codes', href: '/codes' },
  { label: 'Cars', href: '/cars' },
  { label: 'Tuning', href: '/tuning' },
  { label: 'Money', href: '/guides/make-money-fast' },
  { label: 'Supra', href: '/guides/supra-tune' },
  { label: 'Races', href: '/races' },
  { label: 'Updates', href: '/updates' },
];

const startSteps = [
  {
    title: 'Claim current codes',
    href: '/codes',
    body: 'Use Settings, enter the exact case, and keep the 75K conflict separate.',
  },
  {
    title: 'Learn four map anchors',
    href: '/map',
    body: 'Find car access, dealership, tuning and one nearby race before exploring.',
  },
  {
    title: 'Build a safe Cash loop',
    href: '/guides/make-money-fast',
    body: 'Compare reward, travel, completion time and failures—not payout alone.',
  },
  {
    title: 'Tune one measured problem',
    href: '/guides/full-tuning-guide',
    body: 'Preserve a baseline and change one system on the same route.',
  },
];

const latestUpdateItems = [
  {
    title: 'UNDERGLOW is the latest cross-checked code',
    href: '/codes',
    body: 'The current active set was checked against two July sources on 2026-07-14.',
  },
  {
    title: 'Underglow + hood removal update signal',
    href: '/updates',
    body: 'The latest first-party Roblox title keeps the experience in active ALPHA development.',
  },
  {
    title: 'No permanent best-car ranking',
    href: '/guides/best-car-and-fastest-car',
    body: 'Current broad ranking media is outdated, so this wiki publishes a repeatable test method.',
  },
];

export function CorsaLegendsHomePage() {
  const latestGuides = guides.filter((guide) => guide.video).slice(0, 3);
  const featuredVideo = guides[0]?.video;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${officialGameFacts.domain}/#website`,
      name: officialGameFacts.siteName,
      url: officialGameFacts.domain,
      description: siteDescription,
    },
    {
      '@type': 'Organization',
      name: officialGameFacts.siteName,
      url: officialGameFacts.domain,
      logo: `${officialGameFacts.domain}/corsalegends/icon.png`,
    },
    {
      '@type': 'VideoGame',
      name: officialGameFacts.name,
      gamePlatform: ['Roblox'],
      applicationCategory: 'Game',
      genre: officialGameFacts.genre,
      url: officialGameFacts.officialRobloxUrl,
      publisher: {
        '@type': 'Organization',
        name: officialGameFacts.creatorName,
      },
    },
  ];

  if (featuredVideo) {
    graph.push({
      '@type': 'VideoObject',
      name: featuredVideo.title,
      description:
        'Corsa Legends Roblox gameplay used as a current visual orientation reference.',
      thumbnailUrl: featuredVideo.thumbnailUrl,
      uploadDate: featuredVideo.publishedAt,
      embedUrl: `https://www.youtube.com/embed/${featuredVideo.id}`,
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <div className="bg-[#08090B] text-[#F5F2EA]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#30343B] border-b">
        <Image
          src="/corsalegends/media/official-4.png"
          alt="Corsa Legends performance car at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,9,11,0.99)_0%,rgba(8,9,11,0.94)_48%,rgba(8,9,11,0.58)_74%,rgba(8,9,11,0.9)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#08090B] to-transparent" />

        <Container className="relative px-4 py-8 md:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_430px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#E43D30] text-white">
                  Roblox Vehicle Sim
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#F0B24C] bg-[#08090B]/80 text-[#FFE0A6]"
                >
                  ALPHA Guide Hub
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Corsa Legends Wiki
              </h1>
              <p className="max-w-2xl text-[#D3D0C9] text-lg leading-8 md:text-xl">
                Current codes, smarter car choices, measured tuning, Cash routes
                and race-ready guides for Cogito&apos;s realistic Roblox driving
                game.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#E43D30] text-white hover:bg-[#FF5A4D]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Here
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#F0B24C] bg-[#08090B]/75 text-[#FFF1D6] hover:bg-[#F0B24C] hover:text-[#08090B]"
                >
                  <LocaleLink href="/codes">Active Codes</LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#D8D4CB] bg-[#08090B]/75 text-[#F5F2EA] hover:bg-[#F5F2EA] hover:text-[#08090B]"
                >
                  <a
                    href={officialGameFacts.officialRobloxUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Play on Roblox
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickLinks.map((item) => (
                  <LocaleLink
                    key={item.label}
                    href={item.href}
                    className="rounded-md border border-[#30343B] bg-[#08090B]/78 px-3 py-2 font-medium text-[#C5C2BC] text-sm transition hover:border-[#E43D30] hover:text-white"
                  >
                    {item.label}
                  </LocaleLink>
                ))}
              </div>
            </div>

            {featuredVideo ? (
              <div className="overflow-hidden rounded-lg border border-[#454A53] bg-black shadow-2xl">
                <iframe
                  className="aspect-video w-full"
                  src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                  title={featuredVideo.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <CorsaLegendsMobileMenu currentPath="/" />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-10">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryLinks.map((link) => (
                <LocaleLink
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-[#30343B] bg-[#121418] p-5 transition hover:border-[#E43D30]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#E43D30] text-white">
                      <link.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#FFE0A6] text-xl font-bold">
                        {link.title}
                      </h2>
                      <p className="mt-2 text-[#BDBAB4] text-sm leading-6">
                        {link.body}
                      </p>
                    </div>
                  </div>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#30343B] bg-[#121418] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#E43D30] text-xs uppercase tracking-[0.18em]">
                      Latest Updates
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Current garage pulse
                    </h2>
                  </div>
                  <RadioTower className="size-8 text-[#F0B24C]" />
                </div>
                <div className="mt-5 space-y-2">
                  {latestUpdateItems.map((item) => (
                    <LocaleLink
                      key={item.title}
                      href={item.href}
                      className="group block rounded-md border border-transparent p-3 transition hover:border-[#30343B] hover:bg-[#08090B]"
                    >
                      <h3 className="font-display font-bold text-[#FFE0A6]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[#BDBAB4] text-sm leading-6">
                        {item.body}
                      </p>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#30343B] bg-[#121418] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#F0B24C] text-xs uppercase tracking-[0.18em]">
                      Start Here
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      First-session route
                    </h2>
                  </div>
                  <ShieldCheck className="size-8 text-[#E43D30]" />
                </div>
                <div className="mt-5 space-y-2">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.title}
                      href={step.href}
                      className="group flex gap-3 rounded-lg border border-transparent p-2 transition hover:border-[#30343B] hover:bg-[#08090B]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#F0B24C] text-[#FFE0A6]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#F5F2EA]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[#BDBAB4] text-sm leading-6">
                          {step.body}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto mt-2 size-4 shrink-0 text-[#E43D30] transition group-hover:translate-x-0.5" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#E43D30] text-xs uppercase tracking-[0.18em]">
                    Wiki Hubs
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Cars, tuning, races and map
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {topicPageList.map((topic) => (
                  <LocaleLink
                    key={topic.route}
                    href={topic.route}
                    className="group rounded-lg border border-[#30343B] bg-[#121418] p-5 transition hover:border-[#F0B24C]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[#FFE0A6] text-xl font-bold">
                        {topic.label}
                      </h3>
                      <ArrowRight className="size-4 shrink-0 text-[#E43D30] transition group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-3 text-[#BDBAB4] text-sm leading-6">
                      {topic.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div>
                <p className="font-semibold text-[#E43D30] text-xs uppercase tracking-[0.18em]">
                  Selected Walkthroughs
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Current player decisions
                </h2>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-3">
                {latestGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group overflow-hidden rounded-lg border border-[#30343B] bg-[#121418] transition hover:border-[#E43D30]"
                  >
                    <div className="relative aspect-video overflow-hidden bg-black">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} video cover`}
                        fill
                        sizes="(min-width: 1024px) 280px, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5">
                      <Badge className="bg-[#E43D30] text-white">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-4 font-display text-[#FFE0A6] text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-3 text-[#BDBAB4] text-sm leading-6">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <FaqSection
              title="Corsa Legends Wiki FAQ"
              items={[
                {
                  question: 'What should a new player read first?',
                  answer:
                    'Start with the beginner guide, claim current codes, then use the money and tuning routes around one repeatable activity.',
                },
                {
                  question: 'Does Corsa Legends have more than 80 cars?',
                  answer:
                    'The official Roblox description advertises more than 80 cars and trims. The exact ALPHA roster can change after updates.',
                },
                {
                  question: 'Is this the official Corsa Legends site?',
                  answer:
                    'No. This is an independent guide hub. The verified game is the Roblox experience created by the Cogito group.',
                },
              ]}
            />
          </main>

          <CorsaLegendsRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
