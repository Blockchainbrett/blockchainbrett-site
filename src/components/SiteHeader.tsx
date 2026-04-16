import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/writing", label: "Writing" },
];

export function SiteHeader({ activePath }: { activePath: string }) {
  return (
    <header className="border-b border-green-light">
      <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src="/cryptopunk.png"
            alt="CryptoPunk avatar"
            width={56}
            height={56}
            className="rounded-md"
          />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-forest group-hover:text-olive transition-colors">
              Brett Shear
            </h1>
            <p className="mt-1 text-green-muted text-sm">
              GP at 1confirmation
            </p>
          </div>
        </Link>
        <nav className="flex gap-5">
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
      </div>
    </header>
  );
}
