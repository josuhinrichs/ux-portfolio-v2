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
    shortTitle: "Lenovo Diagnostics for ARM",
    desc: "Desktop diagnostics application shipped with Lenovo Arm laptops, supporting 100,000+ monthly users in technical troubleshooting scenarios.",
    fullDesc:
      "Led UX/UI strategy for a complex diagnostics product used across multiple hardware environments\nRedesigned diagnostic workflows, improving usability and reducing cognitive load in technical scenarios\nImproved accessibility compliance by 60% through audits and targeted redesign initiatives\nDeveloped and governed a scalable Design System in Figma (variables, libraries, component architecture), accelerating development iterations by 20% \\Collaborated with engineers and stakeholders in Agile environments to align product and technical constraints",
    // "Development and governance of a scalable Design System using advanced Figma features (variables, libraries, component architecture), accelerating iteration and ensuring cross-team consistency.\nAdaptation of desktop interfaces to touchscreen contexts, enhancing interaction reliability across hardware environments.\nCoordination and leadership of a UX/UI team, defining experience goals per release cycle and aligning design decisions with engineering and business stakeholders in Agile environments.",
    img: "./src/app/imgs/CoverLDAR.png",
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
    img: "./src/app/imgs/CoverLD.png",
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
  // {
  //   slug: "totuga",
  //   tag: "KIDS FINTECH · MOBILE APP",
  //   title: "Totuga",
  //   shortTitle: "Totuga",
  //   desc: "A gamified financial literacy app for children — teaching money habits through a digital wallet, savings goals, chores, and an adventure world with a turtle companion.",
  //   fullDesc:
  //     "Totuga is a gamified financial literacy app for children — teaching money habits through a digital wallet, savings goals, chores, and an adventure world with a turtle companion. It aims to give children a real sense of ownership over money — through a digital wallet they control, savings goals they set, tasks they choose, and an adventure world that rewards real-world financial behaviour.",
  //   img: "https://images.unsplash.com/photo-1758521541779-7558e273cdf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMG1vYmlsZSUyMGFwcCUyMGdyZWVuJTIwcGxheWZ1bCUyMGludGVyZmFjZXxlbnwxfHx8fDE3Nzc4MjA0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  //   bg: "#c8ecd2",
  //   accentColor: "#2d8a50",
  //   role: "UX/UI Designer — end-to-end product design, mascot direction, and design system",
  //   team: "Team of 4: 1 PM, 1 iOS engineer, 1 backend engineer, me (all design)",
  //   timeline: "14 weeks",
  //   tools: ["Figma", "Illustrator", "Principle", "Maze"],
  //   deliverables: [
  //     "iOS App",
  //     "Android App",
  //     "Design System",
  //     "Mascot & Illustration Guidelines",
  //   ],
  //   challenge:
  //     "Most financial literacy tools for children are either boring (spreadsheet-style trackers) or too abstract (they teach concepts without real money mechanics). Totuga set out to give children a real sense of ownership over money — through a digital wallet they control, savings goals they set, tasks they choose, and an adventure world that rewards real-world financial behaviour.",
  //   challengeQuote:
  //     '"My daughter understands pocket money in theory, but has no idea what saving actually feels like. I want her to feel the difference."',
  //   constraints: [
  //     "Dual audience: the app had to work for children (ages 7–12) and be trusted by parents — two very different mental models",
  //     "Strict COPPA/LGPD compliance — no personal data collection from minors without explicit parental consent",
  //     "Gamification had to reinforce real saving behaviour, not replace it with hollow rewards",
  //     "14-week deadline tied to an accelerator demo day",
  //   ],
  //   hypothesis:
  //     "If we give children genuine agency over a real (parent-loaded) balance — combined with visible progress toward goals they chose — the intrinsic motivation to save will outperform any points-based reward system.",
  //   rejectedDirections: [
  //     {
  //       title: "Points-only economy (no real money)",
  //       reason:
  //         "Children quickly recognised fake currencies as meaningless. Real balance amounts, even small ones, created significantly more engagement in prototype testing.",
  //     },
  //     {
  //       title: "Parent-controlled reward gating",
  //       reason:
  //         "Parents approved it; children didn't. When kids had no agency over timing or amounts, they lost interest within two sessions. Replaced with a parent-approval flow that still centred the child.",
  //     },
  //     {
  //       title: "Realistic financial UI (no mascot)",
  //       reason:
  //         "A clean, adult-style wallet interface tested well with parents and terribly with children. The turtle companion became the emotional anchor that made the financial concepts feel safe and approachable.",
  //     },
  //   ],
  //   process: [
  //     {
  //       phase: "01 / DISCOVERY",
  //       title: "28 families. One consistent gap: saving feels invisible.",
  //       body: "I interviewed 28 families — parents and children separately — across two weeks. Children could recite the definition of saving but had no felt experience of it. Parents wanted financial education but worried apps would gamify money in unhealthy ways. I ran co-design sessions with children aged 7–12 using paper prototypes and card sorting to understand which financial concepts felt real vs. abstract to them.",
  //       insight:
  //         "Key finding: children who had a physical piggy bank at home had a significantly stronger intuition about delayed gratification than those who didn't. The digital experience needed to replicate that tangibility.",
  //       imgs: [
  //         "https://images.unsplash.com/photo-1565687950692-520fa91191d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //         "https://images.unsplash.com/photo-1576153192281-d558108925bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //       ],
  //       imgLayout: "duo",
  //     },
  //     {
  //       phase: "02 / CONCEPT & MASCOT",
  //       title: "The turtle wasn't decoration — it was the product.",
  //       body: "Early concepts treated the turtle mascot as a UI flourish. Testing showed the opposite: children narrated their financial decisions through the turtle ('Totuga wants to save for the item shop'). I redefined the mascot as the emotional core of the product and worked with an illustrator to develop a full expression library — 24 states covering encouragement, celebration, waiting, and disappointment — each tied to specific financial events.",
  //       imgs: [
  //         "https://images.unsplash.com/photo-1576153192396-180ecef2a715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //       ],
  //       imgLayout: "wide",
  //     },
  //     {
  //       phase: "03 / INFORMATION ARCHITECTURE",
  //       title: "Seven features. One mental model: earn, save, spend.",
  //       body: "The app's seven surfaces (wallet, piggy bank, direct payment, tasks, adventure, customisation, item shop) were originally designed as separate tabs. Testing showed children ignored anything beyond the first two. I restructured the IA around a single loop — earn (tasks) → save (piggy bank) → spend (item shop / customisation) — with the wallet and adventure world as persistent status layers rather than destinations. Navigation dropped from 7 tabs to 3.",
  //       insight:
  //         "Children navigated by asking 'where is my turtle?' — not by feature name. The avatar's position in the UI became the primary wayfinding cue, replacing labelled navigation in the final design.",
  //       imgs: [
  //         "https://images.unsplash.com/photo-1526050071463-2c476b162a4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //       ],
  //       imgLayout: "wide",
  //     },
  //     {
  //       phase: "04 / PROTOTYPE & TESTING",
  //       title: "In-home testing with 14 children — parents watching.",
  //       body: "I ran moderated usability sessions in participants' homes, with parents present but silent. Children completed five tasks: check balance, set a savings goal, mark a chore done, buy an item, and customise their turtle. The dual-audience dynamic was critical — I documented both the child's experience and the parent's comfort level in real time. The parent approval flow was redesigned three times before both groups felt satisfied.",
  //       imgs: [
  //         "https://images.unsplash.com/photo-1748801583967-3038967d7279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //       ],
  //       imgLayout: "wide",
  //     },
  //     {
  //       phase: "05 / FINAL DESIGN",
  //       title: "Bright, tactile, and honest about money.",
  //       body: "The final design uses a saturated green palette anchored by Totuga's shell colour, with high-contrast type sized for 7-year-old readers. Every balance is shown in real currency (R$) — never points or coins — reinforcing genuine financial understanding. The adventure world map expands as children hit savings milestones, creating a spatial metaphor for financial progress that children described as 'my turtle growing up'.",
  //       imgs: [
  //         "https://images.unsplash.com/photo-1758598305146-0adb6799dbae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  //       ],
  //       imgLayout: "wide",
  //     },
  //   ],
  //   impacts: [
  //     { value: "78%", label: "Savings goal completion rate" },
  //     { value: "4.9/5", label: "Parent satisfaction score" },
  //   ],
  //   outcome: {
  //     metrics: [
  //       { label: "Avg. Savings Goal Met", value: "78%" },
  //       { label: "Weekly Active Kids", value: "+3.4×" },
  //       { label: "Parent Satisfaction", value: "4.9 / 5" },
  //       { label: "Task Completion Rate", value: "91%" },
  //     ],
  //     summary:
  //       "Totuga launched in closed beta with 600 families and reached a 78% savings goal completion rate — compared to an industry benchmark of under 30% for gamified savings tools. Parent retention at 90 days was 84%. The project was presented at a fintech accelerator demo day and received pre-seed interest from two Brazilian edtech funds.",
  //   },
  // },
  {
    slug: "ceara-government-portal",
    tag: "GOVERNMENT PLATFORM · DIGITAL SERVICES",
    title: "Government of Ceará Digital Platform",
    shortTitle: "ce.gov.br",
    desc: "Redesign of Ceará’s official digital services platform focused on accessibility, navigation efficiency, and citizen-centered experiences.",
    fullDesc:
      "Ceará Digital is the official Government of Ceará digital services platform, serving millions of citizens across institutional content and public services. The redesign focused on improving usability, accessibility, information architecture, and service discoverability while establishing a scalable Design System for future government products.",
    img: "./src/app/imgs/cegov-logo.png",
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
        imgs: ["./src/app/imgs/cegov-research.png"],
        imgLayout: "wide",
      },
      {
        phase: "02 / INFORMATION ARCHITECTURE",
        title: "Simplifying navigation and restructuring services",
        body: "The information architecture was reorganized to prioritize public services and simplify navigation flows. The team redesigned the main menu, highlighted essential services and news content, and introduced a life-event navigation model grouping services around citizen profiles and real-world scenarios.",
        insight:
          "Life-event navigation improved discoverability and reduced friction when accessing public services.",
        imgs: ["./src/app/imgs/cegov-flow.png"],
        imgLayout: "wide",
      },
      {
        phase: "03 / VISUAL DESIGN & PROTOTYPING",
        title: "Accessible interfaces and responsive experiences",
        body: "The visual redesign focused on readability, accessibility, and interaction clarity. Colors were softened, contrast levels adjusted, and spacing improved to reduce cognitive overload and create a more welcoming interface. High-fidelity responsive prototypes were created across the platform.",
        insight:
          "Accessibility improvements benefited not only users with impairments, but also elderly and low-literacy users.",
        imgs: ["./src/app/imgs/cegov-ui.png"],
        imgLayout: "wide",
      },
      {
        phase: "04 / DESIGN SYSTEM & HANDOFF",
        title: "Scalable UI foundations for government products",
        body: "The project culminated in the development of a scalable Government of Ceará Design System, supporting consistency across institutional platforms and future digital services. Documentation and iterative handoff cycles were conducted alongside development teams.",
        imgs: ["./src/app/imgs/cegov-designsystem.png"],
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
        { value: "+20%", label: "Average engagement target" },
        { value: "+30%", label: "Recurring users target" },
        { value: "+1", label: "Engaged sessions per active user" },
        { value: "+20%", label: "Average engagement time target" },
        { value: "-10%", label: "Bounce rate target" },
      ],
      summary:
        "The redesigned Ceará Digital platform introduced a more intuitive, accessible, and citizen-centered experience for public digital services. Through improvements in information architecture, accessibility, navigation flows, and scalable UI foundations, the project helped modernize the government’s digital ecosystem and simplify access to essential services.",
    },
  },
  {
    slug: "maplink-viewer",
    tag: "B2B PLATFORM · API VISUALIZATION",
    title: "Maplink Viewer",
    shortTitle: "Maplink",
    desc: "A technical platform designed to demonstrate geolocation APIs through interactive simulations, usability-focused workflows, and developer-oriented experiences.",
    fullDesc:
      "Maplink Viewer is a B2B platform created to demonstrate the practical capabilities of Maplink’s geolocation APIs through interactive simulations and real-world scenarios. The project focused on technical usability, API visualization, workflow clarity, and developer-oriented UX for enterprise clients and sales teams.",
    img: "./src/app/imgs/maplink-logo.png",
    bg: "#120D26",
    accentColor: "#6C50D8",
    role: "UX/UI Designer — user flows, interface design, usability testing, and technical UX",
    team: "Collaborative product and development environment using Agile methodologies",
    timeline: "Professional UX/UI case study",
    tools: [
      "Figma",
      "UX Research",
      "Usability Testing",
      "Heuristic Evaluation",
      "Wireframing",
      "Design Systems",
    ],
    deliverables: [
      "High-Fidelity Interfaces",
      "Technical User Flows",
      "Usability Testing",
      "Style Guide",
      "Interactive Prototypes",
      "API Visualization Experience",
    ],
    challenge:
      "Maplink needed a way to demonstrate its APIs in a more tangible and interactive way for enterprise customers. Potential clients struggled to visualize how the APIs would behave in real-world scenarios related to logistics, routing, toll calculation, and geolocation services.",
    challengeQuote:
      '"How can we allow potential customers to see the APIs working in practice for their own use cases?"',
    constraints: [
      "Interfaces needed to support highly technical users and specialists",
      "The experience prioritized functionality over simplification for beginners",
      "API requests and generated JSON outputs needed to remain accessible for real execution environments",
      "The platform had to simulate real-world use cases from enterprise clients",
    ],
    hypothesis:
      "Providing interactive simulations, visual request flows, and real API outputs would help enterprise customers better understand the product’s practical value and reduce friction during technical evaluations.",
    rejectedDirections: [
      {
        title: "Simplified low-technical interface",
        reason:
          "The primary audience consisted of technical specialists who required detailed controls and direct API visibility.",
      },
      {
        title: "Static product demonstrations",
        reason:
          "Static examples failed to communicate how APIs would behave in real execution scenarios.",
      },
      {
        title: "Abstract conceptual flows",
        reason:
          "Enterprise users needed direct interaction with requests, responses, and generated JSON structures.",
      },
    ],
    process: [
      {
        phase: "01 / DISCOVERY & RESEARCH",
        title: "Understanding technical users and API workflows",
        body:
          "The project started with interviews, competitive analysis, user journey mapping, and technical workflow evaluation. Research focused on understanding how enterprise users, specialists, and sales teams interacted with API-based products and demonstrations.",
        insight:
          "Users needed to see real API behavior in practical scenarios rather than abstract product explanations.",
        // imgs: ["YOUR_IMAGE_HERE"],
        // imgLayout: "wide",
      },
      {
        phase: "02 / IDEATION & FLOW DESIGN",
        title: "Designing technical yet intuitive interaction flows",
        body:
          "Wireframes and interaction flows were developed to support complex API operations while maintaining clarity and usability. The platform simulated practical use cases involving routing, toll calculation, geolocation, and logistics scenarios for enterprise clients.",
        insight:
          "Technical users valued transparency and direct access to generated JSON requests.",
        // imgs: ["YOUR_IMAGE_HERE"],
        // imgLayout: "wide",
      },
      {
        phase: "03 / VISUAL DESIGN & STYLE GUIDE",
        title: "Building a scalable and developer-oriented interface system",
        body:
          "The interface system combined technical clarity with a modern visual structure. Light and dark themes, typography hierarchy, color systems, alerts, and interaction states were documented to support consistency across the platform.",
        insight:
          "Visual hierarchy and structured spacing significantly improved readability in technical workflows.",
        imgs: ["./src/app/imgs/maplink-ui.png"],
        imgLayout: "wide",
      },
      {
        phase: "04 / PROTOTYPING & USABILITY TESTING",
        title: "Testing API interactions and technical usability",
        body:
          "High-fidelity prototypes were tested through usability sessions involving realistic API tasks and request-generation scenarios. Thinking-aloud sessions, heuristic evaluations, and System Usability Scale (SUS) testing helped validate interaction clarity and technical workflows.",
        insight:
          "The ability to generate and copy real JSON requests increased perceived usefulness and trust among technical users.",
        // imgs: ["YOUR_IMAGE_HERE"],
        // imgLayout: "wide",
      },
    ],
    impacts: [
      { value: "85+", label: "System Usability Scale (SUS)" },
      { value: "Enterprise", label: "Technical user focus" },
      { value: "Interactive", label: "API visualization experience" },
    ],
    outcome: {
      metrics: [
        { label: "SUS Score", value: "85+" },
        { label: "By Main Users", value: "Solution Validated" },
        { label: "Core Experience", value: "Interactive APIs" },
        { label: "Goal Achieved", value: "Geolocation & Routing APIs" },
      ],
      summary:
        "The Maplink Viewer transformed API demonstrations into interactive and practical experiences for enterprise users. Through technical UX improvements, usability testing, and realistic API workflows, the platform helped make complex geolocation services more tangible, understandable, and actionable for potential customers.",
    },
  },
];
