import { TopicPage } from '@/components/corsalegends/topic-page';
import { getTopicPage } from '@/data/corsalegends/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const officialLinks = getTopicPage('officialLinks');
const topic = {
  ...officialLinks,
  route: '/discord',
  label: 'Discord',
  title: 'Corsa Legends Discord and Community Guide',
  seoTitle: 'Corsa Legends Discord - Community Link and Safety Checks',
  seoDescription:
    'Find the current Corsa Legends Discord route, verify the Roblox experience and Cogito group first, and avoid fake code, account, or giveaway links.',
  summary:
    'Use Discord for update chatter, tuning discussion, race help, and community checks, while keeping the verified Roblox experience and Cogito group as the identity source of truth.',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    locale,
    pathname: topic.route,
    image: topic.image,
  });
}

export default function DiscordPage() {
  return <TopicPage topic={topic} />;
}
