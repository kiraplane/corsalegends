import { CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

export const topicPages = {
  cars: {
    route: '/cars',
    label: 'Cars',
    eyebrow: 'Garage Decisions',
    title: 'Corsa Legends Cars and Car Choices',
    seoTitle: 'Corsa Legends Cars - Best Car, Trims and Buying Guide',
    seoDescription:
      'Understand Corsa Legends cars, trims, dealership choices, best-car tradeoffs, upgrades, and why a current all-cars list needs patch-aware data.',
    summary:
      'Corsa Legends advertises more than 80 cars and trims. Use this hub to choose by race, budget and upgrade plan instead of trusting an outdated one-number ranking.',
    image: '/corsalegends/media/official-4.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/best-car-and-fastest-car',
      '/guides/beginner-guide',
      '/guides/make-money-fast',
    ],
    sections: [
      {
        heading: 'The garage is broad, but the public database is not ready',
        paragraphs: [
          'Cogito describes Corsa Legends as a collection game with more than 80 detailed cars and trims. That first-party claim supports a real cars hub, but it does not provide a complete price sheet, top-speed table or patch history. The existing community wiki contains placeholders and only one partly filled vehicle row, so copying it would create a misleading database.',
          'This launch therefore treats the garage as a decision system. Check the dealership inside the current server for price, trim and availability, then compare the car against the race or driving style you actually care about. A car that looks fastest in a short drag clip may be difficult to control on a winding road, expensive to finish, or already changed by a new ALPHA update.',
        ],
      },
      {
        heading: 'Choose the job before choosing the car',
        paragraphs: [
          'Start with one of four use cases: a dependable first purchase, a highway build, a drag-focused project, or a handling-first road car. Then check stock acceleration, braking and cornering before buying every visible performance part. The correct purchase is the one that lets you repeat the content that earns or teaches you the most.',
          'Budget matters twice: first for the car and then for the build. A cheaper platform with enough grip and predictable power can progress faster than an expensive shell that leaves no Cash for tires, suspension, engine work or testing. Keep a reserve after purchase and change one system at a time so you can tell which upgrade improved the car.',
        ],
      },
      {
        heading: 'Why this site does not publish a permanent tier list',
        paragraphs: [
          'Autocomplete clearly shows demand for the best and fastest cars, but the strongest video result for a broad best-cars list labels itself outdated. Other clips demonstrate one modified car, tune or horsepower number without proving a comparable test across the full roster. That is not enough for an honest S-to-D ranking.',
          'The best-car guide instead gives a repeatable comparison method: define the event, normalize upgrade level, run multiple tests, record clean times, and account for control difficulty and cost. When reliable current roster data becomes available, this hub can add a filterable list without changing the decision rules that make the list useful.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many cars are in Corsa Legends?',
        answer:
          'The official Roblox description advertises more than 80 cars and trims. The exact current roster can change during ALPHA updates.',
      },
      {
        question: 'What is the best car in Corsa Legends?',
        answer:
          'No universal current winner is verified. Choose by race type, upgrade budget, handling and repeatable clean times rather than one horsepower clip.',
      },
      {
        question: 'Where do I buy cars?',
        answer:
          'Use the in-game dealership in the current official experience and verify the visible price and trim before committing Cash.',
      },
    ],
  },
  tuning: {
    route: '/tuning',
    label: 'Tuning',
    eyebrow: 'Performance Workshop',
    title: 'Corsa Legends Tuning Guide Hub',
    seoTitle: 'Corsa Legends Tuning - Engines, Suspension and Tires',
    seoDescription:
      'Learn Corsa Legends tuning for engines, turbo, suspension, tires and repeatable testing, with dedicated full-tuning and Supra setup guides.',
    summary:
      'Tune around a target race and a controlled test loop. Engine swaps, forced induction, suspension and tires interact, so a copied setup is a starting hypothesis, not a permanent answer.',
    image: '/corsalegends/media/official-2.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/full-tuning-guide',
      '/guides/supra-tune',
      '/guides/engine-swaps-and-fusions',
    ],
    sections: [
      {
        heading: 'Build for one measurable goal',
        paragraphs: [
          'The official description explicitly confirms engine swaps, multiple suspension setups, tire choices and advanced tuning. Those systems make Corsa Legends more simulation-leaning than a simple buy-the-largest-upgrade loop, but they also make generic “best tune” answers fragile. A drag target, highway pull and technical road need different compromises.',
          'Write down the goal before opening the garage. For a standing race, prioritize launch consistency and usable gearing. For a high-speed route, measure stability and acceleration after the first shift, not only peak speed. For winding roads, protect tire contact and braking confidence before adding more power.',
        ],
      },
      {
        heading: 'Use a one-change test cycle',
        paragraphs: [
          'Save or remember a baseline, run several clean attempts, change one variable, and repeat the same route. If you replace the engine, turbo, tires and suspension together, you cannot identify the source of wheelspin, understeer or a slower time. Small controlled changes produce a tune you can repair after an update.',
          'Treat tune values from videos as build-specific. The creator may use a different trim, engine, tire, fusion state or patch. Match the visible parts first, then adapt the values around your own car. If a copied setup becomes unstable, return toward the baseline instead of compensating with more extreme sliders.',
        ],
      },
      {
        heading: 'Power only matters when the car can use it',
        paragraphs: [
          'A large horsepower number is easy to showcase and easy to misunderstand. More power can lengthen braking zones, overload the driven tires, make first gear useless and hide a poor chassis decision. A slower-looking setup that launches cleanly and finishes every run may earn more and teach you more.',
          'Use the full tuning guide for the complete workflow, the engine and fusion guide when the build structure is unclear, and the Supra guide only when your exact platform and target match. Return to this hub after each major update because ALPHA balance and part behavior can change.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there one best Corsa Legends tune?',
        answer:
          'No. The best setup depends on the car, installed parts, race type and current update. Use one-change testing on a repeatable route.',
      },
      {
        question: 'Should I swap the engine first?',
        answer:
          'Only when the stock build cannot meet the target and you can still afford the supporting tires, suspension and testing changes.',
      },
      {
        question: 'Why does a YouTube tune feel wrong?',
        answer:
          'Your trim, parts, fusion state or patch may differ. Match the source build and adapt from a safe baseline instead of copying numbers blindly.',
      },
    ],
  },
  races: {
    route: '/races',
    label: 'Races',
    eyebrow: 'Events and Testing',
    title: 'Corsa Legends Races and Race Strategy',
    seoTitle: 'Corsa Legends Races - Race Strategy and Car Setup',
    seoDescription:
      'Prepare for Corsa Legends live races with a race-first car choice, clean test routine, Cash plan, setup checklist and ALPHA update cautions.',
    summary:
      'Live races are both a progression route and the best honest test bench. Pick the event first, then choose and tune the car around repeatable clean runs.',
    image: '/corsalegends/media/official-5.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/make-money-fast',
      '/guides/best-car-and-fastest-car',
      '/guides/full-tuning-guide',
    ],
    sections: [
      {
        heading: 'Read the race before spending Cash',
        paragraphs: [
          'Cogito confirms that the experience uses multiple live races. The current game title also advertises a new-race update signal, so event details are especially likely to rotate. Before buying a car or copying a tune, inspect the start, surface, corner count, braking zones and the length of the run.',
          'A short standing event rewards a different build from a long highway pull or a technical route. If your current car loses immediately, identify whether the problem is launch, gearing, braking, grip or a missed route. Buying the most expensive visible car before answering that question can waste the exact Cash needed to solve it.',
        ],
      },
      {
        heading: 'Consistency is a performance stat',
        paragraphs: [
          'Run several clean attempts rather than keeping the single best lucky time. Record whether the launch repeats, whether the car stays inside the road, and whether braking remains predictable. A build that wins one out of five attempts is a poor money route even when its peak time looks impressive.',
          'Change one tuning system only after the same failure repeats. Wheelspin points toward launch, tire or gearing work; missed corners point toward braking, suspension or driver line; weak late acceleration can justify power or ratio changes. This diagnosis loop connects the races hub to the tuning guides without pretending one setup fits every event.',
        ],
      },
      {
        heading: 'Use races as part of a larger Cash loop',
        paragraphs: [
          'Codes, the Cogito group bonus, jobs and races all contribute to progression. Claim temporary rewards first, keep a Cash reserve, and choose the most repeatable activity your current car can finish. The highest advertised payout is not automatically the best method if travel, failure or difficult controls reduce completion rate.',
          'After an update, recheck the event entrance and reward before publishing an hourly rate. The money guide focuses on that practical loop, while the best-car page helps decide whether your next purchase reduces the current race bottleneck or only adds another unfinished project.',
        ],
      },
    ],
    faq: [
      {
        question: 'Which race pays the most?',
        answer:
          'Payouts and events can change during ALPHA. Compare reward per reliable completion, including travel and failed attempts, in the current server.',
      },
      {
        question: 'Do I need the fastest car to win?',
        answer:
          'Not always. Launch, braking, grip, route knowledge and consistent clean runs can matter more than peak speed.',
      },
      {
        question: 'Why did a race guide stop matching the game?',
        answer:
          'The experience is actively updated. Verify the current event layout, title and reward before reusing an older route or tune.',
      },
    ],
  },
  map: {
    route: '/map',
    label: 'Map',
    eyebrow: 'World Navigation',
    title: 'Corsa Legends Map and Locations',
    seoTitle: 'Corsa Legends Map - Cities, Highways and Race Navigation',
    seoDescription:
      'Navigate the Corsa Legends map, cities, highways, winding roads, race entrances and garages without relying on an invented location list.',
    summary:
      'The official experience confirms cities, scenic highways, winding roads and open landscapes. Stable public location data is still thin, so this page teaches a reliable navigation routine.',
    image: '/corsalegends/media/official-1.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/guides/beginner-guide', '/races', '/official-links'],
    sections: [
      {
        heading: 'What is verified about the world',
        paragraphs: [
          'The official Roblox description confirms detailed cities, scenic highways, twisty roads and broader landscapes. Current thumbnails also show homes, garages, roads and workshop-style spaces. That supports a useful map page, but it does not establish a complete named-location directory or permanent spawn layout.',
          'Because the game remains in ALPHA, entrances and routes can change. This site will not invent neighborhood names or copy a map from Assetto Corsa, FR Legends, Vehicle Legends or the separate Corsa motorsport experience. Use current in-game labels as the final authority.',
        ],
      },
      {
        heading: 'Build your own route anchors in the first session',
        paragraphs: [
          'Identify four anchors before driving at full speed: the spawn or car menu, the dealership, the workshop or tuning access, and the nearest race start. Then connect them with one safe road loop. That loop becomes a practical test route for braking, low-speed steering and the effect of each upgrade.',
          'When exploring beyond the loop, use distinctive intersections, bridges, signs, skyline features and road direction instead of memorizing one creator video frame. If you become lost after an update, return to spawn and rebuild the four-anchor loop rather than following a stale shortcut.',
        ],
      },
      {
        heading: 'Separate race navigation from free driving',
        paragraphs: [
          'A road that feels good for cruising may not be the race route, and a race entrance may load a different start or checkpoint flow. Inspect the event prompt before testing a car. If the route uses checkpoints, learn the sequence with a controllable build before adding power.',
          'A future interactive map is justified only when location names, coordinates and update coverage can be maintained. Until then, this answer-first hub is more accurate than a decorative map with fabricated pins. Use the races page for event diagnosis and the tuning page for repeatable route testing.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there an official Corsa Legends map?',
        answer:
          'No separate official map image was verified. The official description confirms cities, highways, winding roads and landscapes inside the experience.',
      },
      {
        question: 'Why are exact location names limited here?',
        answer:
          'Reliable current public location data is thin and the ALPHA world can change. The site avoids inventing labels from screenshots.',
      },
      {
        question: 'What should I find first?',
        answer:
          'Locate spawn/car access, the dealership, tuning access and one nearby race start, then connect them with a repeatable road loop.',
      },
    ],
  },
  updates: {
    route: '/updates',
    label: 'Updates',
    eyebrow: 'Current ALPHA Snapshot',
    title: 'Corsa Legends Updates and Current Status',
    seoTitle: 'Corsa Legends Update - Current ALPHA Status and Changes',
    seoDescription:
      'Track the current Corsa Legends Roblox update signal, ALPHA status, code rotation, official media and what to recheck after patches.',
    summary:
      'Corsa Legends is live and actively updated. Current first-party data highlights underglow and hood removal, while code and race changes rotate quickly.',
    image: '/corsalegends/media/official-3.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/codes', '/cars', '/tuning'],
    sections: [
      {
        heading: 'Current first-party update signal',
        paragraphs: [
          'At the latest check, the Roblox games API title includes UNDERGLOW + HOOD REMOVAL and still labels the experience ALPHA. The same API reports a July 12, 2026 update timestamp. Those facts support a fresh status page without pretending that the title is a full changelog.',
          'Official thumbnails show customization, workshop and open-world car scenes, while the description continues to emphasize 80+ cars and trims, engine swaps, suspension, tires, dynamic weather, damage and live races. Exact balance numbers, new-car names and patch-by-patch fixes are not published in a verified first-party changelog.',
        ],
      },
      {
        heading: 'Recheck three things after every patch',
        paragraphs: [
          'First, open the codes page because reward strings rotate around update and like milestones. Second, test the car and tune you use most on the same route; an ALPHA physics or part change can invalidate an old setup. Third, confirm that your preferred race entrance and reward still match the current server.',
          'Do not assume an older public server reflects the newest build. If the title or media changed recently, join a fresh server before diagnosing a missing part or route. Keep a baseline tune and enough Cash to adapt instead of spending the entire balance on update day.',
        ],
      },
      {
        heading: 'How this wiki records updates',
        paragraphs: [
          'First-party Roblox data is used for identity, title, description, dates and media. Current code sources are cross-checked against each other and labelled separately from first-party claims. Video advice keeps its publish and checked dates so an old guide cannot silently become permanent truth.',
          'The site will add a dedicated update article only when the change creates a real player decision or current search demand. Small title rotations stay on this status page. That keeps the sitemap useful and avoids dozens of thin patch pages.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the current Corsa Legends update?',
        answer:
          'The latest first-party title checked on July 14, 2026 highlights underglow and hood removal while the experience remains in ALPHA.',
      },
      {
        question: 'Why did my tune change after an update?',
        answer:
          'ALPHA part or physics changes can alter performance. Compare against a saved baseline on the same route before making several new changes.',
      },
      {
        question: 'Where are official patch notes?',
        answer:
          'No complete public first-party changelog was verified. Use the Roblox title, description, media and creator group as the safest current signals.',
      },
    ],
  },
  officialLinks: {
    route: '/official-links',
    label: 'Official Links',
    eyebrow: 'Verified Identity',
    title: 'Corsa Legends Roblox and Community Links',
    seoTitle: 'Corsa Legends Discord and Official Roblox Links',
    seoDescription:
      'Open the verified Corsa Legends Roblox experience and Cogito group, check the current community Discord invite, and avoid wrong-game links.',
    summary:
      'The Roblox experience and Cogito group are first-party verified. The current Corsa Legends Discord vanity invite is cross-checked by a current guide source but is not identity proof by itself.',
    image: '/corsalegends/icon.png',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/guides/beginner-guide', '/codes', '/updates'],
    sections: [
      {
        heading: 'Match the creator and platform IDs',
        paragraphs: [
          `The correct experience uses Place ID ${officialGameFacts.robloxPlaceId}, Universe ID ${officialGameFacts.robloxUniverseId}, and links its creator to the verified Cogito group with ID ${officialGameFacts.creatorId}. Those identifiers matter more than a logo copied onto another page.`,
          'Open the experience through Roblox and inspect the creator link before joining a community server or following a code claim. This guide site never asks for a Roblox password, cookie, recovery code or third-party download.',
        ],
      },
      {
        heading: 'Discord is useful, but it is a second verification layer',
        paragraphs: [
          `Current code coverage links the vanity invite ${officialGameFacts.communityDiscordUrl}. Treat that as a community destination that was cross-checked on ${CHECKED_AT}, not as a substitute for the first-party Roblox identity. Discord invites can expire, redirect or be copied into unrelated pages.`,
          'Once opened, confirm that the server name, branding, announcements and game links point back to the same Cogito experience. Leave immediately if a bot or member asks for account credentials, an executable, an executor key or payment to unlock a public car.',
        ],
      },
      {
        heading: 'Wrong Corsa results to avoid',
        paragraphs: [
          'Search results include Assetto Corsa mods, FR Legends communities, Vehicle Legends guides and a separate Roblox experience called Corsa: Roblox Motorsport Sim. The `corsaroblox` Linktree belongs to that separate motorsport experience and should not be presented as a Corsa Legends creator page.',
          'Use this sequence when a link looks unfamiliar: return to the verified Roblox experience, open Cogito from the creator field, and compare the destination with current first-party branding. That prevents a similarly named game from becoming a false source for codes, cars, maps or tuning values.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Corsa Legends Roblox link?',
        answer: officialGameFacts.officialRobloxUrl,
      },
      {
        question: 'Who created Corsa Legends?',
        answer:
          'Roblox lists the verified Cogito group, ID 6670214, as the creator.',
      },
      {
        question: 'What is the Corsa Legends Discord?',
        answer:
          'The current cross-checked vanity invite is discord.com/invite/corsalegends. Verify that it links back to the Cogito Roblox experience before trusting announcements.',
      },
    ],
  },
} satisfies Record<string, TopicPage>;

export const topicPageList = Object.values(topicPages);

export function getTopicPage(key: keyof typeof topicPages) {
  return topicPages[key];
}
