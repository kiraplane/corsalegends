import { officialGameFacts } from './sources';

export const CODE_CHECKED_AT = '2026-08-20';

export const activeCodes = [
  {
    code: 'RS3',
    reward: '25,000 Cash',
    status: 'Source-checked active',
    note: 'Three August 15 trackers agree on the exact RS3 string and 25,000 Cash reward.',
  },
  {
    code: '110K',
    reward: 'Cash reward; exact amount is confirmed by the in-game popup',
    status: 'Official-description active',
    note: 'Current milestone code still published in the official Roblox description during the August 20 check.',
  },
];

export const watchCodes: Array<{
  code: string;
  reward: string;
  status: string;
  note: string;
}> = [];

export const knownExpiredCodes = [
  'LARP',
  '90K',
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
    'RS3 is source-checked across three August 15 trackers. 110K remains printed in the official Roblox description, while LARP and 90K have moved to the expired history.',
  sourcesChecked: [
    {
      label: 'Official Roblox experience',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'AllThings.How — updated August 15, 2026',
      url: 'https://allthings.how/corsa-legends-codes/',
    },
    {
      label: 'NerdsChalk — updated August 15, 2026',
      url: 'https://nerdschalk.com/corsa-legends-codes/',
    },
    {
      label: 'MrGuider — updated August 15, 2026',
      url: 'https://www.mrguider.org/roblox/corsa-legends-codes/',
    },
  ],
};
