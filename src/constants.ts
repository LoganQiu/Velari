import IconMail from "@/assets/icons/IconMail.svg";
import Bangumi from "@/assets/icons/Bangumi.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconDouban from "@/assets/icons/IconDouban.svg";
import IconBilibili from "@/assets/icons/IconBilibili.svg";
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
    name: "Bangumi",
    href: "https://bgm.tv/user/797972",
    linkTitle: ` ${SITE.title} on Bangumi`,
    icon: Bangumi,
  },
  {
    name: "Bilibili",
    href: "https://space.bilibili.com/439983453/",
    linkTitle: ` ${SITE.title} on Bilibili`,
    icon: IconBilibili,
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
