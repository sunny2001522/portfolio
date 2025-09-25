import { getTranslations } from "next-intl/server";
import { FaLinkedin } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default async function Header() {
  const t = await getTranslations("HomePage");

  return (
    <div className="flex  gap-6 py-3 mx-auto">
      <MdMarkEmailUnread className="text-3xl" />
      <FaLinkedin className="text-3xl" />
      <FaGithub className="text-3xl" />
    </div>
  );
}
