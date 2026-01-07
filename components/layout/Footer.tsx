import * as React from "react";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const navigation = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "License", href: "#" },
  ],
  social: [
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center space-x-2">
              <span className="sr-only">Modern Landing Page</span>
              <Logo />
            </a>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Building the future of digital experiences with modern tools and
              best practices.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Product
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Company
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold leading-6 text-foreground">
              Connect with us
            </h3>
            <div className="mt-6 flex gap-4">
              {navigation.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={item.name}
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-border pt-8">
          <p className="text-center text-xs leading-5 text-muted-foreground">
            &copy; {new Date().getFullYear()} Modern Landing Page. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
