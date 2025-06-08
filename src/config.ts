export const SITE = {
  website: "https://zeratulqiu.me/", // replace this with your deployed domain
  author: "Chenke Qiu",
  profile: "https://zeratulqiu.me/",
  desc: "这里是 Chenke Qiu 的博客，从生活到代码，他什么都往里扔，他喜欢做白日梦。\nThis is Chenke Qiu's blog. He throws everything into it, from life to code, and he likes to daydream.",
  title: "<0x7C00>",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/loganqiu/velari/edit/main/",
  },
  dynamicOgImage: true,
  lang: "zh-CN", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
