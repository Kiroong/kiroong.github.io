export interface LinkItem {
  url: string
  label?: string
  type: 'paper' | 'pdf' | 'code' | 'demo' | 'video' | 'presentation' | 'poster' | 'slides' | 'website'
  isPrimary?: boolean  // Override default primary/secondary classification
}

export interface Publication {
  id?: string
  title: string
  authors: string
  venue?: string
  doi?: string
  pdf?: string
  code?: string
  demo?: string
  video?: string
  thumbnail?: string
  links?: LinkItem[]  // New flexible links array
}

export const workingProjects: Publication[] = [
  {
    title: "The SECAI Framework: Supporting Organizational Decision Making with AI—From A Two-Year Case Study in Software Management",
    authors: "Kiroong Choe, Soohyun Lee, Yumin Song, Min Hyeong Kim, Guangjing Yan, Eunhye Kim, Nam Wook Kim, Jinwook Seo",
    venue: "Working Project",
    thumbnail: "/publications/secai-working-thumbnail.png"
  }
]

export const publications2026: Publication[] = [
  {
    id: "pub-crosslit-2026",
    title: "CrossLit: Connecting Visual and Textual Sensemaking for Literature Review",
    authors: "Kiroong Choe, Eunhye Kim, Min Hyeong Kim, Suyeon Hwang, Sangwon Park, Nam Wook Kim, Jinwook Seo",
    venue: "ACM Conference on Human Factors in Computing Systems (<strong>ACM CHI 2026</strong>, Conditionally Accepted)",
    thumbnail: "/publications/crosslit-2026-thumbnail.png"
  },
  {
    title: "Good Fences Make Good Learning: How Self-Directed Language Learners Navigate LLM Delegation Decisions",
    authors: "Jiwon Song, Aeri Cho, Sihyeon Lee, Kiroong Choe, Jinwook Seo",
    venue: "ACM Conference on Human Factors in Computing Systems (<strong>ACM CHI 2026</strong>, Conditionally Accepted)",
    thumbnail: "/publications/goodfences-2026-thumbnail.png"
  }
]

export const publications2025: Publication[] = [
  {
    id: "pub-tvcg-2025",
    title: "Towards More Explainable Nonlinear Dimensionality Reduction: A Feature-Driven Interaction Approach",
    authors: "Aeri Cho, Hyeon Jeon, Kiroong Choe, Seokhyeon Park, Jinwook Seo",
    venue: "IEEE Transactions on Visualization and Computer Graphics (<strong>IEEE TVCG 2025</strong>)",
    thumbnail: "/publications/tvcg-2025-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/11205332/' }
    ]
  },
  {
    title: "Asking Questions Matters: Comparing the Effect of Learning through Dialogue with Peers, ChatGPT, and Intelligent Tutoring System",
    authors: "Ji Won Yang, Kiroong Choe, Jaeseo Lim, Jooyong Park",
    venue: "<strong>Interactive Learning Environments (2025)</strong>",
    thumbnail: "/publications/askingquestions-2025-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://www.tandfonline.com/doi/full/10.1080/10494820.2025.2488984' }
    ]
  },
  {
    title: "Towards Interactive Chess Textbooks: Utilizing Human-Crafted Strategic Knowledge",
    authors: "Kiroong Choe, Soohyun Lee, Seokweon Jung, Jinwook Seo",
    venue: "CHI 2025 Workshop on Augmented Educators and AI: Shaping the Future of Human and AI Cooperation in Learning (<strong>ACM CHI 2025 Workshop</strong>)",
    thumbnail: "/publications/chess-2025-thumbnail.png",
    links: [
      { type: 'pdf', url: '/publications/chess-2025-paper.pdf' },
      { type: 'slides', url: 'https://docs.google.com/presentation/d/1YHbDLAPynAjkFE_cU5kbr8l0bMHEuf3ZgrnHA9mtHFY/edit?usp=sharing', isPrimary: true },
      { type: 'website', url: 'https://sites.google.com/view/augemted-educators-and-ai/home?authuser=0', label: 'Workshop Website' }
    ]
  },
  {
    title: "Beyond Tools: Understanding How Heavy Users Integrate LLMs into Everyday Tasks and Decision-Making",
    authors: "Eunhye Kim, Kiroong Choe, Minju Yoo, Sadat Shams Chowdhury, Jinwook Seo",
    venue: "CHI 2025 Workshop on Tools for Thought: Research and Design for Understanding, Protecting, and Augmenting Human Cognition with Generative AI (<strong>ACM CHI 2025 Workshop</strong>)",
    thumbnail: "/publications/beyondtools-2025-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://arxiv.org/abs/2502.15395' }
    ]
  }
]

export const publications2024: Publication[] = [
  {
    id: "pub-chartvisor-2024",
    title: "Enhancing Data Literacy On-demand: LLMs as Guides for Novices in Chart Interpretation",
    authors: "Kiroong Choe, Chaerin Lee, Soohyun Lee, Jiwon Song, Aeri Cho, Nam Wook Kim, Jinwook Seo",
    venue: "IEEE Transactions on Visualization and Computer Graphics (<strong>IEEE TVCG 2024</strong>), also presented at IEEE Visualization and Visual Analytics (<strong>IEEE VIS 2024</strong>)",
    thumbnail: "/publications/chartvisor-2024-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/10555321/' },
      { type: 'presentation', url: 'https://www.youtube.com/live/W3Vrrxo2w74?t=45&si=P62PRrrGjnBsEJ4M' }
    ]
  },
  {
    id: "pub-citenet-2024",
    title: "Fields, Bridges, and Foundations: How Researchers Browse Citation Network Visualizations",
    authors: "Kiroong Choe, Eunhye Kim, Sangwon Park, Jinwook Seo",
    venue: "IEEE Visualization and Visual Analytics (<strong>IEEE VIS 2024 Short</strong>)",
    thumbnail: "/publications/citenet-2024-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/10771118' },
      { type: 'presentation', url: 'https://www.youtube.com/live/jlbzvyg9IZc?t=1712&si=MHfDuDkK5v0AgSdd' }
    ]
  },
  {
    id: "pub-litweaver-2024",
    title: "Supporting Novice Researchers to Write Literature Review using Language Models",
    authors: "Kiroong Choe, Seokhyeon Park, Seokweon Jung, Hyeok Kim, Ji Won Yang, Hwajung Hong, Jinwook Seo",
    venue: "Extended Abstracts of the ACM Conference on Human Factors in Computing Systems (<strong>ACM CHI EA 2024</strong>)",
    thumbnail: "/publications/litweaver-2024-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://dl.acm.org/doi/full/10.1145/3613905.3650787' },
      { type: 'video', url: 'https://youtu.be/v-1GhxsY3O0', label: 'Demo Video' },
      { type: 'presentation', url: 'https://www.youtube.com/watch?v=gIFXJQQncvI' },
      { type: 'poster', url: '/publications/litweaver_poster.pdf' }
    ]
  },
  {
    title: "MoNetExplorer: A Visual Analytics System for Analyzing Dynamic Networks with Temporal Network Motifs",
    authors: "Seokweon Jung, DongHwa Shin, Hyeon Jeon, Kiroong Choe, Jinwook Seo",
    venue: "IEEE Transactions on Visualization and Computer Graphics (<strong>IEEE TVCG 2024</strong>), also presented at IEEE Visualization and Visual Analytics (<strong>IEEE VIS 2024</strong>)",
    thumbnail: "/publications/monetexplorer-2024-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/10333998/' }
    ]
  },
  {
    id: "pub-jmatern-2024",
    title: "Pregnancy Outcomes of Cerclage in Twin Gestations: a Multicenter Retrospective Cohort Study",
    authors: "Jee Yoon Park, Kyong-No Lee, Hyeon Ji Kim, Kiroong Choe, Aeri Cho, Bohyoung Kim, Jinwook Seo, Hayan Kwon, Jong Woon Kim, Jin-Gon Bae, Ji-Hee Sung, Se Jin Lee, Young Mi Jung, You Jung Han, Subeen Hong, Jin-Hoon Chung, Hye-Sung Won, Jong Kwan Jun",
    venue: "<strong>The Journal of Maternal-Fetal & Neonatal Medicine (2024)</strong>",
    thumbnail: "/publications/jmatern-2024-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://www.tandfonline.com/doi/full/10.1080/14767058.2024.2355495' }
    ]
  }
]

export const publications2023: Publication[] = [
  {
    id: "pub-jmir-2023",
    title: "Effects of Fetal Images Produced in Virtual Reality on Maternal-Fetal Attachment: Randomized Controlled Trial",
    authors: "Kyong-No Lee, Hyeon Ji Kim, Kiroong Choe, Aeri Cho, Bohyoung Kim, Jinwook Seo, Woojae Myung, Jee Yoon Park, Kyung Joon Oh",
    venue: "<strong>Journal of Medical Internet Research (2023)</strong>",
    thumbnail: "/publications/jmir-2023-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://www.jmir.org/2023/1/e43634' }
    ]
  }
]

export const publications2022: Publication[] = [
  {
    id: "pub-medicine-2022",
    title: "Use of Continuous Infusion of Nicardipine to Control Persistent Postpartum Hypertension: A Retrospective Study",
    authors: "Min Kyung Kim*, Kiroong Choe*, Kyong-No Lee, Iseop Cho, Hyeon Ji Kim, Jee Yoon Park (* co-first authors)",
    venue: "<strong>Medicine (2022)</strong>",
    thumbnail: "/publications/medicine-2022-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://journals.lww.com/md-journal/fulltext/2022/12230/use_of_continuous_infusion_of_nicardipine_to.6.aspx' }
    ]
  },
  {
    id: "pub-cesarean-2022",
    title: "Association between Cesarean Section Rate and Maternal Age in Twin Pregnancies",
    authors: "Seongbeen Kim, Eunjin Song, Ye Hyon Park, Aeri Cho, Kiroong Choe, Hyeon Ji Kim, Jee Yoon Park, Bohyoung Kim, Kyung Joon Oh",
    venue: "<strong>Journal of Perinatal Medicine (2022)</strong>",
    thumbnail: "/publications/cesarean-2022-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://www.degruyterbrill.com/document/doi/10.1515/jpm-2021-0337/html' }
    ]
  }
]

export const publications2021: Publication[] = [
  {
    id: "pub-papers101-2021",
    title: "Papers101: Supporting the Discovery Process in the Literature Review Workflow for Novice Researchers",
    authors: "Kiroong Choe, Seokweon Jung, Seokhyeon Park, Hwajung Hong, Jinwook Seo",
    venue: "IEEE Pacific Visualization Symposium (<strong>PacificVis 2021 Short</strong>)",
    thumbnail: "/publications/papers101-2021-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/9438793' },
      { type: 'demo', url: 'https://kiroong.github.io/Papers101/', isPrimary: true },
      { type: 'code', url: 'https://github.com/kiroong/Papers101' }
    ]
  },
  {
    id: "pub-invoice-2021",
    title: "A Mixed-Initiative Approach to Extract Data from Pictures of Medical Invoice",
    authors: "Seokweon Jung, Kiroong Choe, Seokhyeon Park, Hyung-Kwon Ko, Youngtaek Kim, Jinwook Seo",
    venue: "IEEE Pacific Visualization Symposium (<strong>PacificVis 2021 Short</strong>)",
    thumbnail: "/publications/invoice-2021-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://ieeexplore.ieee.org/abstract/document/9438774' }
    ]
  },
  {
    id: "pub-infofragments-2021",
    title: "Interactive Visualization for Exploring Information Fragments in Software Repositories",
    authors: "Youngtaek Kim, Hyeon Jeon, Kiroong Choe, Hyunjoo Song, Bohyoung Kim, Jinwook Seo",
    venue: "IEEE Pacific Visualization Symposium (<strong>PacificVis 2021 Poster</strong>)",
    thumbnail: "/publications/infofragments-2021-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://arxiv.org/abs/2104.13568', isPrimary: false }
    ]
  }
]

export const publications2019: Publication[] = [
  {
    id: "pub-soundglance-2019",
    title: "SoundGlance: Briefing the Glanceable Cues of Web Pages for Screen Reader Users",
    authors: "Jaeyoon Song*, Kiroong Choe*, Jaemin Jo, Jinwook Seo (* co-first authors)",
    venue: "Extended Abstracts of the ACM Conference on Human Factors in Computing Systems (<strong>ACM CHI EA 2019</strong>)",
    thumbnail: "/publications/soundglance-2019-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://dl.acm.org/doi/abs/10.1145/3290607.3312865' },
      { type: 'code', url: 'https://github.com/SoundGlance/' }
    ]
  },
  {
    id: "pub-iss-2019",
    title: "Compatible 2D Table Navigation System for Visually Impaired Users",
    authors: "Kiroong Choe, Jinwook Seo",
    venue: "ACM International Conference on Interactive Surfaces and Spaces (<strong>ACM ISS 2019 Demo</strong>)",
    thumbnail: "/publications/iss-2019-thumbnail.png",
    links: [
      { type: 'paper', url: 'https://dl.acm.org/doi/10.1145/3343055.3360749' },
      { type: 'video', url: 'https://www.youtube.com/watch?v=wQ0M6Dkypuo', label: 'Demo Video' },
      { type: 'code', url: 'https://github.com/Kiroong/To-Heatmap-And-Beyond' },
      { type: 'demo', url: 'https://kiroong.github.io/To-Heatmap-And-Beyond/' }
    ]
  }
]
