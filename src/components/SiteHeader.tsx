import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writings" },
  { href: "/investments", label: "Investments" },
];

export function SiteHeader({ activePath }: { activePath: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-green-light bg-background/85 backdrop-blur">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-5 sm:py-8 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 group min-w-0">
          <Image
            src="/cryptopunk.png"
            alt="CryptoPunk avatar"
            width={56}
            height={56}
            className="rounded-md w-10 h-10 sm:w-14 sm:h-14 shrink-0"
          />
          <div>
            <h1 className="text-base sm:text-2xl font-semibold tracking-tight text-forest group-hover:text-olive transition-colors whitespace-nowrap">
              Brett Shear
            </h1>
            <p className="hidden sm:block mt-1 text-green-muted text-sm">
              GP at 1confirmation
            </p>
          </div>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex gap-5 shrink-0">
          {navLinks.map((link) => {
            const isActive = link.href === activePath;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-sm text-forest font-medium"
                    : "text-sm text-green-muted hover:text-forest transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        {/* Mobile hamburger */}
        <MobileNav links={navLinks} activePath={activePath} />
      </div>
    </header>
  );
}
