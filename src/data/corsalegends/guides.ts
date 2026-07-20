import { CHECKED_AT, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

export { siteDescription };

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos: Record<string, GuideVideo> = {
  gameplay: {
    id: 'I_9t-KS6re4',
    title: 'Playing CORSA LEGENDS, IS This The NEW BEST CAR GAME?',
    channel: 'Dema',
    url: 'https://www.youtube.com/watch?v=I_9t-KS6re4',
    thumbnailUrl: youtubeThumbnail('I_9t-KS6re4'),
    publishedAt: '2026-01-20',
    viewCountLabel: '11.5K views at source check',
    checkedAt: CHECKED_AT,
  },
  money: {
    id: 'qCRcb54UKXM',
    title: 'here’s how to make money fast! In corsa legends! (roblox)',
    channel: 'Otwoplayz',
    url: 'https://www.youtube.com/watch?v=qCRcb54UKXM',
    thumbnailUrl: youtubeThumbnail('qCRcb54UKXM'),
    publishedAt: '2026-04-22',
    viewCountLabel: '5.2K views at source check',
    checkedAt: CHECKED_AT,
  },
  tuning: {
    id: 'KaL7_RBdp78',
    title: 'FULL Tuning Guide in Roblox Corsa Legends (Engine Swaps + Turbo)',
    channel: 'JJboy438 Gaming',
    url: 'https://www.youtube.com/watch?v=KaL7_RBdp78',
    thumbnailUrl: youtubeThumbnail('KaL7_RBdp78'),
    publishedAt: '2026-04-09',
    viewCountLabel: '15.3K views at source check',
    checkedAt: CHECKED_AT,
  },
  supra: {
    id: 'q_ZEQKBlxbs',
    title: '17s Supra Tune Revamp Corsa Legends',
    channel: 'Hellwhip1211',
    url: 'https://www.youtube.com/watch?v=q_ZEQKBlxbs',
    thumbnailUrl: youtubeThumbnail('q_ZEQKBlxbs'),
    publishedAt: '2026-01-20',
    viewCountLabel: '11.9K views at source check',
    checkedAt: CHECKED_AT,
  },
  fusions: {
    id: '4njWOkEQ6VU',
    title: 'CORSA LEGENDS FUSIONS TUTORIAL',
    channel: 'Uni',
    url: 'https://www.youtube.com/watch?v=4njWOkEQ6VU',
    thumbnailUrl: youtubeThumbnail('4njWOkEQ6VU'),
    publishedAt: '2025-12-22',
    viewCountLabel: '25.7K views at source check',
    checkedAt: CHECKED_AT,
  },
};

export const guideCategoryIntro: Record<GuideCategory, string> = {
  'Start Here':
    'Verify the game, claim temporary rewards, learn the map anchors and buy with a plan.',
  Money:
    'Compare codes, group bonuses, jobs and races by reliable Cash per completed loop.',
  Cars: 'Choose a car by event, budget and control instead of a fragile one-number tier list.',
  Tuning:
    'Build from a baseline, change one system at a time and test on a repeatable route.',
  Racing:
    'Read event demands, protect consistency and use clean runs as the real benchmark.',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Corsa Legends Beginner Guide',
    seoTitle: 'Corsa Legends Beginner Guide - First Cars, Cash and Tuning',
    seoDescription:
      'Start Corsa Legends safely: verify the Roblox game, claim codes, build a Cash loop, choose a first car, learn the map and tune without overspending.',
    summary:
      'Your first session should create a repeatable loop: verify the Cogito game, claim current rewards, learn four map anchors, keep a Cash reserve and improve one car with measured changes.',
    category: 'Start Here',
    difficulty: 'Beginner',
    coverImageUrl: videos.gameplay.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    videoSearchQueries: [
      'Corsa Legends Roblox beginner guide',
      'Corsa Legends Roblox first time playing',
      'Corsa Legends Roblox gameplay guide',
    ],
    sourceNotes:
      'Built from the official Roblox identity and mechanics, current code research, and a target-specific long-form gameplay source. Advice avoids unsupported exact car rankings.',
    video: videos.gameplay,
    tags: ['Beginner', 'First Car', 'Cash'],
    relatedRoutes: ['/codes', '/guides/make-money-fast', '/cars', '/tuning'],
    body: [
      {
        heading: 'Begin with the correct Roblox experience',
        paragraphs: [
          'Open the Corsa Legends experience created by the verified Cogito group and check Place ID 122720857080780 before following any guide. Search results contain Assetto Corsa mods, FR Legends pages, Vehicle Legends advice and a separate Roblox motorsport game named Corsa. Their cars, codes and controls are not interchangeable with this experience. The correct game is still labelled ALPHA and its menus can change after an update.',
          'Once the current server loads, resist the urge to buy the first expensive car or install every visible part. Spend the opening minutes locating the car or spawn interface, dealership, tuning access and a nearby race or job. Those four anchors create a small navigation loop that you can repeat even when the wider map is unfamiliar. A useful first session is measured by how quickly you can repeat that loop, not by the horsepower number in your garage.',
        ],
      },
      {
        heading: 'Claim temporary value before grinding',
        paragraphs: [
          'Open the Settings or cogwheel menu and redeem the current cross-checked codes before spending Cash. Code rotations are update-sensitive, so use the codes page rather than an old screenshot. Join the official Cogito Roblox group if you want the driving bonus described on the game page, then rejoin if the benefit does not appear immediately. These rewards reduce early pressure, but they should fund a plan rather than a random collection.',
          'Keep part of the reward untouched. Your budget has to cover the car, useful supporting upgrades and mistakes discovered during testing. If every dollar goes into the purchase price, a promising car can remain slower than a cheaper, finished build. A practical opening reserve is not a fixed percentage; it is enough to change tires or suspension, test power work and still enter the activity that earns the next round of Cash.',
        ],
      },
      {
        heading: 'Use a controllable first car to learn the physics',
        paragraphs: [
          'Corsa Legends advertises realistic driving ideas such as throttle control, aerodynamics, damage and detailed tuning. That makes a predictable first car more valuable than a spectacular build you cannot launch, brake or turn consistently. Test stock acceleration, one braking zone and one medium-speed corner before buying upgrades. Learn whether the car pushes wide, rotates too easily or loses traction when power arrives.',
          'Choose the next purchase around a specific limitation. If the current car completes races reliably but lacks late acceleration, save for a stronger platform or power path. If it spins and misses corners, changing cars may hide a tuning or driving problem rather than solve it. The best beginner car is the affordable one that finishes the chosen loop repeatedly while leaving enough Cash to learn how each system changes the result.',
        ],
      },
      {
        heading: 'Turn the map into a personal test route',
        paragraphs: [
          'The official description confirms cities, highways, winding roads and open landscapes, but there is no reliable current public map with permanent named pins. Build a route from visible landmarks instead: start at a known menu or building, pass one clear intersection, include a braking zone and return without teleporting. Drive it slowly until you can identify the same surfaces and corners every time.',
          'This route becomes more than navigation practice. It lets you compare tires, suspension and gearing without changing the test itself. If a new setup feels faster but misses the return corner on every run, it did not improve the complete task. When an update moves an entrance or changes traffic, rebuild the loop from the four anchors rather than treating an older creator route as permanent map truth.',
        ],
      },
      {
        heading: 'Upgrade one problem at a time',
        paragraphs: [
          'Write down a simple baseline before modifying the car: how it launches, where it shifts, whether it stops predictably and how often you finish the route cleanly. Change one system and repeat several runs. Tires and suspension can make existing power usable; engine work and forced induction can expose grip or gearing weaknesses. Installing everything at once produces a fast-looking build that is difficult to diagnose.',
          'Stop spending when the car reliably completes the activity that funds your next decision. At that point, choose a path: optimize the same car with the full tuning guide, build Cash with the money route, or compare a replacement through the best-car framework. The beginner goal is not a finished garage. It is a stable loop that lets every later purchase answer a real problem instead of creating another unfinished project.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in Corsa Legends?',
        answer:
          'Verify the Cogito experience, claim current codes, locate dealership/tuning/race anchors, keep a Cash reserve and test one controllable car.',
      },
      {
        question: 'Should I buy the most expensive car immediately?',
        answer:
          'No. Buy for a specific race or driving goal and keep enough Cash for tires, suspension, power work and testing.',
      },
      {
        question: 'Where are the controls?',
        answer:
          'Use the visible in-game Settings and vehicle prompts in the current build. Recheck them after updates instead of importing keybinds from another Corsa game.',
      },
    ],
  },
  {
    slug: 'make-money-fast',
    title: 'How to Make Money Fast in Corsa Legends',
    seoTitle: 'Corsa Legends Money Guide - Fast Cash Without Glitches',
    seoDescription:
      'Make Cash in Corsa Legends with current codes, the Cogito group bonus, jobs and races. Compare reliable earnings and avoid scripts or money glitches.',
    summary:
      'The fastest safe method is the loop you complete reliably: claim rotating codes, enable the group driving bonus, compare jobs and races, then reinvest only where it shortens the next run.',
    category: 'Money',
    difficulty: 'Beginner',
    coverImageUrl: videos.money.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Corsa Legends how to make money fast Roblox',
      'Corsa Legends best paying jobs',
      'Corsa Legends money method Roblox',
    ],
    sourceNotes:
      'Uses current official reward signals and two target-specific money/job videos. It avoids publishing a permanent hourly rate because travel, failure, payout, and updates change results.',
    video: videos.money,
    tags: ['Money', 'Jobs', 'No Glitches'],
    relatedRoutes: ['/codes', '/races', '/cars', '/guides/beginner-guide'],
    body: [
      {
        heading: 'Collect the non-repeatable Cash first',
        paragraphs: [
          'Redeem current codes before running jobs or races. At the July 14 check, UNDERGLOW, 4THOFJULY and 60K were cross-checked by two current code sources, while the first-party description still mentioned 75K as a rotation watch item. Enter codes only through the in-game Settings interface. A code page, Discord bot or guide site never needs your Roblox password, account cookie or recovery details.',
          'Next, join the verified Cogito group if you want the bonus Cash while driving described on the official page. Treat the bonus as a multiplier on activity you already complete, not a reason to idle or use automation. Rejoin the game after joining the group if the benefit is not visible. Once temporary rewards are claimed, stop counting them as hourly income; they are startup capital for a repeatable method.',
        ],
      },
      {
        heading: 'Compare effective Cash, not the advertised payout',
        paragraphs: [
          'For each job or race, record four numbers: reward, travel time, completion time and failure rate. A larger payout can lose to a smaller route when the event is far away, requires an unstable build or fails often. Run each candidate several times and divide total Cash by total real time, including resets. That number is more useful than a creator’s single perfect completion.',
          'Keep the test conditions similar. Use the same car, server type and route familiarity before comparing activities. If a job requires no risky setup while a race consumes repairs, retries or a difficult launch, include that friction. The best paying job is the one that remains good after ordinary mistakes, not the one that wins a showcase attempt with a finished endgame car.',
        ],
      },
      {
        heading: 'Use jobs to stabilize and races to scale',
        paragraphs: [
          'Jobs can be valuable early because they give a structured task while you learn the world. Identify the top-paying options available in the current server, but choose the shortest reliable loop for your device and map knowledge. If a job sends you across the map, learn its route at moderate speed before optimizing the car. Crashing or becoming lost destroys the advantage of a higher reward.',
          'Races become stronger when your car launches, brakes and follows checkpoints consistently. Pick one event your current build can finish, then tune the exact failure that slows it down. A tire or gearing change that removes retries can improve real earnings more than a large peak-power upgrade. Recheck payouts after major updates; ALPHA events and title rotations can invalidate an older “best method” list.',
        ],
      },
      {
        heading: 'Reinvest only when the upgrade pays back',
        paragraphs: [
          'Before buying a part, ask which step of the money loop it shortens. Tires that prevent wheelspin may improve every launch. Suspension that keeps the car on the road may eliminate failed deliveries. An expensive engine swap that increases top speed after the finish line provides no return for the chosen activity. Test the current bottleneck before opening the most expensive upgrade category.',
          'Keep a reserve after each purchase. A complete loop needs enough Cash for the next useful correction and should not depend on another temporary code. Stop upgrading when the activity is reliable and the payback period becomes longer than saving for the next car. This prevents a common progression trap: pouring the entire balance into one build while the garage goal keeps moving after every update.',
        ],
      },
      {
        heading: 'Money glitches cost more than they promise',
        paragraphs: [
          'Autocomplete includes Corsa Legends money glitch and script searches, but those are not legitimate progression paths. Executors and modified clients can expose an account, violate Roblox rules and break after a server update. They also make every claimed hourly rate meaningless because the result cannot be repeated safely by ordinary players. This site does not provide scripts, keys, injectors or duplication steps.',
          'If a method requires leaving the official experience, pasting code, disabling security or sharing login data, abandon it. Use codes, the creator group bonus, jobs and live races. A slower legal loop that protects the account and keeps working after an update is the only method worth optimizing. Use the tuning guide next when failures, not payout, are limiting your Cash.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the fastest way to make money in Corsa Legends?',
        answer:
          'Claim current codes and the Cogito group bonus, then compare jobs and races by Cash per reliable completion including travel and failed attempts.',
      },
      {
        question: 'What is the best paying job?',
        answer:
          'The best choice depends on the current update, route, car and completion rate. Test available jobs several times in the current server.',
      },
      {
        question: 'Are Corsa Legends money glitches safe?',
        answer:
          'No. Avoid scripts, executors and modified clients; they create account and platform-rule risk.',
      },
    ],
  },
  {
    slug: 'best-car-and-fastest-car',
    title: 'Corsa Legends Best Car and Fastest Car Guide',
    seoTitle: 'Corsa Legends Best Car - How to Find the Fastest Build',
    seoDescription:
      'Find the best Corsa Legends car for drag, highway or handling by comparing clean times, cost and control instead of trusting an outdated tier list.',
    summary:
      'No universal current best car is verified. Define the event, normalize the build, run clean repeats and rank total performance—including cost and control—not a single horsepower screenshot.',
    category: 'Cars',
    difficulty: 'Intermediate',
    coverImageUrl: '/corsalegends/media/official-4.png',
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'Corsa Legends best car Roblox',
      'Corsa Legends fastest car Roblox',
      'Corsa Legends best drag car',
    ],
    sourceNotes:
      'Autocomplete supports the intent, but the strongest broad best-cars video labels itself outdated. This guide therefore provides a current comparison method rather than an unsupported winner.',
    tags: ['Best Car', 'Fastest Car', 'Testing'],
    relatedRoutes: ['/cars', '/races', '/tuning', '/guides/make-money-fast'],
    body: [
      {
        heading: '“Best” must name the task',
        paragraphs: [
          'The fastest launch car, highest-speed highway car and easiest technical-road car do not have to be the same vehicle. Search demand often compresses those questions into “best car,” but buying decisions improve when the task is explicit. Choose the race, road or money loop first. Then describe what wins: short acceleration, late acceleration, braking, corner stability, top speed, low cost or consistency.',
          'Corsa Legends is still in ALPHA, advertises more than 80 cars and trims, and supports deep performance changes. That combination makes a permanent tier list fragile. A current broad best-cars video even labels itself outdated, while many newer clips show one extreme build without testing comparable rivals. This guide will not turn those clips into a false universal ranking.',
        ],
      },
      {
        heading: 'Normalize the cars before comparing them',
        paragraphs: [
          'Compare stock cars first or match the upgrade stage as closely as possible. A fully developed favorite should not be ranked against an untouched dealership car and described as inherently superior. Record the trim, engine, forced induction, tire and suspension state. If the game exposes performance numbers, save them as context but do not treat one number as the final result.',
          'Use the same route, start position and server conditions. Run several clean attempts per car and discard only obvious mistakes, not every slower result. The median clean time tells you more than the single fastest launch. Also record how many attempts became unusable because the car spun, missed a braking point or could not follow the road at speed.',
        ],
      },
      {
        heading: 'Rank performance in layers',
        paragraphs: [
          'For drag or standing acceleration, measure launch repeatability, early shifts and finish time. For a highway pull, measure speed gained across the same distance and whether the car remains stable. For technical roads, add braking confidence, rotation and recovery after a small mistake. A high top-speed result does not compensate when the route ends before the car reaches it.',
          'Then add ownership cost. Include purchase price, supporting parts and the Cash needed to make the car usable. A cheaper car that reaches the target with modest work can be the better progression choice even when an expensive build wins the final comparison. Cost matters most when the purchase prevents you from completing the rest of the setup.',
        ],
      },
      {
        heading: 'Separate fastest car from fastest usable build',
        paragraphs: [
          'Extreme horsepower clips prove that a platform can be modified, but they rarely prove that every player can reproduce the complete parts, tune or conditions. Ask whether the car launches without excessive wheelspin, shifts through the usable range and survives the route. A build that needs a perfect attempt may be fastest on paper and slower across ten ordinary runs.',
          'Control is not merely a beginner preference. Every correction costs time, and every failed run reduces money efficiency. If two cars are close, choose the one that repeats the task with fewer corrections and leaves room for later tuning. The fastest usable build is the one that converts its power into the selected event, not the one with the biggest visible number.',
        ],
      },
      {
        heading: 'Know when the test has answered the purchase question',
        paragraphs: [
          'Stop comparing when one candidate clearly meets the event goal, fits the full budget and repeats the result. Continuing to chase an unverified global winner can delay progression while the ALPHA balance changes around you. Keep the test sheet and rerun it after a major update or when a new car actually targets the same use case.',
          'If no candidate is stable, return to the tuning hub before buying again. The limitation may be tires, suspension, ratios or throttle control rather than the chassis. If the current car completes the money loop reliably, continue saving until the replacement solves a measured bottleneck. That rule produces a useful garage even when the community cannot agree on one best car.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best car in Corsa Legends?',
        answer:
          'No universal current winner is verified. The best choice depends on event, upgrade stage, budget and how consistently you can use the performance.',
      },
      {
        question: 'What is the fastest car?',
        answer:
          'Peak speed clips are not a comparable current leaderboard. Test matched builds over the same route and count clean repeatable results.',
      },
      {
        question: 'Should I follow a Corsa Legends tier list?',
        answer:
          'Use any list only after checking its date, patch, trim, installed parts and test method. Avoid lists that rank from isolated clips.',
      },
    ],
  },
  {
    slug: 'full-tuning-guide',
    title: 'Corsa Legends Full Tuning Guide',
    seoTitle: 'Corsa Legends Tuning Guide - Engine, Turbo, Gears and Grip',
    seoDescription:
      'Tune Corsa Legends cars with a baseline, engine and boost plan, gear tests, tires, suspension and repeatable diagnosis for drag or road builds.',
    summary:
      'A fast tune is a controlled sequence: set a baseline, choose one target, make power usable, adjust gearing around the route, then solve grip and stability without changing everything at once.',
    category: 'Tuning',
    difficulty: 'Intermediate',
    coverImageUrl: videos.tuning.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Corsa Legends full tuning guide Roblox',
      'Corsa Legends engine swap turbo guide',
      'Corsa Legends best gear ratio',
    ],
    sourceNotes:
      'The selected source directly covers engine swaps, turbo/superchargers and gearing. The article adds a player-facing diagnostic loop and avoids presenting build-specific numbers as universal settings.',
    video: videos.tuning,
    tags: ['Tuning', 'Engine Swap', 'Gearing'],
    relatedRoutes: [
      '/tuning',
      '/guides/engine-swaps-and-fusions',
      '/guides/supra-tune',
      '/races',
    ],
    body: [
      {
        heading: 'Save a baseline before touching the sliders',
        paragraphs: [
          'Choose one car, one route and one goal. Run several clean stock or current-build attempts and record launch behavior, shift points, braking, corner balance and finish time. If the game allows saving setups, preserve the baseline. If it does not, capture the visible values. Without a return point, every later correction becomes guesswork and an old creator setup can trap the car in a worse state.',
          'Use a route long enough to expose the problem you want to solve. A short drag cannot judge high-speed stability, while a winding road cannot isolate maximum acceleration cleanly. Keep weather, start location and traffic conditions as similar as the game permits. The goal is not laboratory perfection; it is enough consistency to know whether the change improved the complete task.',
        ],
      },
      {
        heading: 'Plan the powertrain around usable range',
        paragraphs: [
          'The official game description confirms engine swaps, and current target-specific tuning coverage includes turbo and supercharger work. Start by asking what the existing engine fails to deliver: launch torque, mid-range acceleration, late pull or reliability across the route. A swap should solve that measured gap. It should not be the automatic first purchase simply because the menu exposes a larger option.',
          'Forced induction can increase the same traction and gearing problems that limited the stock car. Add power in a stage you can test, then watch where wheelspin begins and whether the car reaches useful speed sooner. If added boost makes the first half slower or creates constant corrections, restore grip and ratios before buying more. Peak output only matters after the tires and gearing convert it into forward progress.',
        ],
      },
      {
        heading: 'Tune gears for the route, not a screenshot',
        paragraphs: [
          'A ratio setup should keep the engine in a useful band while placing shifts at sensible points for the target event. If first gear disappears into wheelspin, lengthen or soften the launch approach rather than celebrating faster revs. If the car falls flat after a shift, examine the gap between gears. If top gear is never reached, a theoretical top-speed ratio may be wasting acceleration.',
          'Change final drive or one related ratio step at a time and rerun the same start. Record the shift sequence and finish result, not only the speedometer at one instant. Values copied from a video assume that creator’s engine, power parts, tires, vehicle and update. Match the build context first, then move gradually toward the behavior your own route requires.',
        ],
      },
      {
        heading: 'Make the chassis accept the power',
        paragraphs: [
          'Tires determine whether acceleration, braking and steering can reach the road. Choose them for the actual surface and event rather than a generic “best” label. Suspension then controls how the car loads those tires. If the car pushes wide, snaps suddenly or becomes nervous over bumps, more power will magnify the failure. Return to a controlled pace and change one chassis variable.',
          'Use visible symptoms. Repeated launch spin points toward throttle, ratio or tire work. Understeer at the same corner suggests excess entry speed, front grip or balance problems. Oversteer under power suggests the rear cannot accept the torque. Long braking or instability may need earlier braking before hardware changes. Driver input is part of the test; tune around repeatable inputs, not a single heroic save.',
        ],
      },
      {
        heading: 'Finish with repeatability and an update plan',
        paragraphs: [
          'A finished tune completes several clean runs within a narrow result range and remains controllable when the launch is not perfect. Save the setup and note the car, trim, engine, forced induction, tires, route and checked date. That context turns the values into useful evidence instead of a magic string. If a new update changes the feel, compare the saved baseline before moving every slider.',
          'Stop when the tune meets the original goal. Chasing one more peak-speed number can damage the launch, braking or money loop that justified the build. Use the engine/fusion guide when the upgrade structure is the uncertainty, and use the Supra guide only for that exact platform. Return to races to validate the build under the event it was designed to solve.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best tune in Corsa Legends?',
        answer:
          'There is no universal tune. Match the car, parts and route, preserve a baseline and change one system at a time.',
      },
      {
        question: 'Should I use turbo or a supercharger?',
        answer:
          'Choose by the power delivery your route needs and whether the current tires and gearing can use it. Test the complete run, not only peak output.',
      },
      {
        question: 'How do I fix wheelspin?',
        answer:
          'Reduce or reshape launch power, review first-gear/final-drive behavior, improve appropriate tires and retest with consistent throttle input.',
      },
    ],
  },
  {
    slug: 'supra-tune',
    title: 'Corsa Legends Supra Tune Guide',
    seoTitle: 'Corsa Legends Supra Tune - Drag Setup and Test Method',
    seoDescription:
      'Build a Corsa Legends Supra tune by matching parts, controlling launch, adjusting gearing and adapting a 17-second reference without blind copying.',
    summary:
      'A Supra tune only transfers when the car, trim, engine and parts match. Use the 17-second revamp build as a reference, then adapt launch, ratios and grip to your own update and route.',
    category: 'Tuning',
    difficulty: 'Advanced',
    coverImageUrl: videos.supra.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Corsa Legends Supra tune',
      'Corsa Legends Roblox Supra tune',
      'best Supra tune Corsa Legends',
    ],
    sourceNotes:
      'The selected target-specific source demonstrates a 17-second Supra revamp setup. The article treats that time as source context, not a guaranteed result across trims, parts, patches or player input.',
    video: videos.supra,
    tags: ['Supra', 'Drag', 'Tune'],
    relatedRoutes: [
      '/guides/full-tuning-guide',
      '/guides/engine-swaps-and-fusions',
      '/races',
      '/cars',
    ],
    body: [
      {
        heading: 'Match the build before matching the values',
        paragraphs: [
          'The current search intent is specific—players want a Corsa Legends Supra tune—and a target-specific revamp video demonstrates a 17-second result. That time is useful evidence that the platform can perform, but it is not a promise. Confirm the exact Supra trim, engine, forced induction, tire state and other installed parts before copying any ratio or setup value.',
          'If one component differs, treat the source as a direction rather than a completed tune. A more powerful engine may overload first gear; a different tire may change launch grip; an update may alter the same ratio. Save your current values and run a baseline on the exact event you want to improve. The goal is to beat your own repeatable result, not reproduce a title under unknown conditions.',
        ],
      },
      {
        heading: 'Solve the launch before adding speed',
        paragraphs: [
          'A drag-oriented Supra loses most of its advantage when the opening seconds become wheelspin or constant correction. Use consistent throttle input and observe whether the car hooks immediately, spins through the first shift or bogs below useful power. Adjust launch behavior and first-gear use before changing the entire gearbox. A clean slower launch is the baseline from which power can be added safely.',
          'Run several starts without completing the whole route when necessary. This isolates the first failure and saves time. If spin remains, review tire choice, power delivery and first-gear length. If the car bogs, confirm that the engine reaches its useful range and that the ratio is not too tall. Do not compensate for a launch problem by making every later gear more extreme.',
        ],
      },
      {
        heading: 'Build the ratio sequence from the finish backward',
        paragraphs: [
          'After the launch repeats, complete clean runs and note which gear crosses the finish. The final useful gear should not hit a limiter too early or remain so tall that acceleration disappears. Adjust final drive and the relevant ratio gradually, then check whether earlier shifts still land in useful power. One faster speedometer reading before the finish does not matter if the actual run becomes slower.',
          'Use the video setup as a comparison point only after the parts match. If your Supra makes less power, shorter effective gearing may be needed; if it makes more, the launch and early ratios may need restraint. Keep each change small enough to reverse. Record the exact sequence so a good result is not lost among several experiments.',
        ],
      },
      {
        heading: 'Protect stability outside the drag strip',
        paragraphs: [
          'A Supra built for one straight event can become unpleasant in the wider world. Test braking, a moderate corner and recovery after the drag target is met. If the car becomes nervous or refuses to turn, restore enough tire and suspension balance to reach the race start and finish ordinary driving safely. A few hundredths of peak performance may not justify a car that fails everywhere else.',
          'Keep a separate road-oriented setup if the game supports saved configurations. Otherwise choose the use case that matters most and document it in the name or notes you keep. “Supra tune” is incomplete without “for which route.” The best drag setup, highway pull and mixed-road setup can all use the same car while needing different compromises.',
        ],
      },
      {
        heading: 'Know when to rebuild from baseline',
        paragraphs: [
          'Return to baseline when several compensating changes make the car slower, when the parts no longer match the reference, or when an ALPHA update changes behavior. Do not keep moving unrelated sliders to rescue a broken ratio sequence. Rebuild the launch, early shifts and finish gear in that order, then restore chassis confidence.',
          'A successful tune produces several close clean runs, not one lucky 17-second attempt. Save the finished context—trim, engine, boost, tires, route and date—and revisit only when the target changes. Use the full tuning guide for system diagnosis and the engine/fusion guide before making a costly powertrain change that would invalidate every current ratio.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best Supra tune in Corsa Legends?',
        answer:
          'No single value set fits every trim, engine, part state and update. Match the source build, preserve a baseline and adapt through repeatable runs.',
      },
      {
        question: 'Is a 17-second Supra guaranteed?',
        answer:
          'No. The selected source demonstrates that result under its own setup and conditions; your parts, patch and inputs may differ.',
      },
      {
        question: 'What should I tune first?',
        answer:
          'Stabilize the launch, then build the gear sequence around the finish, and finally restore road stability if the car is used outside the drag event.',
      },
    ],
  },
  {
    slug: 'engine-swaps-and-fusions',
    title: 'Corsa Legends Engine Swaps and Fusions Guide',
    seoTitle: 'Corsa Legends Best Engine - Swaps, Fusions and Power Builds',
    seoDescription:
      'Choose a Corsa Legends engine swap, understand update-sensitive fusion decisions, plan boost and supporting parts, and avoid wasting Cash on unusable power.',
    summary:
      'The best engine is the one that fills a measured gap and leaves budget for grip, gearing and testing. Confirm every fusion prompt in the current UI before committing update-sensitive parts.',
    category: 'Tuning',
    difficulty: 'Advanced',
    coverImageUrl: videos.fusions.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    videoSearchQueries: [
      'Corsa Legends fusions tutorial',
      'Corsa Legends best engine Roblox',
      'Corsa Legends engine swap guide',
    ],
    sourceNotes:
      'The official description verifies engine swaps, and the selected target-specific video confirms a player-facing fusion tutorial exists. Exact fusion labels and costs remain update-sensitive and must be confirmed in the live UI.',
    video: videos.fusions,
    tags: ['Engines', 'Fusions', 'Power'],
    relatedRoutes: [
      '/guides/full-tuning-guide',
      '/guides/supra-tune',
      '/cars',
      '/guides/make-money-fast',
    ],
    body: [
      {
        heading: 'Define the missing performance before choosing an engine',
        paragraphs: [
          'Corsa Legends officially supports engine swaps, but “best engine” is incomplete without a target car and event. Run the current build first and describe the failure: weak launch, empty mid-range, poor late acceleration or insufficient maximum speed across the real route. If the problem is braking, grip or control, an engine swap can make it worse while consuming the budget needed for the actual fix.',
          'Compare candidate powertrains by delivery, not only the largest output number. A useful engine reaches the needed range at the right point, works with available gearing and does not overwhelm the driven tires. Also include the supporting cost. The purchase price is only the beginning when the build still needs forced induction, tires, suspension and repeated tests.',
        ],
      },
      {
        heading: 'Treat fusion as a commit, not a browsing action',
        paragraphs: [
          'Current target-specific community coverage includes a fusion tutorial, which supports the existence of an update-era fusion workflow. Public first-party documentation does not provide a permanent recipe or cost table, so use the live game interface as the final authority. Read every preview, required item, resulting part and confirmation message before proceeding. Do not assume a creator’s older menu matches the current ALPHA build.',
          'Record the car, inventory and current setup before committing. If the interface consumes, combines or transforms a component, verify what can be recovered and what becomes locked. When the result is unclear, pause and test on a less important build rather than risking the only part needed for your main car. A useful guide protects the player from an irreversible mistake even when labels change.',
        ],
      },
      {
        heading: 'Add boost only after the engine works naturally',
        paragraphs: [
          'Turbo and supercharger paths can reshape power delivery, but they should not hide a poor base pairing. Test the swapped engine without maximum boost first. Observe launch traction, shift recovery and whether the car reaches the useful range during the target event. Then add forced induction in a controlled stage and compare the complete run.',
          'If the added power creates wheelspin, missed shifts or instability, stop before purchasing another power step. Revisit tires, gearing and throttle use. A build is not stronger when the speed appears only after the finish or requires several failed launches. The best engine and boost combination is the one that improves repeatable event performance while preserving enough control to reach and complete the activity.',
        ],
      },
      {
        heading: 'Budget the supporting car before committing',
        paragraphs: [
          'Create a build budget with separate lines for engine/fusion work, boost, tires, suspension and a reserve. If the powertrain consumes the entire balance, the car may remain unusable until another long grind. Compare that outcome with improving the current engine or buying a platform that reaches the same goal more efficiently.',
          'Use the money guide to estimate how many reliable loops the full project requires. If the payback is longer than the time you plan to use the car, save the Cash. Engine work is most valuable when it unlocks a specific event, removes a measured acceleration gap or completes a platform you already control—not when it merely produces a garage number.',
        ],
      },
      {
        heading: 'Rebuild the tune after changing the powertrain',
        paragraphs: [
          'An engine swap or fusion can invalidate the old launch, ratios and chassis balance. Return to the saved baseline route and rebuild in order: traction, early gearing, later gearing, braking and corner stability. Do not assume the old Supra or drag values remain correct because the body stayed the same. The new delivery changes what every supporting system must handle.',
          'Save the final context and checked date. If an update changes fusion prompts or engine behavior, compare the current live UI and rerun the baseline before committing new parts. Use the full tuning guide for diagnosis, then return to the target race. A complete power build is finished only when the car repeats the intended result without depending on a perfect one-off launch.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best engine in Corsa Legends?',
        answer:
          'No universal engine is verified. Choose the option that fills the target event’s measured gap and leaves budget for tires, gearing, suspension and testing.',
      },
      {
        question: 'How do fusions work?',
        answer:
          'A target-specific tutorial confirms a fusion workflow, but exact prompts and requirements are update-sensitive. Read the current in-game preview before committing any component.',
      },
      {
        question: 'Should I add maximum boost immediately?',
        answer:
          'No. Test the base engine pairing first, then add boost gradually and solve traction or gearing failures before adding more power.',
      },
    ],
  },
];

export const relatedRouteLabels: Record<string, string> = {
  '/': 'Corsa Legends Wiki',
  '/guides': 'All Guides',
  '/codes': 'Active Codes',
  '/cars': 'Cars Hub',
  '/tuning': 'Tuning Hub',
  '/races': 'Races',
  '/map': 'Map and Locations',
  '/updates': 'Current Update',
  '/discord': 'Discord and Community',
  '/official-links': 'Official Links',
  '/disclaimer': 'Site Disclaimer',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/make-money-fast': 'Money Guide',
  '/guides/best-car-and-fastest-car': 'Best and Fastest Car',
  '/guides/full-tuning-guide': 'Full Tuning Guide',
  '/guides/supra-tune': 'Supra Tune',
  '/guides/engine-swaps-and-fusions': 'Engines and Fusions',
};

export const allCoreRoutes = [
  '/',
  '/guides',
  '/codes',
  '/cars',
  '/tuning',
  '/races',
  '/map',
  '/updates',
  '/discord',
  '/official-links',
  '/disclaimer',
  '/privacy',
  '/terms',
  '/cookie',
  ...guides.map((guide) => `/guides/${guide.slug}`),
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
