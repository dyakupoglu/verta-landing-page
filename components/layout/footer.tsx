import Link from "next/link";
// import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Mission", href: "#mission" },
  ],
  support: [
    { label: "FAQ", href: "#faqs" },
    { label: "Contact Us", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
} as const;

// const CONTACT_INFO = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "vertaalimited@gmail.com",
//     href: "mailto:vertaalimited@gmail.com",
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+49 (0) 123 456789",
//     href: "tel:+49123456789",
//   },
//   {
//     icon: MapPin,
//     label: "Address",
//     value: "Berlin, Germany",
//     href: "#",
//   },
// ] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t bg-muted/30">
      <div className="container mx-auto max-w-6xl px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-customText">Verta Limited</h3>
            </div>
            <div className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your trusted partner for fully compliant and transparent lottery memberships in
              Germany.
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-customText uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-customHover transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-customText uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-customHover transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          {/* <div className="space-y-4">
            <h4 className="text-sm font-semibold text-customText uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              {CONTACT_INFO.map((contact) => (
                <li key={contact.label}>
                  <Link
                    href={contact.href}
                    className="flex items-start gap-2 text-sm text-muted-foreground hover:text-customHover transition-colors group"
                  >
                    <contact.icon className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-customHover" />
                    <span>{contact.value}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Verta Limited. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-customHover transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
