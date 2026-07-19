import { officialGameFacts } from './sources';

export const CODE_CHECKED_AT = '2026-07-17';

export const activeCodes = [
  {
    code: '90K',
    reward: 'Cash reward; exact amount is confirmed by the in-game popup',
    status: 'Official-description active',
    note: 'New milestone code published in the official Roblox experience description during the July 17 check.',
  },
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

export const watchCodes: Array<{
  code: string;
  reward: string;
  status: string;
  note: string;
}> = [];

export const knownExpiredCodes = [
  '75K',
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
    'Four Corsa Legends codes are tracked as active for July 2026. 90K is the newest official-description milestone code; UNDERGLOW, 4THOFJULY, and 60K remain cross-checked by current code trackers.',
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
