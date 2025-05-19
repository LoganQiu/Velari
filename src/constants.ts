import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconDouban from "@/assets/icons/IconDouban.svg";
import { SITE } from "@/config";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/loganqiu",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "Douban",
    href: "https://www.douban.com/people/LoganQiu_1020/",
    linkTitle: ` ${SITE.title} on Douban`,
    icon: IconDouban,
  },
  {
    name: "X",
    href: "https://x.com/loganqiu1020",
    linkTitle: `${SITE.title} on X`,
    icon: IconBrandX,
  },
  {
    name: "Mail",
    href: "mailto:loganqiu1020@outlook.com",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
] as const;
