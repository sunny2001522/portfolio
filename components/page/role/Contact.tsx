import { useTranslations, useLocale } from "next-intl";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconType } from "react-icons";

const iconComponents = {
  FaLinkedin,
  FaPhone,
  MdEmail,
  MdArticle,
};

type ContactItem = {
  label: string;
  href: string;
  icon: keyof typeof iconComponents; // ✅ 這裡改對
  value: string;
};

type ContactProps = {
  contact: ContactItem[];
  resume: { en: string; zh: string };
};

export default function Contact({ contact, resume }: ContactProps) {
  const t = useTranslations("Contact");
  const locale = useLocale();

  const resumeFileName = locale === "en" ? resume.en : resume.zh;
  const resumePath = `/${resumeFileName}`;

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 text-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contact.map((item) => {
          const Icon = iconComponents[item.icon];
          return (
            <a
              key={t(item.label)}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <Icon className="text-gray-700 text-2xl" />
              <div>
                <p className="text-gray-600">{item.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
