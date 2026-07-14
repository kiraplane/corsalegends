# Corsa Legends Wiki 项目需求

基于当前项目的代码框架，开发 Corsa Legends 的英文 Roblox 攻略站。正式页面类型必须由确认后的当前长尾需求、游戏机制和可靠资料决定，不能因为源模板存在就机械保留。

## 项目身份

- 游戏名称：Corsa Legends
- 网站名称：Corsa Legends Wiki
- 游戏平台：Roblox
- 项目目录名：corsalegends
- GitHub 仓库名：corsalegends
- Cloudflare Worker 项目名：corsalegends
- 正式域名：www.corsalegends.wiki
- Canonical URL：https://www.corsalegends.wiki
- 计划 PRD 文件：docs/corsalegends-wiki-prd-and-implementation-plan.md
- 目标数据目录：src/data/corsalegends/
- 目标路由组：src/app/[locale]/(corsalegends)/

## 官方身份

- Roblox 官方游戏页：https://www.roblox.com/games/122720857080780/Corsa-Legends
- Roblox Place ID：122720857080780
- Roblox Universe ID：6786784563
- Roblox 创作者：Cogito（已验证 Group）
- Roblox Creator Group ID：6670214
- Roblox 创作者页面：https://www.roblox.com/communities/6670214/Cogito
- 独立官方网站：not yet verified

身份边界：本项目只描述由 Cogito 发布的 Roblox Experience。Roblox 官方资料将其定义为仍处于 ALPHA 阶段的车辆模拟游戏，包含车辆收集、改装、调校、开放道路和实时竞速。后续资料不得与 Assetto Corsa、FR Legends、同名模组或其他 Roblox 驾驶游戏混用，也不能暗示本站获得 Roblox 或 Cogito 的官方背书。

## 核心种子关键词

- corsa legends
- corsa legends wiki
- corsa legends roblox
- corsa legends guide
- corsa legends codes
- corsa legends cars
- corsa legends tuning
- corsa legends races
- corsa legends map

codes、car list、tuning、races、map、dealership、controls、money、updates 等词当前只作为需求研究种子；必须在需求包确认后通过当前搜索需求、游戏机制与可靠资料核验，再标记 keep、ignore、watch 或 localize_later。

## 开发要求

1. 搜索并核验当前玩法、更新状态和长尾搜索需求，建立 keep / ignore / watch / localize_later 关键词矩阵，再决定页面、导航、实体命名和内容规模。
2. 以 Roblox 官方游戏页、Roblox 官方 API、Cogito Group 页面和当前可靠攻略来源交叉核验事实。不得把源模板的游戏名称、域名、Place/Universe ID、创作者、玩法、代码、素材、广告配置、路由或站点配置带入目标站点。
3. 网站视觉应参考 Corsa Legends 当前 Roblox 图标、缩略图和车辆模拟氛围，不沿用源模板的视觉、配色或素材。
4. 根据真实需求判断是否建设 guides、codes、cars、tuning、races、map、dealership、controls、money、updates、mobile/console troubleshooting 或其他页面。没有可靠数据支持的页面不要伪造；可以使用高质量 YouTube 视频作为研究来源，写成独立、面向玩家决策的英文攻略，不能机械转录或改写视频。
5. 对 codes 页面执行双重核验：先确认搜索需求与游戏内兑换机制，再核验当前有效代码。Roblox 官方描述中的代码信息只能作为待复核线索，不能直接复制成永久有效代码列表。
6. 首页与导航应作为信息密集的 SEO hub，覆盖经核验的高价值次级关键词，并提供桌面端 sticky wiki sidebar 与移动端可展开 wiki menu。
7. 开发完成并验证后，在 GitHub 创建 `corsalegends` 仓库并推送项目。
8. 在 Cloudflare Workers 创建 `corsalegends` 项目，绑定 `corsalegends.wiki` 与 `www.corsalegends.wiki`，以 `www` 为 canonical，并在权限允许时配置 GitHub 自动构建。
9. 在 GA4 创建或复用与正式域名对应的媒体资源和 Web 数据流，授权方式与站点注册信息从 `/Users/he/Documents/AI/vibe coding/GA-GTM` 获取并同步。
10. 本地验证与上线步骤完成后，按 wiki-site-builder 规范将站点幂等注册到 Shipmanager；第二个核心链接必须从实际实现且需求最强的 hub 中选择，不能预设为 codes 或其他模板栏目。
