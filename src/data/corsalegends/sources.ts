import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-17';
export const OFFICIAL_CHECKED_AT = '2026-07-17';

export const officialGameFacts = {
  name: 'Corsa Legends',
  siteName: 'Corsa Legends Wiki',
  domain: 'https://www.corsalegends.wiki',
  canonicalHost: 'www.corsalegends.wiki',
  robloxPlaceId: '122720857080780',
  robloxUniverseId: '6786784563',
  creatorName: 'Cogito',
  creatorType: 'Verified Roblox Group',
  creatorId: '6670214',
  genre: 'Simulation / Vehicle Sim',
  status: 'Live Roblox ALPHA',
  createdAt: '2024-11-11T18:56:49.46Z',
  updatedAt: '2026-07-12T20:21:01.981796Z',
  maxPlayers: 28,
  activePlayersAtCheck: 2963,
  visitsAtCheck: 18520855,
  favoritesAtCheck: 389001,
  officialRobloxUrl:
    'https://www.roblox.com/games/122720857080780/Corsa-Legends',
  officialGroupUrl: 'https://www.roblox.com/communities/6670214/Cogito',
  communityDiscordUrl: 'https://discord.com/invite/corsalegends',
};

export const siteDescription =
  'Corsa Legends Wiki: active codes, car choices, tuning, money routes, races, maps, and current Roblox update guides.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Corsa Legends on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the current experience name, creator, ALPHA status, mechanics, update title, and code-description signal.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API',
    url: `https://apis.roblox.com/universes/v1/places/${officialGameFacts.robloxPlaceId}/universe`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirms the place-to-universe mapping.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox games API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirms Cogito group ownership, Vehicle Sim classification, player capacity, dates, and current public metrics.',
  },
  {
    type: 'official',
    label: 'Cogito Roblox group',
    url: officialGameFacts.officialGroupUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Verified creator destination linked from the Roblox experience page.',
  },
  {
    type: 'competitor',
    label: 'Pro Game Guides codes',
    url: 'https://progameguides.com/roblox/corsa-legends-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Updated July 12, 2026; used with Twinfinite to cross-check the current active-code set and redeem flow.',
  },
  {
    type: 'competitor',
    label: 'Twinfinite codes',
    url: 'https://twinfinite.net/codes/corsa-legends-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Updated July 13, 2026; agrees on UNDERGLOW, 4THOFJULY, and 60K.',
  },
  {
    type: 'competitor',
    label: 'Corsa Legends Fandom',
    url: 'https://corsa-legends-roblox.fandom.com/wiki/Corsa_Legends_Wiki',
    checkedAt: CHECKED_AT,
    confidence: 'watch',
    note: 'Very small and incomplete community wiki; used only for content-gap analysis and a dealership clue.',
  },
  {
    type: 'competitor',
    label: 'Earnaldo Corsa Legends guide hub',
    url: 'https://earnaldo.com/blog/corsa-legends',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for route and positioning comparison, not as proof of exact tune values or current car rankings.',
  },
  {
    type: 'youtube',
    label: 'Corsa Legends video results',
    url: 'https://www.youtube.com/results?search_query=Corsa+Legends+Roblox',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to select target-specific gameplay, money, tuning, fusion, and Supra sources while rejecting outdated or exploit content.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Play on Roblox',
    href: officialGameFacts.officialRobloxUrl,
  },
  {
    label: 'Cogito Group',
    href: officialGameFacts.officialGroupUrl,
  },
];
