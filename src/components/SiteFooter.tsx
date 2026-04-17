const socials = [
  { name: "Twitter", url: "https://twitter.com/BlockchainBrett" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/brett-shear-8b553199/",
  },
  { name: "GitHub", url: "https://github.com/Blockchainbrett" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-green-light">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
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
  );
}
