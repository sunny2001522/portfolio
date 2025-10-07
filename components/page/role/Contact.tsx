import { useTranslations, useLocale } from "next-intl";
import { FaLinkedin, FaFileDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdArticle } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const iconComponents = {
  FaLinkedin: <FaLinkedin />,
  FaPhone: <FaPhone />,
  MdEmail: <MdEmail />,
  MdArticle: <MdArticle />,
};

type ContactProps = {
  contact: ContactItem[];
  resume: { en: string; zh: string };
};
type ContactItem = {
  label: string;
  href: string;
  icon: string[]; // icon 名稱 (對應 iconComponents 的 key)
  value: string; // 要顯示的文字內容
};

export default function Contact({ contact, resume }: ContactProps) {
  const t = useTranslations("Contact");
  const locale = useLocale();

  const resumeFileName = locale === "en" ? resume.en : resume.zh;
  const resumePath = `/${resumeFileName}`;

  return (
    <div className="w-full max-w-2xl mx-auto text-center p-8 text-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {contact.map((item) => (
          <a
            key={t(item.label)}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-shadow "
          >
            <div className=" text-gray-700">{iconComponents[item.icon]}</div>
            <div className="">
              <p className="text-gray-600">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-8">
        <Button
          asChild
          className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          <Link href={resumePath} download={resumeFileName}>
            <FaFileDownload className="mr-2" />
            {t("resume")}
          </Link>
        </Button>
      </div>
    </div>
  );
}
