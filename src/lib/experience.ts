export type ExperienceItem = {
  name: string;
  role: string;
  period: string;
  description: string;
  url?: string;
  logo?: string;
};

export const experience: ExperienceItem[] = [
  {
    name: "1confirmation",
    role: "General Partner",
    period: "2025 — Present",
    description:
      "One of the earliest crypto venture funds investing in bleeding edge crypto products.",
    url: "https://www.1confirmation.com",
    logo: "/logos/1confirmation.png",
  },
  {
    name: "PTC Crypto",
    role: "Co-Founder & Managing Partner",
    period: "2021 — Present",
    description:
      "Crypto native fund investing at the intersection of consumer crypto and culture.",
    url: "https://ptccrypto.xyz",
    logo: "/logos/PTC.jpeg",
  },
  {
    name: "Fleek",
    role: "Co-Founder",
    period: "2018 — 2021",
    description:
      "Developer platform for Web3 developers to build on decentralized technologies like IPFS and Fleek Network.",
    url: "https://fleek.co",
    logo: "/logos/Fleek.jpeg",
  },
  {
    name: "Balanc3 (ConsenSys)",
    role: "Co-Founder",
    period: "2016 — 2018",
    description:
      "Crypto financial management platform providing accounting, reporting, and reconciliation for digital assets.",
    logo: "/logos/ConsenSys.jpeg",
  },
  {
    name: "Fordham FinTech Network",
    role: "Founder",
    period: "2016",
    description:
      "Founded the university's first blockchain and fintech initiative, building a community around emerging financial technologies.",
    logo: "/logos/Fordham.jpeg",
  },
];
