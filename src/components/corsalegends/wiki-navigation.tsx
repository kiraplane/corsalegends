'use client';

import { Badge } from '@/components/ui/badge';
import { officialGameFacts } from '@/data/corsalegends/sources';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  CarFront,
  ChevronDown,
  CircleGauge,
  Compass,
  ExternalLink,
  Flag,
  ListChecks,
  type LucideIcon,
  MapPinned,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: LucideIcon;
  links: WikiNavLink[];
}

const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Home' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/codes', label: 'Active Codes' },
      { href: '/official-links', label: 'Official Links' },
    ],
  },
  {
    title: 'Garage',
    icon: CarFront,
    links: [
      { href: '/cars', label: 'Cars Hub' },
      {
        href: '/guides/best-car-and-fastest-car',
        label: 'Best and Fastest Car',
      },
      { href: '/guides/make-money-fast', label: 'Money Guide' },
    ],
  },
  {
    title: 'Performance',
    icon: Wrench,
    links: [
      { href: '/tuning', label: 'Tuning Hub' },
      { href: '/guides/full-tuning-guide', label: 'Full Tuning Guide' },
      { href: '/guides/supra-tune', label: 'Supra Tune' },
      {
        href: '/guides/engine-swaps-and-fusions',
        label: 'Engines and Fusions',
      },
    ],
  },
  {
    title: 'World and Racing',
    icon: Flag,
    links: [
      { href: '/races', label: 'Races' },
      { href: '/map', label: 'Map and Locations' },
      { href: '/updates', label: 'Current Update' },
    ],
  },
  {
    title: 'Guide Index',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/disclaimer', label: 'Disclaimer' },
    ],
  },
];

function isCurrentPath(currentPath: string | undefined, href: string) {
  return Boolean(currentPath && currentPath === href);
}

function isGroupCurrentPath(
  currentPath: string | undefined,
  group: WikiNavGroup
) {
  return group.links.some((link) => isCurrentPath(currentPath, link.href));
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex h-auto min-w-0 items-center justify-between gap-3 whitespace-normal rounded-md border px-3 py-2 text-left text-sm leading-6 transition',
        isActive
          ? 'border-[#E43D30] bg-[#E43D30] font-semibold text-white'
          : 'border-[#30343B] bg-[#08090B] text-[#BDBAB4] hover:border-[#E43D30] hover:bg-[#1A1D22] hover:text-white'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-white' : 'text-[#F0B24C]'
        )}
      />
    </LocaleLink>
  );
}

export function CorsaLegendsMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mb-6 rounded-lg border border-[#30343B] bg-[#121418] p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#F5F2EA] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#E43D30]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#F0B24C]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#F0B24C] text-xs uppercase">
              <group.icon className="size-4" />
              {group.title}
            </p>
            <div className="grid gap-2">
              {group.links.map((link) => (
                <WikiNavLinkItem
                  key={link.href}
                  currentPath={currentPath}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

export function CorsaLegendsRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#30343B] bg-[#121418] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#E43D30] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#F5F2EA] text-xl font-bold">
                Garage routes
              </h2>
            </div>
            <CircleGauge className="size-5 shrink-0 text-[#F0B24C]" />
          </div>

          <div className="mt-4 space-y-4">
            {wikiNavGroups.map((group) => {
              const isGroupActive = isGroupCurrentPath(currentPath, group);

              return (
                <details
                  key={group.title}
                  open={isGroupActive}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#E43D30]/75 bg-[#211516]'
                      : 'border-[#30343B] bg-[#08090B]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#F5F2EA] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#F0B24C]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#30343B] bg-[#121418] px-1.5 py-0.5 text-[#BDBAB4] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#E43D30] transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-2">
                    {group.links.map((link) => (
                      <WikiNavLinkItem
                        key={link.href}
                        currentPath={currentPath}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-[#30343B] bg-[#121418] p-4">
          <div className="flex items-center gap-2 font-semibold text-[#F5F2EA]">
            <ShieldCheck className="size-4 text-[#E43D30]" />
            Verified identity
          </div>
          <dl className="mt-3 space-y-2 text-[#BDBAB4] text-xs leading-5">
            <div className="flex justify-between gap-3">
              <dt>Creator</dt>
              <dd className="text-right text-[#F5F2EA]">Cogito</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Place</dt>
              <dd className="text-right text-[#F5F2EA]">122720857080780</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt>Type</dt>
              <dd className="text-right text-[#F5F2EA]">Vehicle Sim</dd>
            </div>
          </dl>
          <a
            href={officialGameFacts.officialRobloxUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 border-[#30343B] border-t pt-3 font-medium text-[#D3D0C9] text-sm transition hover:text-[#F0B24C]"
          >
            Open Roblox
            <ExternalLink className="size-4" />
          </a>
        </div>

        <div className="rounded-lg border border-[#30343B] bg-[#08090B] p-4 text-[#BDBAB4] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#F5F2EA]">
            <MapPinned className="size-4 text-[#F0B24C]" />
            Entity reminder
          </div>
          Assetto Corsa, FR Legends, Vehicle Legends and the separate Roblox
          Corsa motorsport game are not Corsa Legends by Cogito.
        </div>
      </div>
    </aside>
  );
}

export function CorsaLegendsPageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#08090B] px-4 py-6">
      <CorsaLegendsMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <CorsaLegendsRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}
