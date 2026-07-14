import { officialGameFacts } from './sources';

export const CODE_CHECKED_AT = '2026-07-14';

export const activeCodes = [
  {
    code: 'UNDERGLOW',
    reward: '25,000 Cash',
    status: 'Cross-checked active',
    note: 'Latest code reported by two current July 2026 code sources.',
  },
  {
    code: '4THOFJULY',
    reward: '25,000 Cash',
    status: 'Cross-checked active',
    note: 'Listed active by both current sources at the latest check.',
  },
  {
    code: '60K',
    reward: '25,000 Cash',
    status: 'Cross-checked active',
    note: 'Listed active by both current sources at the latest check.',
  },
];

export const watchCodes = [
  {
    code: '75K',
    reward: 'Cash reward; amount not confirmed by the first-party description',
    status: 'Official-description watch',
    note: 'The Roblox description still advertises 75K, but the two latest July trackers agree on a different active three. Try it only as a rotation check.',
  },
];

export const knownExpiredCodes = [
  'GOLF',
  'DIESELTRUCK',
  'HOUSING',
  'DBS',
  'ZR1',
  '10MILLVISITS',
  'RCF',
  'CARLO',
  'HAL',
  '50K',
  'FOOLS',
  'RACES',
  '5MILLVISITS',
  'VALENTINE',
  'LIGHTS',
  'RS7',
];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  activeCount: activeCodes.length,
  status:
    'Three Corsa Legends codes are cross-checked as active for July 2026. The official Roblox description also mentions 75K, but current trackers disagree on its rotation status.',
  sourcesChecked: [
    {
      label: 'Official Roblox experience',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Pro Game Guides — updated July 12, 2026',
      url: 'https://progameguides.com/roblox/corsa-legends-codes/',
    },
    {
      label: 'Twinfinite — updated July 13, 2026',
      url: 'https://twinfinite.net/codes/corsa-legends-codes/',
    },
  ],
};
