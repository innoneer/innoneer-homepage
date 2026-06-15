const dictionaries = {
  "zh-HK": {
    a11y: {
      skip: "跳到主要內容",
      menu: "開啟選單"
    },
    nav: {
      about: "關於",
      services: "服務",
      talents: "藝人",
      projects: "實績",
      news: "消息",
      contact: "聯絡"
    },
    hero: {
      kicker: "虛擬藝人運營及製作",
      subtitle: "香港一站式虛擬藝人製作及運營平台。",
      primary: "旗下藝人",
      secondary: "服務內容",
      statement: "創造沉浸式互動體驗，讓虛擬世界與現實世界趨近零距離。"
    },
    about: {
      label: "ABOUT",
      title: "關於 innoneer",
      body1:
        "香港虛擬藝人製作及運營平台 innoneer 成立於 2023 年 2 月，目標是成為香港市場內具競爭力的虛擬藝人平台。",
      body2:
        "innoneer 致力投入並活用虛擬製作技術，讓虛擬藝人能在舞台上活靈活現；同時拓展 IP 營運，透過授權、品牌合作及商業化策略，提升虛擬藝人的市場影響力與商業價值。"
    },
    goals: [
      {
        no: "01",
        text: "探索虛擬與現實的無限可能性"
      },
      {
        no: "02",
        text: "締造新時代的娛樂互動體驗"
      },
      {
        no: "03",
        text: "打造虛擬主播、藝人垂直賽道"
      }
    ],
    services: {
      label: "SERVICES",
      title: "服務內容"
    },
    talents: {
      label: "TALENT",
      title: "旗下藝人"
    },
    projects: {
      label: "REFERENCES",
      title: "專案實績"
    },
    news: {
      label: "NEWS",
      title: "社群消息",
      more: "追蹤 Instagram"
    },
    contact: {
      label: "CONTACT",
      title: "一起打造下一個虛擬舞台。"
    },
    footer: {
      tagline: "創造多元體驗，直指業界先驅。"
    },
    marqueeTop: [
      "一站式虛擬藝人製作及運營平台",
      "Virtual Artist Management",
      "Hong Kong VTuber Production"
    ],
    marqueeMiddle: [
      "Offline Event",
      "Online Live Streaming Technical Support",
      "Merchandiser",
      "Broker Service",
      "Live 2D / 3D Character Design"
    ],
    serviceItems: [
      {
        title: "線下活動",
        body: "支援線下見面會、演唱會及聯名合作店鋪，透過視訊媒介、實時動作及聲音交互，讓虛擬藝人打破虛擬與現實的界限。"
      },
      {
        title: "線上直播技術支援",
        body: "採用 OBS、vMix 等直播串流軟件，提供直播串流、視訊、聲效及後端技術設置，呈現穩定而高品質的內容。"
      },
      {
        title: "周邊商品設計",
        body: "由設計師及美術人員負責角色原創衍生產品，提供設計、生產、物流與款式更新的一條龍服務。"
      },
      {
        title: "經紀管理",
        body: "拓展虛擬藝人 IP 營運，結合授權、品牌合作及商業化策略，推動藝人與市場接軌。"
      },
      {
        title: "Live 2D / 3D 形象設計",
        body: "從角色形象到直播應用，支援二維與三維虛擬形象設計，建立可延展的數碼娛樂產品。"
      }
    ],
    talentItems: [
      {
        name: "小林冰 Aisu",
        unit: "Ice Kingdom / V Singer",
        body:
          "為了尋找快樂能源而出道的冰之國 17 歲女子高中生。想和大家一起尋找更多快樂，偶然也會變成喜愛實驗的魔女，希望你們能在這裡找到快樂。",
        image: "assets/img/talent-aisu.jpg",
        alt: "小林冰 Aisu virtual artist visual",
        tone: "photo",
        links: [
          ["YouTube", "https://www.youtube.com/channel/UCnwgM2M3C4JOVdOZ0OLu_bA/"],
          ["Twitch", "https://www.twitch.tv/semplicelabs"],
          ["Instagram", "https://www.instagram.com/semplicelabs"],
          ["X", "https://twitter.com/semplicelabs"]
        ]
      },
      {
        name: "卡羅路斯 Karolus",
        unit: "RP型恐龍男爵 Vtuber",
        body:
          "粵語、國語及英語活動。簡稱卡路 Karlo，擁有食肉牛龍基因的改造人，也是繪師、Live2D 模型師及 Spine 動畫師；內容以遊戲、繪圖、動畫及 TRPG 為主。",
        image: "assets/img/talent-karolus.png",
        alt: "Karolus virtual talent character model",
        tone: "transparent",
        links: [
          ["YouTube", "https://www.youtube.com/channel/UCGUEjJpbqkaXlJQYyiceZyw/"],
          ["X", "https://twitter.com/semplicelabs"],
          ["Vimeo", "https://vimeo.com/semplicelabs"]
        ]
      }
    ],
    projectItems: [
      {
        category: "Offline Event",
        title: "HKSP 01",
        body: "虛擬藝人舞台及跨角色演出支援。",
        image: "assets/img/project-hksp.png",
        alt: "HKSP 01 virtual artist projection stage"
      },
      {
        category: "Online Live",
        title: "小林冰 3D 生日紀念 Live 2024",
        body: "實時 3D 線上直播、分鏡畫面及串流技術支援。",
        image: "assets/img/project-3d-live.png",
        alt: "Kobayashi Aisu 3D birthday live scene"
      },
      {
        category: "Merchandise",
        title: "周邊商品展示",
        body: "角色衍生產品、展會陳列與銷售支援。",
        image: "assets/img/project-merch.png",
        alt: "Aisu merchandise booth display"
      },
      {
        category: "Collaboration",
        title: "深圳漫畫節",
        body: "線下活動及展會互動場景。",
        image: "assets/img/project-shenzhen.jpeg",
        alt: "Shenzhen comic festival collaboration display"
      },
      {
        category: "Exhibition",
        title: "香港鬼滅之刃全集中展",
        body: "展覽合作與虛擬藝人現場互動。",
        image: "assets/img/project-demon-slayer.png",
        alt: "Demon Slayer Hong Kong exhibition with virtual artist"
      },
      {
        category: "Goods",
        title: "小林冰生日紀念香港 SET 2024",
        body: "紀念商品套裝視覺及展示內容。",
        image: "assets/img/project-birthday-set.png",
        alt: "Aisu birthday merchandise set"
      }
    ],
    newsItems: [
      {
        tag: "Party2Gather",
        title: "Hololive English 官方香港聯乘活動完滿結束",
        body:
          "innoneer 受邀負責活動技術支援，提供視訊、聲音及 LED 屏幕出租服務，為現場觀眾帶來更好的觀賞體驗。"
      },
      {
        tag: "Announcement",
        title: "製作服務成為公司核心",
        body:
          "innoneer 將持續聚焦於製作服務，並期待在虛擬藝人及跨媒體內容上帶來更多突破。"
      },
      {
        tag: "Community",
        title: "跟蹤我們的 Instagram 以獲得最新資訊",
        body:
          "社群消息、合作活動、商品補貨及直播資訊將於官方社群平台持續更新。"
      }
    ]
  },
  "zh-CN": {
    a11y: {
      skip: "跳到主要内容",
      menu: "开启菜单"
    },
    nav: {
      about: "关于",
      services: "服务",
      talents: "艺人",
      projects: "实绩",
      news: "消息",
      contact: "联系"
    },
    hero: {
      kicker: "虚拟艺人运营及制作",
      subtitle: "香港一站式虚拟艺人制作及运营平台。",
      primary: "旗下艺人",
      secondary: "服务内容",
      statement: "创造沉浸式互动体验，让虚拟世界与现实世界趋近零距离。"
    },
    about: {
      label: "ABOUT",
      title: "关于 innoneer",
      body1:
        "香港虚拟艺人制作及运营平台 innoneer 成立于 2023 年 2 月，目标是成为香港市场内具竞争力的虚拟艺人平台。",
      body2:
        "innoneer 致力投入并活用虚拟制作技术，让虚拟艺人能在舞台上活灵活现；同时拓展 IP 运营，通过授权、品牌合作及商业化策略，提升虚拟艺人的市场影响力与商业价值。"
    },
    goals: [
      {
        no: "01",
        text: "探索虚拟与现实的无限可能性"
      },
      {
        no: "02",
        text: "缔造新时代的娱乐互动体验"
      },
      {
        no: "03",
        text: "打造虚拟主播、艺人垂直赛道"
      }
    ],
    services: {
      label: "SERVICES",
      title: "服务内容"
    },
    talents: {
      label: "TALENT",
      title: "旗下艺人"
    },
    projects: {
      label: "REFERENCES",
      title: "项目实绩"
    },
    news: {
      label: "NEWS",
      title: "社群消息",
      more: "关注 Instagram"
    },
    contact: {
      label: "CONTACT",
      title: "一起打造下一个虚拟舞台。"
    },
    footer: {
      tagline: "创造多元体验，直指业界先驱。"
    },
    marqueeTop: [
      "一站式虚拟艺人制作及运营平台",
      "Virtual Artist Management",
      "Hong Kong VTuber Production"
    ],
    marqueeMiddle: [
      "Offline Event",
      "Online Live Streaming Technical Support",
      "Merchandiser",
      "Broker Service",
      "Live 2D / 3D Character Design"
    ],
    serviceItems: [
      {
        title: "线下活动",
        body: "支持线下见面会、演唱会及联名合作店铺，通过视频媒介、实时动作及声音交互，让虚拟艺人打破虚拟与现实的界限。"
      },
      {
        title: "线上直播技术支持",
        body: "采用 OBS、vMix 等直播串流软件，提供直播串流、视频、声效及后端技术设置，呈现稳定而高品质的内容。"
      },
      {
        title: "周边商品设计",
        body: "由设计师及美术人员负责角色原创衍生产品，提供设计、生产、物流与款式更新的一站式服务。"
      },
      {
        title: "经纪管理",
        body: "拓展虚拟艺人 IP 运营，结合授权、品牌合作及商业化策略，推动艺人与市场接轨。"
      },
      {
        title: "Live 2D / 3D 形象设计",
        body: "从角色形象到直播应用，支持二维与三维虚拟形象设计，建立可延展的数字娱乐产品。"
      }
    ],
    talentItems: [
      {
        name: "小林冰 Aisu",
        unit: "Ice Kingdom / V Singer",
        body:
          "为了寻找快乐能源而出道的冰之国 17 岁女子高中生。想和大家一起寻找更多快乐，偶尔也会变成喜爱实验的魔女，希望你们能在这里找到快乐。",
        image: "assets/img/talent-aisu.jpg",
        alt: "小林冰 Aisu virtual artist visual",
        tone: "photo",
        links: [
          ["YouTube", "https://www.youtube.com/channel/UCnwgM2M3C4JOVdOZ0OLu_bA/"],
          ["Twitch", "https://www.twitch.tv/semplicelabs"],
          ["Instagram", "https://www.instagram.com/semplicelabs"],
          ["X", "https://twitter.com/semplicelabs"]
        ]
      },
      {
        name: "卡罗路斯 Karolus",
        unit: "RP 型恐龙男爵 Vtuber",
        body:
          "粤语、国语及英语活动。简称卡路 Karlo，拥有食肉牛龙基因的改造人，也是画师、Live2D 模型师及 Spine 动画师；内容以游戏、绘图、动画及 TRPG 为主。",
        image: "assets/img/talent-karolus.png",
        alt: "Karolus virtual talent character model",
        tone: "transparent",
        links: [
          ["YouTube", "https://www.youtube.com/channel/UCGUEjJpbqkaXlJQYyiceZyw/"],
          ["X", "https://twitter.com/semplicelabs"],
          ["Vimeo", "https://vimeo.com/semplicelabs"]
        ]
      }
    ],
    projectItems: [
      {
        category: "Offline Event",
        title: "HKSP 01",
        body: "虚拟艺人舞台及跨角色演出支持。",
        image: "assets/img/project-hksp.png",
        alt: "HKSP 01 virtual artist projection stage"
      },
      {
        category: "Online Live",
        title: "小林冰 3D 生日纪念 Live 2024",
        body: "实时 3D 线上直播、分镜画面及串流技术支持。",
        image: "assets/img/project-3d-live.png",
        alt: "Kobayashi Aisu 3D birthday live scene"
      },
      {
        category: "Merchandise",
        title: "周边商品展示",
        body: "角色衍生产品、展会陈列与销售支持。",
        image: "assets/img/project-merch.png",
        alt: "Aisu merchandise booth display"
      },
      {
        category: "Collaboration",
        title: "深圳漫画节",
        body: "线下活动及展会互动场景。",
        image: "assets/img/project-shenzhen.jpeg",
        alt: "Shenzhen comic festival collaboration display"
      },
      {
        category: "Exhibition",
        title: "香港鬼灭之刃全集中展",
        body: "展览合作与虚拟艺人现场互动。",
        image: "assets/img/project-demon-slayer.png",
        alt: "Demon Slayer Hong Kong exhibition with virtual artist"
      },
      {
        category: "Goods",
        title: "小林冰生日纪念香港 SET 2024",
        body: "纪念商品套装视觉及展示内容。",
        image: "assets/img/project-birthday-set.png",
        alt: "Aisu birthday merchandise set"
      }
    ],
    newsItems: [
      {
        tag: "Party2Gather",
        title: "Hololive English 官方香港联乘活动圆满结束",
        body:
          "innoneer 受邀负责活动技术支持，提供视频、声音及 LED 屏幕租赁服务，为现场观众带来更好的观赏体验。"
      },
      {
        tag: "Announcement",
        title: "制作服务成为公司核心",
        body:
          "innoneer 将持续聚焦于制作服务，并期待在虚拟艺人及跨媒体内容上带来更多突破。"
      },
      {
        tag: "Community",
        title: "关注我们的 Instagram 获取最新资讯",
        body:
          "社群消息、合作活动、商品补货及直播资讯将于官方社群平台持续更新。"
      }
    ]
  },
  en: {
    a11y: {
      skip: "Skip to content",
      menu: "Open menu"
    },
    nav: {
      about: "About",
      services: "Services",
      talents: "Talent",
      projects: "Works",
      news: "News",
      contact: "Contact"
    },
    hero: {
      kicker: "Virtual Artist Management and Production",
      subtitle: "A one-stop virtual artist production and operation platform in Hong Kong.",
      primary: "Meet the talents",
      secondary: "Explore services",
      statement: "Creating immersive interaction where virtual worlds and reality move closer together."
    },
    about: {
      label: "ABOUT",
      title: "About innoneer",
      body1:
        "innoneer is a Hong Kong virtual artist production and operation platform founded in February 2023, built to become a competitive virtual artist platform in the local market.",
      body2:
        "The team invests in virtual production technology to bring virtual artists vividly onto the stage, while expanding IP operations through licensing, brand collaborations, and commercialization strategies."
    },
    goals: [
      {
        no: "01",
        text: "Explore the unlimited possibilities between virtual and real"
      },
      {
        no: "02",
        text: "Create a new era of entertainment interaction"
      },
      {
        no: "03",
        text: "Build dedicated tracks for virtual streamers and artists"
      }
    ],
    services: {
      label: "SERVICES",
      title: "Our services"
    },
    talents: {
      label: "TALENT",
      title: "Featured talents"
    },
    projects: {
      label: "REFERENCES",
      title: "Project references"
    },
    news: {
      label: "NEWS",
      title: "Community updates",
      more: "Follow Instagram"
    },
    contact: {
      label: "CONTACT",
      title: "Build the next virtual stage."
    },
    footer: {
      tagline: "Create diverse experiences. Lead the industry forward."
    },
    marqueeTop: [
      "One-stop virtual artist production and operation platform",
      "Virtual Artist Management",
      "Hong Kong VTuber Production"
    ],
    marqueeMiddle: [
      "Offline Event",
      "Online Live Streaming Technical Support",
      "Merchandiser",
      "Broker Service",
      "Live 2D / 3D Character Design"
    ],
    serviceItems: [
      {
        title: "Offline events",
        body:
          "Support for meet-and-greets, concerts, and collaboration pop-ups, using video, motion, and voice interaction to connect virtual artists with real-world audiences."
      },
      {
        title: "Online live streaming support",
        body:
          "OBS, vMix, streaming, video, audio, and backend technical setup for stable, polished live content across platforms."
      },
      {
        title: "Merchandise design",
        body:
          "End-to-end original character merchandise support, from art direction and production to logistics channels and regular product refreshes."
      },
      {
        title: "Broker service",
        body:
          "Virtual artist IP operation through licensing, brand collaborations, and commercialization strategies that connect talent with the market."
      },
      {
        title: "Live 2D / 3D character design",
        body:
          "Character visuals and production-ready virtual identities for streaming, entertainment, brand endorsement, and digital IP development."
      }
    ],
    talentItems: [
      {
        name: "Kobayashi Aisu",
        unit: "Ice Kingdom / V Singer",
        body:
          "A 17-year-old high school girl from the Ice Kingdom who debuted to find happy energy. She wants to discover more joy with everyone, sometimes becoming a witch who loves experiments.",
        image: "assets/img/talent-aisu.jpg",
        alt: "Kobayashi Aisu virtual artist visual",
        tone: "photo",
        links: [
          ["YouTube", "https://www.youtube.com/channel/UCnwgM2M3C4JOVdOZ0OLu_bA/"],
          ["Twitch", "https://www.twitch.tv/semplicelabs"],
          ["Instagram", "https://www.instagram.com/semplicelabs"],
          ["X", "https://twitter.com/semplicelabs"]
        ]
      },
      {
        name: "Karolus",
        unit: "Role-play dinosaur baron VTuber",
        body:
          "A Cantonese, Mandarin, and English VTuber also known as Karlo: a modified human with Carnotaurus genes, illustrator, Live2D modeler, and Spine animator focused on games, drawing, animation, and TRPG content.",
        image: "assets/img/talent-karolus.png",
        alt: "Karolus virtual talent character model",
        tone: "transparent",
        links: [
          ["YouTube", "https://www.youtube.com/channel/UCGUEjJpbqkaXlJQYyiceZyw/"],
          ["X", "https://twitter.com/semplicelabs"],
          ["Vimeo", "https://vimeo.com/semplicelabs"]
        ]
      }
    ],
    projectItems: [
      {
        category: "Offline Event",
        title: "HKSP 01",
        body: "Stage and cross-character performance support for virtual artists.",
        image: "assets/img/project-hksp.png",
        alt: "HKSP 01 virtual artist projection stage"
      },
      {
        category: "Online Live",
        title: "Kobayashi Aisu 3D Birthday Live 2024",
        body: "Real-time 3D online live production, camera direction, and streaming support.",
        image: "assets/img/project-3d-live.png",
        alt: "Kobayashi Aisu 3D birthday live scene"
      },
      {
        category: "Merchandise",
        title: "Merchandise examples",
        body: "Character merchandise, booth display, and sales support.",
        image: "assets/img/project-merch.png",
        alt: "Aisu merchandise booth display"
      },
      {
        category: "Collaboration",
        title: "Shenzhen Comic Festival",
        body: "Offline event and exhibition interaction scenes.",
        image: "assets/img/project-shenzhen.jpeg",
        alt: "Shenzhen comic festival collaboration display"
      },
      {
        category: "Exhibition",
        title: "Demon Slayer Hong Kong Exhibition",
        body: "Exhibition collaboration and virtual artist on-site interaction.",
        image: "assets/img/project-demon-slayer.png",
        alt: "Demon Slayer Hong Kong exhibition with virtual artist"
      },
      {
        category: "Goods",
        title: "Aisu Birthday Hong Kong Set 2024",
        body: "Visual presentation for a commemorative goods set.",
        image: "assets/img/project-birthday-set.png",
        alt: "Aisu birthday merchandise set"
      }
    ],
    newsItems: [
      {
        tag: "Party2Gather",
        title: "Hololive English official Hong Kong collaboration wrapped successfully",
        body:
          "innoneer provided technical support for the event, including video, audio, and LED wall rental services for a stronger live audience experience."
      },
      {
        tag: "Announcement",
        title: "Production service is the company’s core focus",
        body:
          "innoneer will continue focusing on production services and aims to bring more breakthroughs in virtual artist and cross-media content."
      },
      {
        tag: "Community",
        title: "Follow Instagram for the latest updates",
        body:
          "Community news, collaborations, merchandise restocks, and live-stream updates continue on the official social channels."
      }
    ]
  }
};

const state = {
  lang: localStorage.getItem("innoneer-lang") || "zh-HK",
  observer: null
};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function getText(path) {
  return path.split(".").reduce((obj, key) => obj?.[key], dictionaries[state.lang]) ?? "";
}

function setStaticText() {
  qsa("[data-i18n]").forEach((node) => {
    node.textContent = getText(node.dataset.i18n);
  });
}

function makeElement(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderGoals() {
  const container = qs("[data-goals]");
  container.replaceChildren(
    ...dictionaries[state.lang].goals.map((goal) => {
      const item = makeElement("article", "goal-item reveal");
      item.append(makeElement("strong", "", goal.no), makeElement("p", "", goal.text));
      return item;
    })
  );
}

function renderServices() {
  const container = qs("[data-services]");
  container.replaceChildren(
    ...dictionaries[state.lang].serviceItems.map((service, index) => {
      const card = makeElement("article", "service-card reveal");
      card.append(
        makeElement("span", "service-number", String(index + 1).padStart(2, "0")),
        makeElement("h3", "", service.title),
        makeElement("p", "", service.body)
      );
      return card;
    })
  );
}

function renderTalents() {
  const container = qs("[data-talents]");
  container.replaceChildren(
    ...dictionaries[state.lang].talentItems.map((talent) => {
      const card = makeElement("article", "talent-card reveal");
      card.dataset.tone = talent.tone;

      const visual = makeElement("figure", "talent-visual");
      const img = new Image();
      img.src = talent.image;
      img.alt = talent.alt;
      img.loading = "lazy";
      visual.append(img);

      const copy = makeElement("div", "talent-copy");
      copy.append(
        makeElement("span", "talent-unit", talent.unit),
        makeElement("h3", "", talent.name),
        makeElement("p", "", talent.body)
      );

      const links = makeElement("div", "talent-links");
      talent.links.forEach(([label, href]) => {
        const link = makeElement("a", "", label);
        link.href = href;
        link.target = "_blank";
        link.rel = "noreferrer";
        links.append(link);
      });
      copy.append(links);

      card.append(visual, copy);
      return card;
    })
  );
}

function renderProjects() {
  const container = qs("[data-projects]");
  container.replaceChildren(
    ...dictionaries[state.lang].projectItems.map((project) => {
      const card = makeElement("article", "project-card reveal");
      const figure = makeElement("figure");
      const img = new Image();
      img.src = project.image;
      img.alt = project.alt;
      img.loading = "lazy";
      figure.append(img);

      const copy = makeElement("div");
      copy.append(
        makeElement("span", "project-tag", project.category),
        makeElement("h3", "", project.title),
        makeElement("p", "", project.body)
      );
      card.append(figure, copy);
      return card;
    })
  );
}

function renderNews() {
  const container = qs("[data-news]");
  container.replaceChildren(
    ...dictionaries[state.lang].newsItems.map((item) => {
      const card = makeElement("article", "news-card reveal");
      card.append(
        makeElement("span", "news-tag", item.tag),
        makeElement("h3", "", item.title),
        makeElement("p", "", item.body)
      );
      return card;
    })
  );
}

function renderMarquee(selector, items) {
  const container = qs(selector);
  const repeated = [...items, ...items, ...items, ...items];
  container.replaceChildren(
    ...repeated.map((item) => {
      const span = makeElement("span", "", item);
      return span;
    })
  );
}

function setLanguage(lang) {
  state.lang = dictionaries[lang] ? lang : "zh-HK";
  localStorage.setItem("innoneer-lang", state.lang);
  document.documentElement.lang = state.lang;

  qsa("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === state.lang);
  });

  setStaticText();
  renderGoals();
  renderServices();
  renderTalents();
  renderProjects();
  renderNews();
  renderMarquee('[data-marquee="top"]', dictionaries[state.lang].marqueeTop);
  renderMarquee('[data-marquee="middle"]', dictionaries[state.lang].marqueeMiddle);
  observeReveals();
}

function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    qsa(".reveal").forEach((node) => node.classList.add("is-visible"));
    return;
  }

  if (!state.observer) {
    state.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            state.observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
  }

  qsa(".reveal:not(.is-visible)").forEach((node) => state.observer.observe(node));
}

function setupNavigation() {
  const toggle = qs("[data-menu-toggle]");
  const nav = qs("[data-nav]");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  qsa("a", nav).forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener(
    "scroll",
    () => {
      qs("[data-header]").classList.toggle("is-scrolled", window.scrollY > 12);
    },
    { passive: true }
  );
}

function setupLanguageButtons() {
  qsa("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

setupNavigation();
setupLanguageButtons();
setLanguage(state.lang);
