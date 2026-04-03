import Image from "next/image";

const experience = [
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
        <div className="max-w-3xl mx-auto px-6 py-8 flex items-center gap-4">
          <Image
            src="/cryptopunk.png"
            alt="CryptoPunk avatar"
            width={56}
            height={56}
            className="rounded-md"
          />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-forest">
              Brett Shear
            </h1>
            <p className="mt-1 text-green-muted text-sm">
              GP at 1confirmation
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6">
          {/* About */}
          <section className="py-12 border-b border-green-light">
            <p className="text-foreground/80 leading-relaxed max-w-2xl">
              Investor, Collector, and Builder. Crypto native. Building products
              since 2016. Collecting NFTs since 2018. Venture investing since
              2021.
            </p>
          </section>

          {/* Experience */}
          <section className="py-12">
            <h2 className="text-sm font-medium uppercase tracking-widest text-olive mb-8">
              Experience
            </h2>
            <div className="space-y-10">
              {experience.map((item) => (
                <div key={item.name} className="group flex gap-4">
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={`${item.name} logo`}
                      width={36}
                      height={36}
                      className="rounded-md mt-1 object-contain shrink-0"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-md bg-green-light shrink-0 mt-1" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="flex items-baseline gap-3">
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-forest hover:text-olive transition-colors"
                          >
                            {item.name}
                            <span className="text-sage ml-1">&#8599;</span>
                          </a>
                        ) : (
                          <h3 className="text-lg font-medium text-forest">
                            {item.name}
                          </h3>
                        )}
                        <span className="text-sm text-green-muted">
                          {item.role}
                        </span>
                      </div>
                      <span className="text-xs text-green-muted whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-foreground/70 text-sm leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
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
