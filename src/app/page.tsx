import Link from "next/link";

const projects = [
  {
    name: "1confirmation",
    role: "General Partner",
    period: "Current",
    description:
      "Venture fund backing founders building the decentralized internet. Investing in crypto networks and Web3 infrastructure.",
    url: "https://www.1confirmation.com",
  },
  {
    name: "PTC Crypto",
    role: "Founder",
    period: "2021 — Present",
    description:
      "Investing in the decentralized creator economy. Partnering with artists and creators at the intersection of crypto, NFTs, and culture.",
  },
  {
    name: "Fleek",
    role: "Co-Founder",
    period: "2018 — 2021",
    description:
      "Built tools to make it easy to build and integrate privacy, encryption, and peer-to-peer functionality into applications on the new internet.",
    url: "https://fleek.co",
  },
  {
    name: "Balanc3",
    role: "Co-Founder",
    period: "2016 — 2018",
    description:
      "Crypto financial management platform providing accounting, reporting, and reconciliation for digital assets.",
  },
  {
    name: "Fordham FinTech Network",
    role: "Founder",
    period: "2016",
    description:
      "Founded the university's first blockchain and fintech initiative, building a community around emerging financial technologies.",
  },
];

const socials = [
  {
    name: "Twitter",
    url: "https://twitter.com/BlockchainBrett",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/brettshear",
  },
  {
    name: "GitHub",
    url: "https://github.com/Blockchainbrett",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <header className="border-b border-green-light">
        <div className="max-w-3xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-semibold tracking-tight text-forest">
            Brett Shear
          </h1>
          <p className="mt-1 text-green-muted text-sm">
            GP at 1confirmation
          </p>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6">
          {/* About */}
          <section className="py-12 border-b border-green-light">
            <p className="text-foreground/80 leading-relaxed max-w-2xl">
              Investing in and building the decentralized internet. Focused on
              crypto networks, Web3 infrastructure, and the creator economy.
            </p>
          </section>

          {/* Projects */}
          <section className="py-12">
            <h2 className="text-sm font-medium uppercase tracking-widest text-olive mb-8">
              Projects
            </h2>
            <div className="space-y-10">
              {projects.map((project) => (
                <div key={project.name} className="group">
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-3">
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-forest hover:text-olive transition-colors"
                        >
                          {project.name}
                          <span className="text-sage ml-1">&#8599;</span>
                        </a>
                      ) : (
                        <h3 className="text-lg font-medium text-forest">
                          {project.name}
                        </h3>
                      )}
                      <span className="text-sm text-green-muted">
                        {project.role}
                      </span>
                    </div>
                    <span className="text-xs text-green-muted whitespace-nowrap">
                      {project.period}
                    </span>
                  </div>
                  <p className="mt-2 text-foreground/70 text-sm leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-light">
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
          <span className="text-xs text-green-muted">
            &copy; {new Date().getFullYear()} Brett Shear
          </span>
          <div className="flex gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-green-muted hover:text-forest transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
