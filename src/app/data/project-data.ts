export interface ProcessPhase {
  phase?: string;
  title?: string;
  body?: string;
  insight?: string;
  imgs?: string[];
  imgLayout?: "single" | "duo" | "wide";
}

export interface ProjectOutcome {
  metrics?: { label: string; value: string }[];
  summary?: string;
}

export interface RejectedDirection {
  title?: string;
  reason?: string;
}

export interface Project {
  slug: string;
  tag?: string;
  title: string;
  shortTitle?: string;
  desc?: string;
  fullDesc?: string;
  img?: string;
  bg?: string;
  accentColor?: string;
  role?: string;
  team?: string;
  timeline?: string;
  tools?: string[];
  deliverables?: string[];
  challenge?: string;
  challengeQuote?: string;
  constraints?: string[];
  hypothesis?: string;
  rejectedDirections?: RejectedDirection[];
  videoUrl?: string;
  process?: ProcessPhase[];
  outcome?: ProjectOutcome;
  impacts?: { value: string; label: string }[];
  confidential?: boolean;
  confidentialNote?: string;
}

export const projects: Project[] = [
  {
    slug: "ldar",
    tag: "DESKTOP UX/UI · HARDWARE DIAGNOSTICS",
    title: "Lenovo Diagnostics for ARM",
    shortTitle: "Lenovo Diagnostics",
    desc: "Desktop diagnostics application shipped with Lenovo Arm laptops, supporting 100,000+ monthly users in technical troubleshooting scenarios.",
    fullDesc: "Led UX/UI strategy for a complex diagnostics product used across multiple hardware environments\nRedesigned diagnostic workflows, improving usability and reducing cognitive load in technical scenarios\nImproved accessibility compliance by 60% through audits and targeted redesign initiatives\nDeveloped and governed a scalable Design System in Figma (variables, libraries, component architecture), accelerating development iterations by 20% \\Collaborated with engineers and stakeholders in Agile environments to align product and technical constraints",
      // "Development and governance of a scalable Design System using advanced Figma features (variables, libraries, component architecture), accelerating iteration and ensuring cross-team consistency.\nAdaptation of desktop interfaces to touchscreen contexts, enhancing interaction reliability across hardware environments.\nCoordination and leadership of a UX/UI team, defining experience goals per release cycle and aligning design decisions with engineering and business stakeholders in Agile environments.",
    img: "src/app/imgs/CoverLDAR.png",
    bg: "#dfe7f5",
    accentColor: "#4a6fa5",
    role: "Product Designer leading UX/UI strategy, design systems, and workflow redesign.",
    tools: ["Figma", "FigJam", "Jira", "Confluence", "AMP", "UX Research"],
    timeline: "Confidential",
    deliverables: ["Redesigned design system", "Visual identity", "QoL UX improvements", "Accessibility"],
    confidential: true,
    confidentialNote:
      "This case study includes confidential product work. The project remains in the portfolio for context, but detailed process, constraints, and outcomes are intentionally obscured.",
    impacts: [
      { value: "60%+", label: "Accessibility compliance improvement" },
      { value: "100,000+", label: "Monthly users supported" },
      { value: "20%+", label: "Development efficiency" },
    ],
    outcome: {
      metrics: [
        { label: "Task Completion Rate", value: "94%" },
        { label: "Transfer Time Reduced", value: "−71%" },
        { label: "User Satisfaction", value: "4.8 / 5" },
        { label: "Components Shipped", value: "64" },
      ],
      summary:
        "The redesign shipped across Lenovo's ARM device lineup. The updated design system reduced future feature delivery time by an estimated 40% and improved accessibility scores across all diagnostic flows.",
    },
  },
  {
    slug: "lenovo-diagnostics",
    tag: "EDITORIAL UX/UI · MOBILE APP",
    title: "Lenovo Diagnostics Project (NDA)",
    shortTitle: "Lenovo Diagnostics",
    desc: "Confidential initiative focused on adapting a desktop diagnostics experience to new interaction models, devices, and user profiles.",
    fullDesc: "Adapted desktop interfaces to touchscreen environments, improving interaction reliability across devices.\nLed a major interface overhaul targeting a new user demographic, redefining interaction patterns and UI structure.\nDeveloped and scaled a Visual Identity and a Design System to ensure consistency across evolving product requirements.",
      // "Folio Daily is a reading experience shaped through typography, interface pacing, and focused mobile interaction design. It aims to provide a calm and immersive reading environment, free from distractions and interruptions.",
    img: "src/app/imgs/CoverLD.png",
    bg: "#ecdcc8",
    accentColor: "#8b6a3e",
    role: "Product Designer responsible for interface strategy, system scalability, and interaction redesign.",
    timeline: "Confidential",
    tools: ["Figma", "Principle", "Typetura", "Notion"],
    impacts: [
      { value: "", label: "Improved usability across touch-enabled devices" },
      { value: "", label: "Enabled product expansion to new user segments" },
      { value: "", label: "Increased consistency and scalability across the interface" },
    ],
    outcome: {
      metrics: [
        { label: "Improved usability across touch-enabled devices", value: "" },
        { label: "Enabled product expansion to new user segments", value: "" },
        { label: "Increased consistency and scalability across the interface", value: "" },
      ],
      summary:
        "Folio Daily launched to 18,000 downloads in its first week, driven almost entirely by word-of-mouth. The typography-first approach was cited in over 200 App Store reviews. It was featured by Apple as 'App of the Day' in 14 countries.",
    },
    confidential: true,
    confidentialNote:
      "This case study includes confidential product work. The project remains in the portfolio for context, but detailed process, constraints, and outcomes are intentionally obscured.",

  },
  {
    slug: "totuga",
    tag: "KIDS FINTECH · MOBILE APP",
    title: "Totuga",
    shortTitle: "Totuga",
    desc: "A gamified financial literacy app for children — teaching money habits through a digital wallet, savings goals, chores, and an adventure world with a turtle companion.",
    fullDesc:
      "Totuga is a gamified financial literacy app for children — teaching money habits through a digital wallet, savings goals, chores, and an adventure world with a turtle companion. It aims to give children a real sense of ownership over money — through a digital wallet they control, savings goals they set, tasks they choose, and an adventure world that rewards real-world financial behaviour.",
    img: "https://images.unsplash.com/photo-1758521541779-7558e273cdf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG1vYmlsZSUyMGFwcCUyMGdyZWVuJTIwcGxheWZ1bCUyMGludGVyZmFjZXxlbnwxfHx8fDE3Nzc4MjA0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    bg: "#c8ecd2",
    accentColor: "#2d8a50",
    role: "UX/UI Designer — end-to-end product design, mascot direction, and design system",
    team: "Team of 4: 1 PM, 1 iOS engineer, 1 backend engineer, me (all design)",
    timeline: "14 weeks",
    tools: ["Figma", "Illustrator", "Principle", "Maze"],
    deliverables: ["iOS App", "Android App", "Design System", "Mascot & Illustration Guidelines"],
    challenge:
      "Most financial literacy tools for children are either boring (spreadsheet-style trackers) or too abstract (they teach concepts without real money mechanics). Totuga set out to give children a real sense of ownership over money — through a digital wallet they control, savings goals they set, tasks they choose, and an adventure world that rewards real-world financial behaviour.",
    challengeQuote:
      '"My daughter understands pocket money in theory, but has no idea what saving actually feels like. I want her to feel the difference."',
    constraints: [
      "Dual audience: the app had to work for children (ages 7–12) and be trusted by parents — two very different mental models",
      "Strict COPPA/LGPD compliance — no personal data collection from minors without explicit parental consent",
      "Gamification had to reinforce real saving behaviour, not replace it with hollow rewards",
      "14-week deadline tied to an accelerator demo day",
    ],
    hypothesis:
      "If we give children genuine agency over a real (parent-loaded) balance — combined with visible progress toward goals they chose — the intrinsic motivation to save will outperform any points-based reward system.",
    rejectedDirections: [
      {
        title: "Points-only economy (no real money)",
        reason: "Children quickly recognised fake currencies as meaningless. Real balance amounts, even small ones, created significantly more engagement in prototype testing.",
      },
      {
        title: "Parent-controlled reward gating",
        reason: "Parents approved it; children didn't. When kids had no agency over timing or amounts, they lost interest within two sessions. Replaced with a parent-approval flow that still centred the child.",
      },
      {
        title: "Realistic financial UI (no mascot)",
        reason: "A clean, adult-style wallet interface tested well with parents and terribly with children. The turtle companion became the emotional anchor that made the financial concepts feel safe and approachable.",
      },
    ],
    process: [
      {
        phase: "01 / DISCOVERY",
        title: "28 families. One consistent gap: saving feels invisible.",
        body: "I interviewed 28 families — parents and children separately — across two weeks. Children could recite the definition of saving but had no felt experience of it. Parents wanted financial education but worried apps would gamify money in unhealthy ways. I ran co-design sessions with children aged 7–12 using paper prototypes and card sorting to understand which financial concepts felt real vs. abstract to them.",
        insight:
          "Key finding: children who had a physical piggy bank at home had a significantly stronger intuition about delayed gratification than those who didn't. The digital experience needed to replicate that tangibility.",
        imgs: [
          "https://images.unsplash.com/photo-1565687950692-520fa91191d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1576153192281-d558108925bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "duo",
      },
      {
        phase: "02 / CONCEPT & MASCOT",
        title: "The turtle wasn't decoration — it was the product.",
        body: "Early concepts treated the turtle mascot as a UI flourish. Testing showed the opposite: children narrated their financial decisions through the turtle ('Totuga wants to save for the item shop'). I redefined the mascot as the emotional core of the product and worked with an illustrator to develop a full expression library — 24 states covering encouragement, celebration, waiting, and disappointment — each tied to specific financial events.",
        imgs: [
          "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "03 / INFORMATION ARCHITECTURE",
        title: "Seven features. One mental model: earn, save, spend.",
        body: "The app's seven surfaces (wallet, piggy bank, direct payment, tasks, adventure, customisation, item shop) were originally designed as separate tabs. Testing showed children ignored anything beyond the first two. I restructured the IA around a single loop — earn (tasks) → save (piggy bank) → spend (item shop / customisation) — with the wallet and adventure world as persistent status layers rather than destinations. Navigation dropped from 7 tabs to 3.",
        insight:
          "Children navigated by asking 'where is my turtle?' — not by feature name. The avatar's position in the UI became the primary wayfinding cue, replacing labelled navigation in the final design.",
        imgs: [
          "https://images.unsplash.com/photo-1526050071463-2c476b162a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "04 / PROTOTYPE & TESTING",
        title: "In-home testing with 14 children — parents watching.",
        body: "I ran moderated usability sessions in participants' homes, with parents present but silent. Children completed five tasks: check balance, set a savings goal, mark a chore done, buy an item, and customise their turtle. The dual-audience dynamic was critical — I documented both the child's experience and the parent's comfort level in real time. The parent approval flow was redesigned three times before both groups felt satisfied.",
        imgs: [
          "https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "05 / FINAL DESIGN",
        title: "Bright, tactile, and honest about money.",
        body: "The final design uses a saturated green palette anchored by Totuga's shell colour, with high-contrast type sized for 7-year-old readers. Every balance is shown in real currency (R$) — never points or coins — reinforcing genuine financial understanding. The adventure world map expands as children hit savings milestones, creating a spatial metaphor for financial progress that children described as 'my turtle growing up'.",
        imgs: [
          "https://images.unsplash.com/photo-1758598305146-0adb6799dbae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
    ],
    impacts: [
      { value: "78%", label: "Savings goal completion rate" },
      { value: "4.9/5", label: "Parent satisfaction score" },
    ],
    outcome: {
      metrics: [
        { label: "Avg. Savings Goal Met", value: "78%" },
        { label: "Weekly Active Kids", value: "+3.4×" },
        { label: "Parent Satisfaction", value: "4.9 / 5" },
        { label: "Task Completion Rate", value: "91%" },
      ],
      summary:
        "Totuga launched in closed beta with 600 families and reached a 78% savings goal completion rate — compared to an industry benchmark of under 30% for gamified savings tools. Parent retention at 90 days was 84%. The project was presented at a fintech accelerator demo day and received pre-seed interest from two Brazilian edtech funds.",
    },
  },
  {
    slug: "north-dashboard",
    tag: "B2B SAAS · DASHBOARD SYSTEMS",
    title: "North Dashboard",
    shortTitle: "North",
    desc: "A B2B dashboard redesign focused on information architecture, reusable components, and scalable UX for distributed teams.",
    fullDesc:
      "North Dashboard is a B2B dashboard redesign focused on information architecture, reusable components, and scalable UX for distributed teams. It aims to provide a consistent and efficient user experience across the entire product suite, supporting the needs of distributed teams.",
    img: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    bg: "#1a1a2e",
    accentColor: "#7b9cda",
    role: "UX/UI & Systems Designer — information architecture, component logic, and scalable interface patterns",
    team: "Team of 9: 1 design manager, 2 product designers (I led), 5 engineers, 1 PM",
    timeline: "11 weeks",
    tools: ["Figma", "Storybook", "Tokens Studio", "Zeroheight"],
    deliverables: ["Design System (200 components)", "Dashboard UI", "Token Library", "Documentation Site"],
    challenge:
      "North's founding team had been building a distributed-team command centre for two years — but with no design system. Each screen was a snowflake. Engineers were spending 30% of sprint time on UI inconsistencies. The product needed to scale to enterprise without rebuilding from scratch. I was brought in to architect a token-based system, align the existing UI, and ship 200 production-ready components in 11 weeks.",
    challengeQuote:
      '"We have 40 shades of the same grey across 200 screens. Nobody knows which one is correct anymore."',
    constraints: [
      "Could not pause feature delivery during the rebuild — system had to ship alongside",
      "Two existing front-end stacks (React + a legacy Ember surface) had to share tokens",
      "Enterprise customers contractually locked to current IA for 6 months — change had to be opt-in",
      "11-week deadline tied to Series B fundraise demos",
    ],
    hypothesis:
      "If we invert the workflow — building the component inventory before any screens — we'll eliminate 90% of UI inconsistency arguments and recoup the upfront cost within 2 sprints of adoption.",
    rejectedDirections: [
      {
        title: "Adopt an off-the-shelf system (Material / Radix)",
        reason: "Faster start, but enterprise customers needed white-label theming the libraries couldn't support cleanly.",
      },
      {
        title: "Single-tier flat token structure",
        reason: "Simpler to author but couldn't represent semantic intent — broke down the moment dark mode was added.",
      },
      {
        title: "Icon-only collapsed left rail",
        reason: "Failed for users with 8+ modules in moderated testing. Replaced with hybrid top-tabs + contextual rail.",
      },
    ],
    process: [
      {
        phase: "01 / DISCOVERY",
        title: "Shadow sessions, component audit, 200+ redundant clicks per day",
        body: "I spent two weeks embedded with six distributed teams across three time zones. Each day I shadowed a power-user session, documenting every click, every context switch, and every moment of friction. A component audit of the existing product revealed 87 unique button variants, 40+ grey values, and no shared spacing scale.",
        insight:
          "Shadow finding: the average power-user performed 200+ redundant navigation clicks per day — primarily because similar actions lived in different places across modules.",
        imgs: [
          "https://images.unsplash.com/photo-1565687950692-520fa91191d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1576153192281-d558108925bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "duo",
      },
      {
        phase: "02 / CONCEPT SPRINTS",
        title: "14 whiteboard sessions with engineering",
        body: "Rather than design in isolation, I ran 14 collaborative whiteboard sessions with the engineering leads over three weeks. We competed on component APIs — debating whether a component should accept children or configuration props, which variant dimensions mattered, and where to draw boundaries. This upfront investment halved the number of design-engineering disagreements during build.",
        imgs: [
          "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "03 / TOKEN ARCHITECTURE",
        title: "Component inventory first. Screens second.",
        body: "I inverted the typical workflow — instead of designing screens and extracting components, I built the component inventory first, then composed screens from it. The token architecture uses three tiers: primitive (raw values), semantic (role-based), and component (scoped overrides). This structure supports light/dark, three density modes, and white-label theming from a single source of truth.",
        insight:
          "Defining the spacing scale first (a 4px base grid with named steps) eliminated 90% of alignment arguments before any screens were designed.",
        imgs: [
          "https://images.unsplash.com/photo-1676285437303-744ef82a0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "04 / PROTOTYPE & TESTING",
        title: "12 power-users. Navigation IA rebuilt twice.",
        body: "Moderated sessions with 12 enterprise power-users revealed that the primary navigation model — a left-rail with icon-only collapsed state — failed for users managing more than 8 modules. I designed and tested two alternative IA patterns before landing on a hybrid: persistent top-level tabs with a contextual side rail that appears per-module.",
        imgs: [
          "https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "05 / FINAL DESIGN",
        title: "200 components. Three density modes. Full keyboard nav.",
        body: "The shipped system includes 200 components across 8 categories, documented in Storybook and Zeroheight. Every component supports light and dark themes, three density modes (compact, default, comfortable), and full keyboard navigation to WCAG AA standard. The token library exports directly to CSS variables, Tailwind config, and iOS/Android native tokens.",
        imgs: [
          "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
    ],
    impacts: [
      { value: "−73%", label: "Reduction in daily navigation clicks" },
      { value: "200", label: "Components shipped in 11 weeks" },
      { value: "800+", label: "Enterprise users onboarded" },
    ],
    outcome: {
      metrics: [
        { label: "Daily Clicks Reduced", value: "−73%" },
        { label: "Delivery Time", value: "11 wks" },
        { label: "Teams Onboarded", value: "800+" },
        { label: "Components Shipped", value: "200" },
      ],
      summary:
        "North shipped the redesigned dashboard to its full user base within 3 months of the system's completion. Engineer sprint velocity increased by 38% in the quarter following adoption. The design system received an honourable mention at the 2024 Awwwards.",
    },
  },
  {
    slug: "mira-coffee",
    tag: "BRAND + UX/UI · COMMERCE",
    title: "Mira Coffee",
    shortTitle: "Mira Coffee",
    desc: "A brand and ordering experience combining product storytelling, mobile UI, and a lightweight commerce flow.",
    fullDesc:
      "Mira Coffee is a brand and ordering experience combining product storytelling, mobile UI, and a lightweight commerce flow. It aims to create a strong brand identity and a seamless ordering process for a single-origin roastery in Lisbon.",
    img: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    bg: "#e8c9b8",
    accentColor: "#7a4f3a",
    role: "UX/UI Designer — brand system, ordering flow, and interface design",
    team: "Team of 4: 2 founders (client), 1 contract iOS dev, me (design + research)",
    timeline: "8 weeks",
    tools: ["Figma", "Illustrator", "Procreate", "Useberry"],
    deliverables: ["Brand Identity", "Packaging System", "iOS Ordering App", "Print Collateral"],
    challenge:
      "Mira Coffee is a single-origin roastery in Lisbon run by two founders who source directly from farms in Ethiopia and Colombia. Their coffee is exceptional — but their identity was a stock logo and a Squarespace site. They needed a brand that would sit confidently next to specialty roasters in Tokyo and London, while remaining human enough to feel local.",
    challengeQuote:
      '"Our beans are the best we\'ve ever tasted, but people keep walking past. We need to look as good as we taste."',
    constraints: [
      "Founder budget — single design contract, no agency support",
      "Packaging had to use existing kraft-paper supplier (no new material sourcing)",
      "iOS-only launch (no Android budget)",
      "Brand had to read at 3 scales: shop window, 250g bag, app icon",
    ],
    hypothesis:
      "If the brand reads as 'warm precision' rather than minimalist-cold or rustic-cheap, it'll close the perception gap — and wholesale buyers will start treating Mira like a Tokyo or London peer.",
    rejectedDirections: [
      {
        title: "Botanical illustration mark",
        reason: "Beautiful but indistinguishable from 4 other Lisbon roasters in the audit. Too generic.",
      },
      {
        title: "Geometric 'M' monogram",
        reason: "Confident but too cold — founders wanted warmth without being rustic. Cut after first review.",
      },
      {
        title: "Algorithmic recommended menu",
        reason: "Felt off-brand for a roastery built on origin storytelling. Replaced with editorial-style origin cards.",
      },
    ],
    process: [
      {
        phase: "01 / DISCOVERY",
        title: "12 competitors analysed. 3 focus groups. One clear opportunity.",
        body: "I analysed 12 specialty coffee brands for visual language, packaging material, and digital presence. Three focus groups with Lisbon-based coffee enthusiasts identified a gap: most local roasters were either minimalist-sterile (looks cold) or maximalist-rustic (looks cheap). The opportunity was warm precision — craft with confidence.",
        insight:
          "Focus group insight: participants associated kraft paper packaging with quality, but only when paired with a considered, structured typographic system — not handwritten labels.",
        imgs: [
          "https://images.unsplash.com/photo-1565687950692-520fa91191d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1576153192281-d558108925bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "duo",
      },
      {
        phase: "02 / CONCEPT SKETCHES",
        title: "30+ hand-lettered logo explorations narrowed to three",
        body: "I opened with 30+ hand-drawn logo explorations in Procreate over a week — exploring wordmarks, monograms, and illustrated marks. Three directions emerged: a geometric 'M' monogram, a botanical illustration mark, and a typographic wordmark set in a custom serif. The founders immediately responded to the wordmark direction.",
        imgs: [
          "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "03 / WIREFRAMES",
        title: "Ordering flow mapped end-to-end in 32 screens",
        body: "The iOS app covers three surfaces: the menu (product discovery and customisation), the cart (order summary and modifiers), and the pickup status (real-time order tracking). I wireframed 32 screens with a focus on single-thumb operation — the app would be used primarily while standing in a café queue.",
        insight:
          "The 'origin story' for each bean (farm, altitude, process method) was given its own expandable card on the product detail page — turning a differentiator into a UI moment.",
        imgs: [
          "https://images.unsplash.com/photo-1696568720409-fd8d89eafa1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "04 / PROTOTYPE & TESTING",
        title: "Guerrilla testing at the roastery — 8 real customers",
        body: "I ran guerrilla usability sessions at Mira's roastery with 8 real customers over two Saturday mornings. The prototype covered the full ordering journey: browse → customise → pay → track. The menu hierarchy was revised after 5 of 8 participants couldn't find the seasonal filter.",
        imgs: [
          "https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "05 / FINAL DESIGN",
        title: "Warm, tactile, structured — in print and on screen",
        body: "The final brand uses an earthy olive/terracotta palette, kraft paper for retail packaging, and a custom serif wordmark. The iOS app carries the brand directly: warm off-white backgrounds, exposed-kraft texture cards, and a typographic hierarchy that reads comfortably in direct sunlight.",
        imgs: [
          "https://images.unsplash.com/photo-1758598305146-0adb6799dbae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
    ],
    impacts: [
      { value: "3×", label: "Increase in mobile pre-orders" },
      { value: "+140%", label: "Revenue growth in first quarter" },
      { value: "Shortlisted", label: "2024 Portuguese Design Award" },
    ],
    outcome: {
      metrics: [
        { label: "Mobile Orders", value: "3× growth" },
        { label: "Revenue Growth", value: "+140%" },
        { label: "Instagram Reach", value: "+800%" },
        { label: "Design Award", value: "Shortlisted" },
      ],
      summary:
        "Mira Coffee's rebrand generated a wave of organic social coverage — three posts went viral in the Lisbon food scene within days of launch. The iOS app drove a 3× increase in pre-orders. Shortlisted for the 2024 Portuguese Design Award in brand identity.",
    },
  },
];