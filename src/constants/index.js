import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  
  {
    id: "1",
    title: "About us",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "4",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Concept Clarifier",
    text: `Need a deeper understanding? The Concept
    Clarifier works like a teacher—it won't just give
    you answers. Instead, it guides you step-bystep to help you understand concepts fully.
    By the end, you'll master the topic with
    confidence!`,
    date: "-",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    appUrl:`https://conceptclarifier-genai.streamlit.app/`
  },
  {
    id: "1",
    title: "Ai Vision Chatbot",
    text: `Got a tough problem? With the AI Vision
    Chatbot, you can upload pages from your
    textbooks—whether it's math problems, physics
    questions, or chemistry equations—and get the
    help you need.
    It's perfect for those tricky sections in your
    books`,
    date: "-",
    status: "done",
    imageUrl: roadmap2,
    appUrl:`https://aivisionchatbot-genai.streamlit.app/`
  },
  {
    id: "2",
    title: "Llama Chatbot",
    text: `Got questions? The Llama Chatbot is here to
    help! Whether it's homework or general doubts,
    ask away and get clear answers to all your
    queries instantly.
    It's like having a 24/7 assistant for any subject`,
    date: "-",
    status: "done",
    imageUrl: roadmap3,
    appUrl:`https://llamachatbot-genai.streamlit.app/`
  },

];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  // {
  //   id: "0",
  //   title: "Ai Tutor For Children",
  //   text: "Studying the Tamil Nadu state syllabus? This AI tutor is designed just for you! Choose your standard and get help on any topic The AI will clear your doubts based on your exact syllabus, so you can study smarter and faster",
  //   backgroundUrl: "assets/benefits/card-1.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  //   appUrl:`https://aitutorforchildren-genai.streamlit.app/`
  // },
  {
    id: "1",
    title: "Sanjay S",
    text: `Ai Developer & Project
    Coordinator`,
    backgroundUrl: "assets/benefits/face-1.png",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    appUrl:`https://www.linkedin.com/in/sanjayai/`,
    light:true
  },
  {
    id: "2",
    title: "Vasanthan S R",
    text: `Frontend Developer`,
    backgroundUrl: "assets/benefits/face-2.png",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    appUrl:`https://www.linkedin.com/in/vasanthan-s-r-97b842232/`
  },
  {
    id: "3",
    title: "Naveen",
    text: `Data Collection & Preprocessing`,
    backgroundUrl: "assets/benefits/face-3.png",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    appUrl:`https://www.linkedin.com/in/naveen-2025-ai/`,
    light: true,

  }
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];