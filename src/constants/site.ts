export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  familyContext: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

export const SITE_CONFIG = {
  name: "LYNKFOLK",
  tagline: "Stronger Families. Brighter Futures.",
  description:
    "A calmer way to understand each other. LYNKFOLK helps parents and teens express their feelings, understand one another, and build stronger connections — with AI as a supportive bridge, not a replacement.",
  url: "https://lynkfolk.com",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Parents", href: "#for-parents" },
  { label: "For Teens", href: "#for-teens" },
  { label: "Resources", href: "#tools-showcase" },
  { label: "Testimonials", href: "#testimonials" },
];

export const HERO_DATA = {
  badge: "Family Emotional Wellness",
  title: "A calmer way to understand each other.",
  description:
    "LYNKFOLK helps parents and teens express their feelings, understand one another, and build stronger connections — with AI as a supportive bridge, not a replacement.",
  privacyNotice: {
    title: "Private by default",
    subtitle: "Your family's privacy matters.",
  },
  moodCard: {
    title: "Mood Check-in",
    subtitle: "How are you feeling today?",
    emojis: [
      { mood: "Great", emoji: "😊", color: "bg-emerald-100 text-emerald-600" },
      { mood: "Good", emoji: "🙂", color: "bg-amber-100 text-amber-600" },
      { mood: "Okay", emoji: "😐", color: "bg-orange-100 text-orange-600" },
      { mood: "Sad", emoji: "😔", color: "bg-rose-100 text-rose-600" },
      { mood: "Distressed", emoji: "😣", color: "bg-purple-100 text-purple-600" },
    ],
    encouragement: "You've got this 💜",
  },
  aiCard: {
    title: "Private AI Support",
    description: "A safe space to talk, anytime you need.",
  },
  conversationCard: {
    tag: "Shared Conversation",
    subtext: "Try this today",
    prompt: "What's something you wish I understood better about you?",
  },
};

export const HOW_IT_WORKS_DATA = {
  header: "How LYNKFOLK helps",
  subtitle: "Different needs. One connected journey.",
  pillars: [
    {
      id: "teens",
      tag: "For Teens",
      subheading: "Private emotional support",
      description:
        "Feel heard, build confidence, and get the support you need — all in a safe space.",
      image: "/images/avatar-teen.jpg",
      bgColor: "bg-emerald-50/70",
      accentColor: "border-emerald-100",
    },
    {
      id: "parents",
      tag: "For Parents",
      subheading: "Calm guidance",
      description:
        "Understand your teen's world, get practical tools, and learn how to support them better.",
      image: "/images/avatar-parent.jpg",
      bgColor: "bg-amber-50/70",
      accentColor: "border-amber-100",
    },
    {
      id: "together",
      tag: "Together",
      subheading: "Guided conversations",
      description:
        "Bridge the gap with meaningful conversations and shared activities.",
      image: "/images/avatar-together.jpg",
      bgColor: "bg-purple-50/70",
      accentColor: "border-purple-100",
    },
  ],
};

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: "mood-insights",
    title: "Mood Tracking & Insights",
    description:
      "A gentle daily pulse check that reveals patterns over time without pressure or judgment.",
    iconName: "Smile",
  },
  {
    id: "ai-support",
    title: "Private AI Companion",
    description:
      "An empathetic sounding board helping teens process complex feelings and offering parents calm guidance.",
    iconName: "Sparkles",
  },
  {
    id: "prompts",
    title: "Shared Prompt Cards",
    description:
      "Carefully crafted conversation starters designed to spark organic laughter, empathy, and closeness.",
    iconName: "MessageCircle",
  },
  {
    id: "breathing",
    title: "Mindfulness & Breathing",
    description:
      "Quick 2-minute visual exercises that de-escalate tension and restore nervous system calm.",
    iconName: "Wind",
  },
  {
    id: "privacy",
    title: "Private-by-Design Walls",
    description:
      "Teens have their own confidential journaling space. Parents receive high-level wellness cues, not eavesdropping.",
    iconName: "ShieldCheck",
  },
  {
    id: "growth",
    title: "Progress & Milestone Paths",
    description:
      "Celebrate small wins, streaks of gratitude, and positive interaction milestones as a family unit.",
    iconName: "HeartHandshake",
  },
];

export const APP_SHOWCASE_DATA = {
  badge: "THE LYNKFOLK APP",
  title: "Tools for every step of the journey.",
  description:
    "From mood check-ins to AI support, LYNKFOLK gives families the tools, resources, and guidance they need — all in one place.",
  features: [
    "Mood tracking & emotional insights",
    "Private AI support",
    "Shared conversations & activities",
    "Breathing & mindfulness tools",
  ],
};

export const TRUST_PRIVACY_DATA = {
  badge: "YOUR PRIVACY, OUR PRIORITY",
  title: "Built around trust and privacy.",
  description:
    "LYNKFOLK is designed with your family's privacy in mind. Your data stays yours — protected, secure, and never shared without your consent.",
  image: "/images/privacy-shield.jpg",
  points: [
    {
      title: "Private by default",
      description: "Teen chats and journals are kept private, always.",
      icon: "Shield",
    },
    {
      title: "Secure & encrypted",
      description: "Your data is protected with industry-standard security.",
      icon: "Lock",
    },
    {
      title: "You're always in control",
      description: "Choose what to share, when to share it.",
      icon: "Sliders",
    },
  ],
};

export const CONVERSATION_HIGHLIGHT_DATA = {
  badge: "REAL CONVERSATIONS. LASTING IMPACT.",
  title: "Small moments can change conversations.",
  description:
    "It's not always about the big talks. Sometimes, it's the little moments — the right question, the right tool, the right time — that make the biggest difference.",
  image: "/images/conversation-mom.jpg",
  card: {
    tag: "Try this today",
    prompt: "What's something you wish I understood better about you?",
  },
};

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    name: "Sarah Jenkins",
    role: "Parent of 15-year-old",
    familyContext: "Mom to Chloe",
    avatarUrl: "/images/avatar-parent.jpg",
    quote:
      "LYNKFOLK gave our family a gentle bridge when conversations felt awkward or defensive. Chloe actually opens up now, and our dinner table is peaceful again.",
    rating: 5,
  },
  {
    id: "2",
    name: "Lucas Rivera",
    role: "High School Junior",
    familyContext: "Teen user",
    avatarUrl: "/images/avatar-teen.jpg",
    quote:
      "It doesn't feel like my parents are spying on me. Having a private space to talk through stress before discussing it at home made a huge difference.",
    rating: 5,
  },
  {
    id: "3",
    name: "David & Maya Vance",
    role: "Father & Daughter",
    familyContext: "Connected family",
    avatarUrl: "/images/avatar-together.jpg",
    quote:
      "The daily prompt cards turned our silent morning drives to school into moments where we actually laugh and understand each other's world.",
    rating: 5,
  },
];

export const FINAL_CTA_DATA = {
  badge: "READY TO BUILD A STRONGER TOMORROW?",
  title: "Join thousands of families already on the LYNKFOLK journey.",
  subtitle: "Better conversations. Healthier minds. Stronger connections.",
  buttonText: "Get Started",
};
