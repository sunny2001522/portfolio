"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { MdArticle } from "react-icons/md";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const locale = useLocale();
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sonia-chen-dev",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/sunny2001522",
      label: "GitHub",
    },

    {
      icon: <MdArticle />,
      href: "https://ithelp.ithome.com.tw/users/20178506/articles",
      label: "IThome",
    },
  ];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between gap-3">
        <Link href={`/${locale}`}>
          {" "}
          <h2 className="text-2xl font-bold hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            Sonia
          </h2>
        </Link>
        <div className="flex flex-col items-start">
          <div className="flex space-x-6 ">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-2xl hover:text-gray-400 transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="flex items-center space-x-2 mb-2 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            <MdPhone />
            <a
              href="tel:0978649787"
              className="text-sm hover:text-gray-400 transition-colors"
            >
              0978649787
            </a>
          </div>
          <div className="flex items-center space-x-2 mb-2 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            <MdEmail />
            <a
              href="mailto:yishiuan522@gmail.com"
              className="text-sm hover:text-gray-400 transition-colors"
            >
              yishiuan522@gmail.com
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-400 mx-auto px-4">
        &copy; {new Date().getFullYear()} Sonia Chen. All Rights Reserved.
      </p>
    </footer>
  );
}
