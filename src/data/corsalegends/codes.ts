import { officialGameFacts } from './sources';

export const CODE_CHECKED_AT = '2026-07-29';

export const activeCodes = [
  {
    code: '100K',
    reward: 'Cash reward; exact amount is confirmed by the in-game popup',
    status: 'Current tracker active',
    note: 'Newest milestone code found in current July 26-27 code trackers.',
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
    '100K is the newest July milestone code. LARP and 90K remain in the current tracked group, while older entries stay archived unless current sources agree.',
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
