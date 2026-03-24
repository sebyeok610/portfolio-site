const RETURN_PATH_KEY = "portfolio:returnPath";
const RETURN_SCROLL_KEY = "portfolio:returnScroll";
const THUMB_BASE_PATH = "assets/images/thumbs";
const DETAIL_BASE_PATH = "assets/images/details";
const COMMON_BASE_PATH = "assets/images/common";

// 프로젝트 데이터는 리스트 페이지와 상세 페이지에서 함께 사용합니다.
const projects = [
  {
    slug: "formed",
    title: "Formed : 기록된 사유들" ,
    meta: "구미문화재단",
    year: "2025",
    summary: "구미문화재단 (포스터, 배너, 리플렛)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
   }, 
   {
    slug: "awaken",
    title: "AWAKEN" ,
    meta: "루지움",
    year: "2025",
    summary: "루지움 (포스터, 배너)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
   }, 
  {
    slug: "luzium",
    title: "LUZIUM & ARTISTS" ,
    meta: "루지움",
    year: "2025",
    summary: "루지움 (엽서, 리플렛)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/luzium.jpg",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
   },
   {
    slug: "artmarket2025",
    title: "ART MARKET TREND 2025" ,
    meta: "한국미술품 감정 연구센터",
    year: "2025",
    summary: "한국미술품 감정 연구센터",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/artmarket2025.jpg",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
   },
   {
    slug: "oldfuture",
    title: "오래된미래 신산해경" ,
    meta: "시안미술관",
    year: "2024",
    summary: "시안미술관 (포스터, 현수막, 도록)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
   },
   {
    slug: "ontpia",
    title: "수성아트피아 가상미술관 온트피아" ,
    meta: "수성아트피아",
    year: "2024",
    summary: "카드, 책깔피",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/ontpia.jpg",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "story",
    title: "그리 오래되지 않은 우리들의 이야기" ,
    meta: "킴스아트미술관 KAF",
    year: "2024",
    summary: "킴스아트미술관 KAF (포스터, 현수막, 도록)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "barbecue",
    title: "2024 군위 바베큐축제" ,
    meta: "군위 문화재단",
    year: "2024",
    summary: "군위 문화재단 (포스터, 재단, 초대장, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "residency",
    title: "제6기 창작스튜디오 입주작가 결과보고전" ,
    meta: "이응노의 집",
    year: "2023",
    summary: "이응노의 집 (포스터, 가로등배너, 현수막, 도록)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "platform",
    title: "PLATFORM" ,
    meta: "대구예술발전소",
    year: "2023",
    summary: "대구예술발전소 (무빙포스터, 현수막, 엽서)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbVideoSrc: "assets/images/thumbs/platform_motion.mp4",
    thumbVideoScale: 1.5,
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "artagency",
    title: "예술통신사 : 거점" ,
    meta: "시안미술관",
    year: "2023",
    summary: "시안미술관 (포스터)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "makeonlyone",
    title: "MAKE ONLY ONE" ,
    meta: "수성재단",
    year: "2023",
    summary: "수성재단 (포스터, 인스타)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "pinocchio",
    title: "양심:피노키오" ,
    meta: "대구예술발전소",
    year: "2023",
    summary: "대구예술발전소 (포스터, 배너, 리플릿, 키오스크)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "pureum",
    title: "푸름으로부터" ,
    meta: "킴스아트미술관 KAF",
    year: "2023",
    summary: "킴스아트미술관 KAF (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "artmarket",
    title: "ART MARKET TREND 2024" ,
    meta: "한국미술품 감정 연구센터",
    year: "2024",
    summary: "한국미술품 감정 연구센터",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/artmarket.jpg",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "hyper",
    title: "Hyper Impressionism" ,
    meta: "",
    year: "2023",
    summary: " (무빙포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbVideoSrc: "assets/images/thumbs/hyper_motion.mp4",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "undertheground",
    title: "땅 밑으로 흐르는 강" ,
    meta: "아트만",
    year: "2023",
    summary: "아트만 (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "walking",
    title: "Walking on the quest 위대한 여정" ,
    meta: "시안미술관",
    year: "2023",
    summary: "시안미술관 (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "lostandfound",
    title: "Lost and Found" ,
    meta: "킴스아트미술관 KAF",
    year: "2023",
    summary: "킴스아트미술관 KAF (포스터, 현수막, 도록)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "eric",
    title: "ERIC 장건우 개인전" ,
    meta: "아트리움모리" ,
    year: "2023",
    summary: "아트리움모리 (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "death",
    title: "죽음이 우리를 갈라놓을때 까지" ,
    meta: "아트만",
    year: "2022",
    summary: "아트만 (포스터, 리플렛, 도록)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "indang_report",
    title: "피어날 꽃과 그림 성과보고집" ,
    meta: "인당미술관",
    year: "2022",
    summary: "인당미술관 (성과보고집)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/indang_report.jpg",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "bohyun_report",
    title: "식식한 생활 성과보고집" ,
    meta: "보현박물관",
    year: "2022",
    summary: "보현박물관 (성과보고집)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/bohyun_report.jpg",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "the",
    title: "그 곳, 때, 일",
    meta: "시안미술관",
    year: "2022",
    summary: "시안미술과나 (포스터, 현수막, 도록)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "echo",
    title: "바깥에서 온 어느울림",
    meta: "킴스아트미술관 KAF",
    year: "2022",
    summary: "킴스아트미술관 KAF (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "witches",
    title: "집회를 벗어난 마녀들",
    meta: "시안미술관",
    year: "2022",
    summary: "시안미술관 (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "stroll",
    title: "STROLL",
    meta: "시안미술관",
    year: "2022",
    summary: "시안미술관 (포스터, 현수막, 리플렛)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "preview",
    title: "Preview Show",
    meta: "LINK",
    year: "2022",
    summary: "LINK (포스터)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-stone", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "bohyun_worksheet",
    title: "식식한 생활",
    meta: "보현박물관",
    year: "2022",
    summary: "보현박물관 (활동지)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/bohyun_worksheet.jpg",
    images: ["thumb-ocean", "thumb-sand", "thumb-rose"],
    featured: true,
  },
  {
    slug: "indang_worksheet",
    title: "피어날 꽃과 그림",
    meta: "인당미술관",
    year: "2022",
    summary: "인당미술관 (활동지)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/indang_worksheet.jpg",
    images: ["thumb-forest", "thumb-night", "thumb-ocean"],
    featured: true,
  },
  {
    slug: "tiger",
    title: "어흥상담소",
    meta: "시안미술관",
    year: "2022",
    summary: "시안미술관 (배너)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-rose", "thumb-sand", "thumb-stone"],
    featured: true,
  },
  {
    slug: "education",
    title: "깊이있는 미술작품 컬렉팅 어드바이스",
    meta: "윤선갤러리",
    year: "2022",
    summary: "윤선갤러리 (리플렛)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/education.jpg",
    images: ["thumb-stone", "thumb-ocean", "thumb-sand"],
    featured: true,
  },
  {
    slug: "star",
    title: "별 하나에",
    meta: "시안미술관",
    year: "2022",
    summary: "시안미술관 (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-ocean", "thumb-stone"],
    featured: true,
  },
  {
    slug: "zoomin",
    title: "Zoom In",
    meta: "싹",
    year: "2022",
    summary: "싹 (리플렛)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/zoomin.jpg",
    images: ["thumb-sand", "thumb-ocean", "thumb-stone"],
    featured: true,
  },
  {
    slug: "blankspot",
    title: "공백지점",
    meta: "스테어스, 아트만",
    year: "2022",
    summary: "스테어스,아트만 (포스터)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-ocean", "thumb-night", "thumb-rose"],
    featured: true,
  },
  {
    slug: "is",
    title: "is",
    meta: "BONA GALLERY",
    year: "2022",
    summary: "포스터",
    overview: "",
    thumbClass: "thumb-stone",
    thumbSrc: "assets/images/thumbs/Is.png",
    images: ["thumb-forest", "thumb-sand", "thumb-stone"],
    featured: true,
  },
  {
    slug: "tomorrow",
    title: "내일의 나와 나에게",
    meta: "아트만",
    year: "2021",
    summary: "아트만 (포스터, 현수막, 배너)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-rose", "thumb-ocean", "thumb-forest"],
    
    featured: false,
  },
  {
    slug: "lost",
    title: "잃어버린지도 모른채",
    meta: "킴스아트미술관 KAF",
    year: "2021",
    summary: "킴스아트미술관 KAF (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-stone", "thumb-sand", "thumb-night"],
    featured: false,
  },
  {
    slug: "notgoodbye",
    title: "안녕하지않은",
    meta: "킴스아트필드미술관 KAF",
    year: "2021",
    summary: "킴스아트필드미술관 KAF (포스터, 현수막, 도록)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-night", "thumb-ocean", "thumb-rose"],
    featured: false,
  },
  {
    slug: "manman",
    title: "프로젝트 문화만만",
    meta: "군위문화재단",
    year: "2021",
    summary: "군위문화재단 (포스터, 배너)", 
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-sand", "thumb-forest", "thumb-stone"],
    featured: false,
  },
  {
    slug: "saturday",
    title: "토요일의 화가",
    meta: "킴스아트필드미술관 KAF",
    year: "2021",
    summary: "킴스아트필드미술관 KAF (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    images: ["thumb-ocean", "thumb-sand", "thumb-night"],
    featured: false,
  },
  {
    slug: "everyday",
    title: "Every Day is a New Day",
    meta: "킴스아트필드미술관 KAF",
    year: "2021",
    summary: "킴스아트필드미술관 KAF (포스터, 도록)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbFit: "contain",
    images: ["thumb-forest", "thumb-ocean", "thumb-stone"],
    featured: false,
  },
  {
    slug: "grayzone",
    title: "GRAY ZONE",
    meta: "스테어스",
    year: "2021",
    summary: "스테어스 (포스터, 현수막, 리플렛)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbFit: "contain",
    images: ["thumb-rose", "thumb-sand", "thumb-forest"],
    featured: false,
  },
  {
    slug: "parsprotoo",
    title: "PARS PRO TOO",
    meta: "시안미술관",
    year: "2021",
    summary: "시안미술관 (포스터, 현수막)",
    overview: "",
    thumbClass: "thumb-stone",
    thumbFit: "contain",
    images: ["thumb-stone", "thumb-night", "thumb-ocean"],
    featured: false,
  },
];

const projectMap = Object.fromEntries(projects.map((project) => [project.slug, project]));

const galleryContainers = document.querySelectorAll("[data-gallery]");
const projectDetailTitle = document.getElementById("detail-title");
const detailGalleryGrid = document.getElementById("detail-gallery-grid");
const detailGallerySection = document.getElementById("detail-gallery-section");
const backLink = document.getElementById("back-link");
const prevLink = document.getElementById("prev-link");
const nextLink = document.getElementById("next-link");
const homeHero = document.getElementById("home-hero");
const brandLinks = document.querySelectorAll(".brand");

function getThumbPath(slug) {
  return `${THUMB_BASE_PATH}/${slug}.png`;
}

function getProjectThumbPath(project) {
  return project.thumbSrc || getThumbPath(project.slug);
}

function getProjectThumbVideoPath(project) {
  return project.thumbVideoSrc || "";
}

function getCommonPath(filename) {
  return `${COMMON_BASE_PATH}/${filename}`;
}

function getDetailCoverPath(slug) {
  return `${DETAIL_BASE_PATH}/${slug}/cover.png`;
}

function getDetailMediaCandidates(slug, index) {
  const basePath = `${DETAIL_BASE_PATH}/${slug}/detail-${index}`;

  return [
    { src: `${basePath}.jpg`, type: "image", mime: "image/jpeg" },
    { src: `${basePath}.png`, type: "image", mime: "image/png" },
    { src: `${basePath}.mp4`, type: "video", mime: "video/mp4" },
  ];
}

function createAssetImage(src, alt, className, loading = "lazy") {
  const image = document.createElement("img");

  image.src = src;
  image.alt = alt;
  image.className = className;
  image.loading = loading;
  image.decoding = "async";
  image.addEventListener("load", () => {
    if (image.parentElement) {
      image.parentElement.classList.add("has-asset");
    }
  });
  image.addEventListener("error", () => {
    image.remove();
  });

  return image;
}

function createAssetVideo(src, className) {
  const video = document.createElement("video");
  const source = document.createElement("source");

  video.className = className;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.playsInline = true;
  source.src = src;
  source.type = "video/mp4";
  video.appendChild(source);

  return video;
}

function appendDetailMedia(item, project, index, candidates) {
  const [currentCandidate, ...restCandidates] = candidates;

  if (!currentCandidate) {
    item.remove();
    return;
  }

  if (currentCandidate.type === "video") {
    const video = createAssetVideo(currentCandidate.src, "detail-gallery-video");

    video.addEventListener("loadeddata", () => {
      item.hidden = false;
      item.classList.add("has-asset");
      item.classList.add("has-video");
      if (detailGallerySection) {
        detailGallerySection.hidden = false;
      }
    });
    video.addEventListener(
      "error",
      () => {
        video.remove();
        appendDetailMedia(item, project, index, restCandidates);
      },
      { once: true }
    );
    item.appendChild(video);
    return;
  }

  const image = createAssetImage(
    currentCandidate.src,
    `${project.title} detail image ${index}`,
    "detail-gallery-image"
  );

  image.addEventListener("load", () => {
    item.hidden = false;
    if (detailGallerySection) {
      detailGallerySection.hidden = false;
    }
  });
  image.addEventListener(
    "error",
    () => {
      appendDetailMedia(item, project, index, restCandidates);
    },
    { once: true }
  );
  item.appendChild(image);
}

function createProjectCard(project, index) {
  const link = document.createElement("a");
  const delayClass = index % 2 === 1 ? " reveal-delay" : "";
  const thumb = document.createElement("div");
  const text = document.createElement("div");
  const thumbFit = project.thumbFit || "cover";
  const thumbVideoPath = getProjectThumbVideoPath(project);

  link.className = `project-item reveal${delayClass}`;
  link.href = `project-detail.html?slug=${project.slug}`;
  thumb.className = `project-thumb ${project.thumbClass} project-thumb-${thumbFit}`;

  if (thumbVideoPath) {
    const video = document.createElement("video");
    const source = document.createElement("source");

    video.className = "project-thumb-video";
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.style.transform = `scale(${project.thumbVideoScale || 1})`;
    source.src = thumbVideoPath;
    source.type = "video/mp4";
    video.appendChild(source);
    video.addEventListener("error", () => {
      video.remove();
      thumb.appendChild(
        createAssetImage(getProjectThumbPath(project), `${project.title} thumbnail`, "project-thumb-image")
      );
    });
    thumb.appendChild(video);
  } else {
    thumb.appendChild(
      createAssetImage(getProjectThumbPath(project), `${project.title} thumbnail`, "project-thumb-image")
    );
  }

  text.className = "project-text";
  text.innerHTML = `
    <span class="project-title">${project.title}</span>
    <span class="project-meta">${project.meta}</span>
  `;

  link.appendChild(thumb);
  link.appendChild(text);

  return link;
}

// 페이지 종류에 맞는 프로젝트 목록을 렌더링합니다.
function renderProjectGalleries() {
  galleryContainers.forEach((container) => {
    const mode = container.dataset.gallery;
    const items = mode === "featured" ? projects.filter((project) => project.featured) : projects;

    container.innerHTML = "";
    items.forEach((project, index) => {
      container.appendChild(createProjectCard(project, index));
    });
  });
}

function bindProjectLinks() {
  const projectItems = document.querySelectorAll(".project-item");

  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      sessionStorage.setItem(RETURN_PATH_KEY, window.location.pathname);
      sessionStorage.setItem(RETURN_SCROLL_KEY, String(window.scrollY));
    });
  });
}

function setupRevealAnimation() {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function restoreListScrollPosition() {
  const restorePath = sessionStorage.getItem(RETURN_PATH_KEY);
  const restoreScroll = sessionStorage.getItem(RETURN_SCROLL_KEY);

  if (
    restorePath === window.location.pathname &&
    restoreScroll !== null &&
    !projectDetailTitle
  ) {
    window.addEventListener(
      "load",
      () => {
        window.scrollTo({ top: Number(restoreScroll), behavior: "auto" });
        sessionStorage.removeItem(RETURN_PATH_KEY);
        sessionStorage.removeItem(RETURN_SCROLL_KEY);
      },
      { once: true }
    );
  }
}

function renderProjectDetail() {
  if (!projectDetailTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const safeIndex = projectIndex === -1 ? 0 : projectIndex;
  const project = projects[safeIndex];
  const previousProject = projects[safeIndex - 1] || null;
  const nextProject = projects[safeIndex + 1] || null;
  const detailThumb = document.getElementById("detail-thumb");
  const thumbFit = project.thumbFit || "cover";
  const coverImage = createAssetImage(
    getDetailCoverPath(project.slug),
    `${project.title} cover image`,
    "detail-thumb-image",
    "eager"
  );
  const thumbFallbackImage = createAssetImage(
    getProjectThumbPath(project),
    `${project.title} thumbnail`,
    "detail-thumb-image",
    "eager"
  );

  document.title = `${project.title} - Min Portfolio`;
  document.getElementById("detail-title").textContent = project.title;
  document.getElementById("detail-year").textContent = project.year;
  document.getElementById("detail-summary").textContent = project.summary;
  document.getElementById("detail-overview").textContent = project.overview;
  detailThumb.className = `detail-thumb surface-art ${project.thumbClass} detail-thumb-${thumbFit}`;
  detailThumb.innerHTML = "";
  coverImage.addEventListener(
    "error",
    () => {
      detailThumb.appendChild(thumbFallbackImage);
    },
    { once: true }
  );
  detailThumb.appendChild(coverImage);

  if (detailGalleryGrid) {
    detailGalleryGrid.innerHTML = "";
    if (detailGallerySection) {
      detailGallerySection.hidden = true;
    }

    project.images.forEach((imageClass, index) => {
      const item = document.createElement("div");
      const candidates = getDetailMediaCandidates(project.slug, index + 1);

      item.className = `detail-gallery-item ${imageClass}`;
      item.hidden = true;
      detailGalleryGrid.appendChild(item);
      appendDetailMedia(item, project, index + 1, candidates);
    });
  }

  if (prevLink) {
    if (previousProject) {
      prevLink.hidden = false;
      prevLink.href = `project-detail.html?slug=${previousProject.slug}`;
      prevLink.setAttribute("aria-label", `${previousProject.title} 프로젝트로 이동`);
    } else {
      prevLink.hidden = true;
    }
  }

  if (nextLink) {
    if (nextProject) {
      nextLink.hidden = false;
      nextLink.href = `project-detail.html?slug=${nextProject.slug}`;
      nextLink.setAttribute("aria-label", `${nextProject.title} 프로젝트로 이동`);
    } else {
      nextLink.hidden = true;
    }
  }
}

function renderHomeHero() {
  if (!homeHero) {
    return;
  }

  homeHero.appendChild(
    createAssetImage(getCommonPath("home-hero.jpg"), "Min Portfolio main visual", "hero-image-asset", "eager")
  );
}

function renderBrandLogo() {
  brandLinks.forEach((brandLink) => {
    const logoImage = createAssetImage(
      getCommonPath("logo.png"),
      "Min Portfolio",
      "brand-logo",
      "eager"
    );

    logoImage.addEventListener(
      "load",
      () => {
        brandLink.classList.add("has-logo");
      },
      { once: true }
    );

    brandLink.prepend(logoImage);
  });
}

function setupBackLink() {
  if (!backLink) {
    return;
  }

  const savedPath = sessionStorage.getItem(RETURN_PATH_KEY);

  if (savedPath) {
    backLink.setAttribute("href", savedPath);
  }

  backLink.addEventListener("click", (event) => {
    const targetPath = sessionStorage.getItem(RETURN_PATH_KEY);

    if (targetPath) {
      event.preventDefault();
      window.location.href = targetPath;
    }
  });
}

renderProjectGalleries();
bindProjectLinks();
renderBrandLogo();
renderHomeHero();
renderProjectDetail();
setupBackLink();
setupRevealAnimation();
restoreListScrollPosition();
