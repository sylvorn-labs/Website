import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/sylvorn.labs",
      icon: "/icons/social-instagram.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/sylvorn-labs",
      icon: "/icons/social-linkedin.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/sylvorn.labs",
      icon: "/icons/social-facebook.svg",
    },
  ];

  return (
    <footer className="relative w-full bg-transparent py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="flex flex-col items-center gap-8 md:hidden">
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-12">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-100"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={16}
                  height={16}
                  className="opacity-40"
                />
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-[72px] bg-white/20" />

          {/* Copyright & Links */}
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-sm leading-[18px] text-white/60 font-madetommy">
              © 2025 Sylvorn All Rights Reserved.
            </p>
            <Link
              href="/privacy"
              className="text-sm leading-[18px] text-white/60 transition-colors hover:text-white/80 font-madetommy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm leading-[18px] text-white/60 transition-colors hover:text-white/80 font-madetommy"
            >
              Terms of Service
            </Link>
          </div>

          {/* Contact */}
          <p className="text-center text-sm leading-[18px] text-white/60 font-madetommy">
            For queries, write to us at{" "}
            <Link
              href="mailto:hello@labs.sylvorn.com"
              className="text-white/60 transition-colors hover:text-white/80"
            >
              hello@labs.sylvorn.com
            </Link>
            .
          </p>

          {/* Designer Credit */}
          <p className="text-sm leading-[18px] text-white/60 font-madetommy">
            Designed By Ashara Hitanshu
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="mx-auto flex max-w-[1054px] items-start justify-between gap-8">
            {/* Left Column - Logo & Copyright */}
            <div className="flex flex-col gap-12">
              {/* Logo */}
              <Link href="/" className="transition-opacity hover:opacity-80">
                <Image
                  src="/logo/full-logo.svg"
                  alt="Sylvorn Labs"
                  width={132}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>

              {/* Copyright */}
              <p className="text-sm leading-[18px] text-white/60 font-madetommy">
                © 2025 Sylvorn All Rights Reserved.
              </p>
            </div>

            {/* Middle Column - Contact */}
            <div className="flex flex-col gap-12">
              <p className="max-w-[232px] text-sm leading-[18px] text-white/60 font-madetommy">
                For any questions or inquiries, feel free to reach out to us at
              </p>
              <Link
                href="mailto:hello@labs.sylvorn.com"
                className="text-sm leading-[18px] text-white transition-opacity hover:opacity-80 font-madetommy"
              >
                hello@labs.sylvorn.com
              </Link>
            </div>

            {/* Right Column - Social & Links */}
            <div className="flex flex-col gap-12">
              {/* Social Icons */}
              <div className="flex items-center gap-12">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-opacity hover:opacity-100"
                    aria-label={social.name}
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={16}
                      height={16}
                      className="opacity-40"
                    />
                  </Link>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-3">
                <Link
                  href="/privacy"
                  className="text-sm leading-[18px] text-white/60 transition-colors hover:text-white/80 font-madetommy"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm leading-[18px] text-white/60 transition-colors hover:text-white/80 font-madetommy"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
