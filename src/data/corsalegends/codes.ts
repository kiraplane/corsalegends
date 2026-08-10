import { officialGameFacts } from './sources';

export const CODE_CHECKED_AT = '2026-08-10';

export const activeCodes = [
  {
    code: '110K',
    reward: 'Cash reward; exact amount is confirmed by the in-game popup',
    status: 'Current tracker active',
    note: 'Current milestone code published in the official Roblox description during the August 10 check.',
  },
  {
    code: 'LARP',
    reward: 'Reward shown by the in-game redemption popup',
    status: 'Cross-checked active',
    note: 'New LARP update code reported by the current July 23 code tracker and a same-day code video.',
  },
  {
    code: '90K',
    reward: 'Cash reward; exact amount is confirmed by the in-game popup',
    status: 'Official-description active',
    note: 'New milestone code published in the official Roblox experience description during the July 17 check.',
  },
];

export const watchCodes: Array<{
  code: string;
  reward: string;
  status: string;
  note: string;
}> = [];

export const knownExpiredCodes = [
  '100K',
  'UNDERGLOW',
  '4THOFJULY',
  '60K',
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
    '110K is the current official-description milestone code and the next code is promised at 120,000 likes. LARP and 90K remain source-checked until a current source marks them expired.',
  sourcesChecked: [
    {
      label: 'Official Roblox experience',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Game.Guide — updated July 23, 2026',
      url: 'https://www.game.guide/roblox-codes/corsa-legends',
    },
    {
      label: 'Current LARP code video',
      url: 'https://www.youtube.com/watch?v=12QLMhQVyYA',
    },
    {
      label: 'Pocket-Codes July 2026 check',
      url: 'https://pocket-codes.com/corsa-legends-codes.html',
    },
  ],
};
