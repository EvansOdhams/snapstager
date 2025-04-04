"use client";
import Link from "next/link";
import { FunctionComponent } from "react";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Pricing", href: "/support/pricing" },
        { label: "API", href: "/enterprise-api" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Privacy Policy", href: "/legal/privacy-policy" },
        { label: "Terms of Service", href: "/legal/terms-of-service" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "AI Tools",
      links: [
        { label: "Interior Rendering", href: "/service/interior" },
        { label: "Style Reference", href: "/service/style" },
        { label: "Image Editor", href: "/service/edit" },
        { label: "Multi-Angle Rendering", href: "/service/multiangle" },
      ],
    },
    {
      title: "Contact",
      links: [{ label: "Contact Us", href: "/contact" }],
    },
  ];

  return (
    <footer className="mt-auto bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-gray-900">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            {currentYear}© RoomeoAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
