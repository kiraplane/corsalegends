'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BadgeDollarSign,
  BookOpen,
  CarFront,
  CircleGauge,
  ExternalLink,
  Flag,
  MapPinned,
  RadioTower,
  Wrench,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All Guides',
          description: 'Current car, money, tuning and racing decisions.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description: 'Claim rewards, learn the map and plan a first car.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <CircleGauge className="size-4" />,
        },
        {
          title: 'Money Guide',
          description: 'Codes, group bonus, jobs and reliable race income.',
          href: Routes.MoneyGuide,
          external: false,
          icon: <BadgeDollarSign className="size-4" />,
        },
      ],
    },
    {
      title: 'Cars',
      href: Routes.Cars,
      external: false,
      icon: <CarFront className="size-4" />,
      items: [
        {
          title: 'Cars Hub',
          description: 'Garage choices, trims, budget and upgrade planning.',
          href: Routes.Cars,
          external: false,
          icon: <CarFront className="size-4" />,
        },
        {
          title: 'Best and Fastest Car',
          description:
            'Compare matched builds instead of an outdated tier list.',
          href: Routes.BestCarGuide,
          external: false,
          icon: <CircleGauge className="size-4" />,
        },
        {
          title: 'Active Codes',
          description: 'July Cash codes, rotation conflict and redeem steps.',
          href: Routes.Codes,
          external: false,
          icon: <BadgeDollarSign className="size-4" />,
        },
      ],
    },
    {
      title: 'Tuning',
      href: Routes.Tuning,
      external: false,
      icon: <Wrench className="size-4" />,
      items: [
        {
          title: 'Tuning Hub',
          description: 'Engine, gearing, tires and suspension decisions.',
          href: Routes.Tuning,
          external: false,
          icon: <Wrench className="size-4" />,
        },
        {
          title: 'Full Tuning Guide',
          description: 'Baseline, powertrain, gearing and grip test loop.',
          href: Routes.FullTuningGuide,
          external: false,
          icon: <CircleGauge className="size-4" />,
        },
        {
          title: 'Supra Tune',
          description: 'Adapt a drag reference to your parts and update.',
          href: Routes.SupraTuneGuide,
          external: false,
          icon: <CarFront className="size-4" />,
        },
        {
          title: 'Engines and Fusions',
          description: 'Choose power by use case and protect the build budget.',
          href: Routes.EngineFusionGuide,
          external: false,
          icon: <Wrench className="size-4" />,
        },
      ],
    },
    {
      title: 'Explore',
      href: Routes.Races,
      external: false,
      icon: <Flag className="size-4" />,
      items: [
        {
          title: 'Races',
          description: 'Read event demands and measure clean repeatable runs.',
          href: Routes.Races,
          external: false,
          icon: <Flag className="size-4" />,
        },
        {
          title: 'Map and Locations',
          description: 'Cities, highways, garages and reliable route anchors.',
          href: Routes.Map,
          external: false,
          icon: <MapPinned className="size-4" />,
        },
        {
          title: 'Current Update',
          description: 'ALPHA status, update title and post-patch checklist.',
          href: Routes.Updates,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'Official Links',
          description: 'Verified Roblox identity and community-link checks.',
          href: Routes.OfficialLinks,
          external: false,
          icon: <ExternalLink className="size-4" />,
        },
      ],
    },
  ];
}
