'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Wiki',
      items: [
        { title: 'Cars', href: Routes.Cars, external: false },
        { title: 'Tuning', href: Routes.Tuning, external: false },
        { title: 'Races', href: Routes.Races, external: false },
        { title: 'Map', href: Routes.Map, external: false },
        { title: 'Codes', href: Routes.Codes, external: false },
        { title: 'Updates', href: Routes.Updates, external: false },
      ],
    },
    {
      title: 'Guides',
      items: [
        { title: 'All Guides', href: Routes.Guides, external: false },
        { title: 'Beginner', href: Routes.BeginnerGuide, external: false },
        { title: 'Money', href: Routes.MoneyGuide, external: false },
        { title: 'Best Car', href: Routes.BestCarGuide, external: false },
        { title: 'Full Tuning', href: Routes.FullTuningGuide, external: false },
        { title: 'Supra Tune', href: Routes.SupraTuneGuide, external: false },
      ],
    },
    {
      title: 'Site',
      items: [
        {
          title: 'Official Links',
          href: Routes.OfficialLinks,
          external: false,
        },
        {
          title: 'Privacy Policy',
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: 'Terms of Service',
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: 'Cookie Policy',
          href: Routes.CookiePolicy,
          external: false,
        },
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
      ],
    },
  ];
}
