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
  confidential?: boolean;
  confidentialNote?: string;
}

export const projects: Project[] = [
  {
    slug: "ldar",
    tag: "CONFIDENTIAL PROJECT · DESKTOP UX/UI",
    title: "Lenovo Diagnostics for ARM",
    shortTitle: "Lenovo Diagnostics",
    desc: "A proprietary hardware diagnostics application that ships with Lenovo devices.",
    img: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    bg: "#dfe7f5",
    accentColor: "#4a6fa5",
    role: "Lead UX/UI Designer — end-to-end product UX, interface design, and design system decisions",
    tools: ["Figma", "Jira", "Confluence", "AMP"],
    deliverables: ["Redesigned design system", "Visual identity", "Constant QoL UX improvements", "Accessibility support"],
    confidential: true,
    confidentialNote:
      "This case study includes confidential product work. The project remains in the portfolio for context, but detailed process, constraints, and outcomes are intentionally obscured.",
    outcome: {
      metrics: [
        { label: "Task Completion Rate", value: "94%" },
        { label: "Transfer Time Reduced", value: "−71%" },
        { label: "User Satisfaction", value: "4.8 / 5" },
        { label: "Components Shipped", value: "64" },
      ],
      summary:
        "Lumen Pay launched in beta with 2,400 waitlisted freelancers. The guaranteed-amount mechanic became the product's defining feature and is now central to all marketing. The design system reduced future feature delivery time by an estimated 40%.",
    },
  },
  {
    slug: "folio-daily",
    tag: "EDITORIAL UX/UI · MOBILE APP",
    title: "Folio Daily",
    shortTitle: "Folio Daily",
    desc: "A reading experience shaped through typography, interface pacing, and focused mobile interaction design.",
    img: "https://images.unsplash.com/photo-1669850850090-54237ab4a4a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    bg: "#ecdcc8",
    accentColor: "#8b6a3e",
    role: "UX/UI Designer — product interface, reading experience, and visual direction",
    team: "Team of 3: founder/PM, 1 iOS engineer, 1 Android engineer (I owned all design)",
    timeline: "10 weeks",
    tools: ["Figma", "Principle", "Typetura", "Notion"],
    deliverables: ["iOS App", "Android App", "Typography System", "Content Guidelines"],
    challenge:
      "Long-form reading is in decline — not because people don't want to read, but because apps are designed to interrupt, monetise attention, and optimise for clicks. Folio Daily set out to be the opposite: an app that slows you down, removes friction, and makes you feel the same quiet focus you get from a physical book.",
    challengeQuote:
      "\"Every app I try pushes me towards shorter content. I just want something that trusts me to read a 4,000-word essay.\"",
    constraints: [
      "Pre-seed budget — no marketing spend, growth had to come from craft",
      "Variable font rendering inconsistent across older Android devices",
      "Content licensing limited to 40 publishers at launch",
      "10 weeks from kickoff to TestFlight build",
    ],
    hypothesis:
      "If we treat typography and silence as the core product (not a polish layer), readers will associate Folio with the calm of physical reading — and retention will outperform notification-driven competitors.",
    rejectedDirections: [
      {
        title: "Algorithmic 'For You' feed",
        reason: "Conflicted with the anti-distraction thesis. Replaced with a small, human-curated daily list.",
      },
      {
        title: "Social highlights & comments",
        reason: "Tested with beta group — 9 of 12 said it would 'turn this into another app I leave'. Cut entirely.",
      },
      {
        title: "Audio narration as primary mode",
        reason: "Compelling but doubled engineering scope. Parked for v2 instead of compromising the reading experience.",
      },
    ],
    process: [
      {
        phase: "01 / DISCOVERY",
        title: "340 readers surveyed. One dominant theme: distraction.",
        body: "I surveyed 340 self-identified avid readers and conducted 12 in-depth interviews. 78% said existing reading apps interrupted their experience with notifications, ads, or aggressive recommendations. I mapped three reader archetypes — the Deep Diver, the Commuter, and the Weekend Reader — each with distinct environment, lighting, and session-length needs that the design would need to serve simultaneously.",
        insight: "Key finding: users who read in bed (41%) overwhelmingly preferred warm, dim interfaces but couldn't find apps that remembered their preference between sessions.",
        imgs: [
          "https://images.unsplash.com/photo-1565687950692-520fa91191d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1576153192281-d558108925bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "duo",
      },
      {
        phase: "02 / CONCEPT SKETCHES",
        title: "Borrowing from print — with intention",
        body: "I filled three A3 sketchbooks exploring typographic hierarchy borrowed from physical publishing: drop caps, pull quotes, section ornaments, and generous leading. Three reading modes were sketched — Minimal (text only), Ambient (subtle background texture), and Focus (full-screen with all chrome hidden). I also explored three typeface pairings before settling on a variable serif for body and a geometric sans for UI.",
        imgs: [
          "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "03 / WIREFRAMES",
        title: "Designing the library, reader, and discovery feed",
        body: "Three primary surfaces were wireframed: the Library (personal collection), the Reader (core reading experience), and the Discovery Feed (human-curated, not algorithmic). The Reader posed the most challenge — balancing reading controls with invisibility. A swipe-up-from-bottom gesture replaced all visible navigation, surfacing settings only on deliberate interaction. A typeface selection tool was added late based on beta feedback.",
        insight: "The progress indicator was moved from top to bottom after testing revealed users glanced down mid-sentence when it appeared at the top, breaking their flow.",
        imgs: [
          "https://images.unsplash.com/photo-1526050071463-2c476b162a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "04 / PROTOTYPE & USABILITY TESTING",
        title: "In-context testing at a coffee shop — 11 participants",
        body: "Rather than a lab, I ran all usability sessions in a café to replicate realistic distraction levels. 11 participants completed four tasks: find a saved article, adjust typeface, share a highlight, and set a reading reminder. The scrollbar positioning was cited as critical for one-handed use by 8 of 11 participants — I moved it from right-edge to a thin inline indicator. Quiet Mode (disabling all notifications during a session) was the single most-requested feature, and was built into v1.",
        imgs: [
          "https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "05 / FINAL DESIGN",
        title: "Typography-first, chrome-last",
        body: "The final design uses a variable serif (Fraunces) for body copy that shifts weight and optical size based on ambient light detection. Line length is capped at 66 characters — the documented sweet spot for adult reading. The Quiet Mode activates a full-screen focus state, silences all OS notifications, and dims the interface to 40% — returnable with a long press. Bookmarks, highlights, and reading time are all surfaced without ever leaving the reading view.",
        imgs: [
          "https://images.unsplash.com/photo-1758598305146-0adb6799dbae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
    ],
    outcome: {
      metrics: [
        { label: "Avg. Session Length", value: "+41%" },
        { label: "30-Day Retention", value: "89%" },
        { label: "App Store Rating", value: "4.7 / 5" },
        { label: "Articles Read / User", value: "3.2×" },
      ],
      summary:
        "Folio Daily launched to 18,000 downloads in its first week, driven almost entirely by word-of-mouth. The typography-first approach was cited in over 200 App Store reviews. It was featured by Apple as 'App of the Day' in 14 countries.",
    },
  },
  {
    slug: "north-dashboard",
    tag: "B2B SAAS · DASHBOARD SYSTEMS",
    title: "North Dashboard",
    shortTitle: "North",
    desc: "A B2B dashboard redesign focused on information architecture, reusable components, and scalable UX for distributed teams.",
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
      "\"We have 40 shades of the same grey across 200 screens. Nobody knows which one is correct anymore.\"",
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
        body: "I spent two weeks embedded with six distributed teams across three time zones. Each day I shadowed a power-user session, documenting every click, every context switch, and every moment of friction. A component audit of the existing product revealed 87 unique button variants, 40+ grey values, and no shared spacing scale. The audit became the north star for what the system needed to solve.",
        insight: "Shadow finding: the average power-user performed 200+ redundant navigation clicks per day — primarily because similar actions lived in different places across modules.",
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
        phase: "03 / WIREFRAMES & TOKEN ARCHITECTURE",
        title: "Component inventory first. Screens second.",
        body: "I inverted the typical workflow — instead of designing screens and extracting components, I built the component inventory first, then composed screens from it. The token architecture uses three tiers: primitive (raw values), semantic (role-based), and component (scoped overrides). This structure supports light/dark, three density modes, and white-label theming from a single source of truth.",
        insight: "Defining the spacing scale first (a 4px base grid with named steps) eliminated 90% of alignment arguments before any screens were designed.",
        imgs: [
          "https://images.unsplash.com/photo-1676285437303-744ef82a0263?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "04 / PROTOTYPE & USABILITY TESTING",
        title: "12 power-users. Navigation IA rebuilt twice.",
        body: "Moderated sessions with 12 enterprise power-users revealed that the primary navigation model — a left-rail with icon-only collapsed state — failed for users managing more than 8 modules. I designed and tested two alternative IA patterns (horizontal top nav and a grouped accordion) before landing on a hybrid: persistent top-level tabs with a contextual side rail that appears per-module. Navigation IA was rebuilt twice in three weeks.",
        imgs: [
          "https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "05 / FINAL DESIGN",
        title: "200 components. Three density modes. Full keyboard nav.",
        body: "The shipped system includes 200 components across 8 categories, documented in Storybook and Zeroheight. Every component supports light and dark themes, three density modes (compact, default, comfortable), and full keyboard navigation to WCAG AA standard. The token library exports directly to CSS variables, Tailwind config, and iOS/Android native tokens — enabling consistent theming across all surfaces from a single Figma edit.",
        imgs: [
          "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
    ],
    outcome: {
      metrics: [
        { label: "Daily Clicks Reduced", value: "−73%" },
        { label: "Delivery Time", value: "11 wks" },
        { label: "Teams Onboarded", value: "800+" },
        { label: "Components Shipped", value: "200" },
      ],
      summary:
        "North shipped the redesigned dashboard to its full user base within 3 months of the system's completion. Engineer sprint velocity increased by 38% in the quarter following adoption. The design system was recognised with an honourable mention at the 2024 Awwwards.",
    },
  },
  {
    slug: "mira-coffee",
    tag: "BRAND + UX/UI · COMMERCE",
    title: "Mira Coffee",
    shortTitle: "Mira Coffee",
    desc: "A brand and ordering experience combining product storytelling, mobile UI, and a lightweight commerce flow.",
    img: "https://images.unsplash.com/photo-1633533447057-56ccf997f4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    bg: "#e8c9b8",
    accentColor: "#7a4f3a",
    role: "UX/UI Designer — brand system, ordering flow, and interface design",
    team: "Team of 4: 2 founders (client), 1 contract iOS dev, me (design + research)",
    timeline: "8 weeks",
    tools: ["Figma", "Illustrator", "Procreate", "Useberry"],
    deliverables: ["Brand Identity", "Packaging System", "iOS Ordering App", "Print Collateral"],
    challenge:
      "Mira Coffee is a single-origin roastery in Lisbon run by two founders who source directly from farms in Ethiopia and Colombia. Their coffee is exceptional — but their identity was a stock logo and a Squarespace site. They needed a brand that would sit confidently next to specialty roasters in Tokyo and London, while remaining human enough to feel local. And a mobile ordering app that could handle in-store and pre-order.",
    challengeQuote:
      "\"Our beans are the best we've ever tasted, but people keep walking past. We need to look as good as we taste.\"",
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
        title: "Algorithmic 'recommended for you' menu",
        reason: "Felt off-brand for a roastery built on origin storytelling. Replaced with editorial-style origin cards.",
      },
    ],
    process: [
      {
        phase: "01 / DISCOVERY",
        title: "12 competitors analysed. 3 focus groups. One clear opportunity.",
        body: "I analysed 12 specialty coffee brands for visual language, packaging material, and digital presence. Three focus groups with Lisbon-based coffee enthusiasts identified a gap: most local roasters were either minimalist-sterile (looks cold) or maximalist-rustic (looks cheap). The opportunity was warm precision — craft with confidence. I also mapped the ordering journey end-to-end at three competitor cafés to find friction points.",
        insight: "Focus group insight: participants associated kraft paper packaging with quality, but only when paired with a considered, structured typographic system — not handwritten labels.",
        imgs: [
          "https://images.unsplash.com/photo-1565687950692-520fa91191d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          "https://images.unsplash.com/photo-1576153192281-d558108925bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "duo",
      },
      {
        phase: "02 / CONCEPT SKETCHES",
        title: "30+ hand-lettered logo explorations narrowed to three",
        body: "I opened with 30+ hand-drawn logo explorations in Procreate over a week — exploring wordmarks, monograms, and illustrated marks. Three directions emerged: a geometric 'M' monogram, a botanical illustration mark, and a typographic wordmark set in a custom serif. The founders immediately responded to the wordmark direction — it felt authoritative without being cold. I developed it across three scales (icon, wordmark, full lockup) before moving to digital refinement.",
        imgs: [
          "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "03 / WIREFRAMES",
        title: "Ordering flow mapped end-to-end in 32 screens",
        body: "The iOS app covers three surfaces: the menu (product discovery and customisation), the cart (order summary and modifiers), and the pickup status (real-time order tracking). I wireframed 32 screens with a focus on single-thumb operation — the app would be used primarily while standing in a café queue. Menu hierarchy was a key challenge: offering single-origin varietals, espresso-based drinks, and seasonal specials without overwhelming a first-time visitor.",
        insight: "Wireframe decision: the 'origin story' for each bean (farm, altitude, process method) was given its own expandable card on the product detail page — turning a differentiator into a UI moment.",
        imgs: [
          "https://images.unsplash.com/photo-1696568720409-fd8d89eafa1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "04 / PROTOTYPE & USABILITY TESTING",
        title: "Guerrilla testing at the roastery — 8 real customers",
        body: "I ran guerrilla usability sessions at Mira's roastery with 8 real customers over two Saturday mornings. The prototype covered the full ordering journey: browse → customise → pay → track. The menu hierarchy was revised after 5 of 8 participants couldn't find the seasonal filter. The 'bean details' expandable section received universally positive feedback — three participants said it was the reason they'd upgrade from the standard espresso.",
        imgs: [
          "https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
      {
        phase: "05 / FINAL DESIGN",
        title: "Warm, tactile, structured — in print and on screen",
        body: "The final brand uses an earthy olive/terracotta palette, kraft paper for retail packaging, and a custom serif wordmark. The iOS app carries the brand directly: warm off-white backgrounds, exposed-kraft texture cards, and a typographic hierarchy that reads comfortably in direct sunlight. The full system covers bags (250g, 500g, 1kg), takeaway cups, tote bags, a printed menu, and a business card with the origin story on the reverse.",
        imgs: [
          "https://images.unsplash.com/photo-1758598305146-0adb6799dbae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        imgLayout: "wide",
      },
    ],
    outcome: {
      metrics: [
        { label: "Mobile Orders", value: "3× growth" },
        { label: "Revenue Growth", value: "+140%" },
        { label: "Instagram Reach", value: "+800%" },
        { label: "Design Award", value: "Shortlisted" },
      ],
      summary:
        "Mira Coffee's rebrand generated a wave of organic social coverage — three posts went viral in the Lisbon food scene within days of launch. The iOS app drove a 3× increase in pre-orders, and the packaging redesign became a focal point for wholesale buyers. Shortlisted for the 2024 Portuguese Design Award in brand identity.",
    },
  },
];