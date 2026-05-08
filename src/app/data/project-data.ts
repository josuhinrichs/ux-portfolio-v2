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
  title?: string;
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
    fullDesc:
      "Led UX/UI strategy for a complex diagnostics product used across multiple hardware environments\nRedesigned diagnostic workflows, improving usability and reducing cognitive load in technical scenarios\nImproved accessibility compliance by 60% through audits and targeted redesign initiatives\nDeveloped and governed a scalable Design System in Figma (variables, libraries, component architecture), accelerating development iterations by 20% \\Collaborated with engineers and stakeholders in Agile environments to align product and technical constraints",
    // "Development and governance of a scalable Design System using advanced Figma features (variables, libraries, component architecture), accelerating iteration and ensuring cross-team consistency.\nAdaptation of desktop interfaces to touchscreen contexts, enhancing interaction reliability across hardware environments.\nCoordination and leadership of a UX/UI team, defining experience goals per release cycle and aligning design decisions with engineering and business stakeholders in Agile environments.",
    img: "src/app/imgs/CoverLDAR.png",
    bg: "#dfe7f5",
    accentColor: "#4a6fa5",
    role: "Product Designer leading UX/UI strategy, design systems, and workflow redesign.",
    tools: ["Figma", "FigJam", "Jira", "Confluence", "AMP", "UX Research"],
    timeline: "Confidential",
    deliverables: [
      "Redesigned design system",
      "Visual identity",
      "QoL UX improvements",
      "Accessibility",
    ],
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
    shortTitle: "Lenovo Diagnostics Project (NDA)",
    desc: "Confidential initiative focused on adapting a desktop diagnostics experience to new interaction models, devices, and user profiles.",
    fullDesc:
      "Adapted desktop interfaces to touchscreen environments, improving interaction reliability across devices.\nLed a major interface overhaul targeting a new user demographic, redefining interaction patterns and UI structure.\nDeveloped and scaled a Visual Identity and a Design System to ensure consistency across evolving product requirements.",
    // "Folio Daily is a reading experience shaped through typography, interface pacing, and focused mobile interaction design. It aims to provide a calm and immersive reading environment, free from distractions and interruptions.",
    img: "src/app/imgs/CoverLD.png",
    bg: "#ecdcc8",
    accentColor: "#8b6a3e",
    role: "Product Designer responsible for interface strategy, system scalability, and interaction redesign.",
    timeline: "Confidential",
    tools: ["Figma", "FigJam", "Jira", "Confluence", "AMP", "UX Research"],
    impacts: [
      { value: "", label: "Improved usability across touch-enabled devices" },
      { value: "", label: "Enabled product expansion to new user segments" },
      {
        value: "",
        label: "Increased consistency and scalability across the interface",
      },
    ],
    outcome: {
      metrics: [
        { label: "Improved usability across touch-enabled devices", value: "" },
        { label: "Enabled product expansion to new user segments", value: "" },
        {
          label: "Increased consistency and scalability across the interface",
          value: "",
        },
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
    deliverables: [
      "iOS App",
      "Android App",
      "Design System",
      "Mascot & Illustration Guidelines",
    ],
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
        reason:
          "Children quickly recognised fake currencies as meaningless. Real balance amounts, even small ones, created significantly more engagement in prototype testing.",
      },
      {
        title: "Parent-controlled reward gating",
        reason:
          "Parents approved it; children didn't. When kids had no agency over timing or amounts, they lost interest within two sessions. Replaced with a parent-approval flow that still centred the child.",
      },
      {
        title: "Realistic financial UI (no mascot)",
        reason:
          "A clean, adult-style wallet interface tested well with parents and terribly with children. The turtle companion became the emotional anchor that made the financial concepts feel safe and approachable.",
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
    slug: "ceara-government-portal",
    tag: "GOVERNMENT PLATFORM · DIGITAL SERVICES",
    title: "Government of Ceará Digital Platform",
    shortTitle: "Ceará Digital",
    desc: "Redesign of Ceará’s official digital services platform focused on accessibility, navigation efficiency, and citizen-centered experiences.",
    fullDesc:
      "Ceará Digital is the official Government of Ceará digital services platform, serving millions of citizens across institutional content and public services. The redesign focused on improving usability, accessibility, information architecture, and service discoverability while establishing a scalable Design System for future government products.",
    img: "YOUR_IMAGE_HERE",
    bg: "#0d3b66",
    accentColor: "#4da3ff",
    role: "UX Designer — information architecture, accessibility, interface redesign, prototyping, and design system contribution",
    team: "IRIS Lab multidisciplinary team working alongside government stakeholders and developers",
    timeline: "Research, redesign, and iterative development cycle",
    tools: [
      "Figma",
      "UX Research",
      "Prototyping",
      "Information Architecture",
      "Design Systems",
    ],
    deliverables: [
      "Portal Redesign",
      "Government Design System",
      "User Flows",
      "Responsive Interfaces",
      "UI Components",
      "Documentation",
    ],
    challenge:
      "The existing government platform presented fragmented navigation, low service discoverability, accessibility limitations, and an institutional structure disconnected from how citizens actually search for services. The redesign aimed to simplify access to public services and create a more intuitive experience for all users — including elderly citizens with low digital literacy.",
    challengeQuote:
      '"The goal was simple: even grandmothers should be able to access services faster."',
    constraints: [
      "Large-scale government ecosystem serving millions of citizens",
      "Accessibility and usability standards required across all interfaces",
      "Needed to preserve alignment with official government branding",
      "Complex service structure involving multiple departments and user profiles",
      "Responsive experience required across desktop and mobile devices",
    ],
    hypothesis:
      "Reorganizing services around user needs and life contexts instead of institutional structures would improve discoverability, navigation efficiency, and accessibility for a broader range of citizens.",
    rejectedDirections: [
      {
        title: "Institution-centered navigation",
        reason:
          "Users struggled to understand government organizational structures and service ownership.",
      },
      {
        title: "Dense visual layout",
        reason:
          "The previous interface created cognitive overload and reduced readability for non-technical users.",
      },
      {
        title: "Complex multi-level navigation",
        reason:
          "Deep menu hierarchies increased friction and made essential services harder to discover.",
      },
    ],
    process: [
      {
        phase: "01 / RESEARCH & IDEATION",
        title: "Desk research, benchmarking, and citizen-centered discovery",
        body: "The redesign process started with desk research, benchmarking, brainstorming sessions, and analysis of the previous platform. Navigation patterns, service discoverability issues, and accessibility barriers were mapped to better understand citizen behavior and pain points.",
        insight:
          "Users searched for services based on real-life situations rather than government organizational structures.",
        imgs: ["YOUR_IMAGE_HERE"],
        imgLayout: "wide",
      },
      {
        phase: "02 / INFORMATION ARCHITECTURE",
        title: "Simplifying navigation and restructuring services",
        body: "The information architecture was reorganized to prioritize public services and simplify navigation flows. The team redesigned the main menu, highlighted essential services and news content, and introduced a life-event navigation model grouping services around citizen profiles and real-world scenarios.",
        insight:
          "Life-event navigation improved discoverability and reduced friction when accessing public services.",
        imgs: ["YOUR_IMAGE_HERE"],
        imgLayout: "wide",
      },
      {
        phase: "03 / VISUAL DESIGN & PROTOTYPING",
        title: "Accessible interfaces and responsive experiences",
        body: "The visual redesign focused on readability, accessibility, and interaction clarity. Colors were softened, contrast levels adjusted, and spacing improved to reduce cognitive overload and create a more welcoming interface. High-fidelity responsive prototypes were created across the platform.",
        insight:
          "Accessibility improvements benefited not only users with impairments, but also elderly and low-literacy users.",
        imgs: ["YOUR_IMAGE_HERE"],
        imgLayout: "wide",
      },
      {
        phase: "04 / DESIGN SYSTEM & HANDOFF",
        title: "Scalable UI foundations for government products",
        body: "The project culminated in the development of a scalable Government of Ceará Design System, supporting consistency across institutional platforms and future digital services. Documentation and iterative handoff cycles were conducted alongside development teams.",
        imgs: ["YOUR_IMAGE_HERE"],
        imgLayout: "wide",
      },
    ],
    impacts: [
      { value: "Millions", label: "Citizens supported" },
      { value: "Improved", label: "Service discoverability" },
      { value: "Accessible", label: "Navigation experience" },
    ],
    outcome: {
      title: "Expected Outcome",
      metrics: [
        { value: "+30%", label: "Average engagement target" },
        { value: "+40%", label: "Recurring users target" },
        { value: "+1", label: "Engaged sessions per active user" },
        { value: "+30%", label: "Average engagement time target" },
        { value: "-10%", label: "Bounce rate target" },
      ],
      summary:
        "The redesigned Ceará Digital platform introduced a more intuitive, accessible, and citizen-centered experience for public digital services. Through improvements in information architecture, accessibility, navigation flows, and scalable UI foundations, the project helped modernize the government’s digital ecosystem and simplify access to essential services.",
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
    deliverables: [
      "Brand Identity",
      "Packaging System",
      "iOS Ordering App",
      "Print Collateral",
    ],
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
        reason:
          "Beautiful but indistinguishable from 4 other Lisbon roasters in the audit. Too generic.",
      },
      {
        title: "Geometric 'M' monogram",
        reason:
          "Confident but too cold — founders wanted warmth without being rustic. Cut after first review.",
      },
      {
        title: "Algorithmic recommended menu",
        reason:
          "Felt off-brand for a roastery built on origin storytelling. Replaced with editorial-style origin cards.",
      },
    ],
    process: [
      {
        phase: "01 / DISCOVERY",
        title:
          "12 competitors analysed. 3 focus groups. One clear opportunity.",
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
