import { Palette, Briefcase, FileCheck, ShoppingCart, Smartphone, Share2, Bot, TrendingUp } from "lucide-react";

export const services = [
  {
    slug: "branding",
    name: "Branding",
    description: "We craft a unique brand identity that reflects your vision and values. From logo to messaging, we help your business stand out and stay memorable.",
    fullDescription: [
      "Your brand is more than a logo — it's the story, feeling, and perception your audience carries about your business. We build brand identities from the ground up: logo design, color palettes, typography, brand guidelines, and messaging frameworks that speak directly to your target audience.",
      "From brand strategy and positioning to visual identity systems and tone of voice, we ensure consistency across every touchpoint. Whether you're launching a new business or refreshing an existing one, we craft identities that are distinctive, memorable, and built to stand the test of time."
    ],
    features: [
      "Logo Design & Identity",
      "Brand Strategy & Positioning",
      "Color Palette & Typography",
      "Brand Guidelines Document",
      "Messaging & Tone of Voice",
      "Business Card & Stationery Design"
    ],
    icon: Palette,
    image: "/services/branding.png"
  },
  {
    slug: "business-consultation",
    name: "Bussiness Conslutation",
    description: "Get expert guidance to navigate challenges and make smarter business decisions. We help you build a clear roadmap for sustainable growth.",
    fullDescription: [
      "Running a business comes with complex challenges — from market positioning and operational efficiency to scaling strategies and competitive analysis. Our business consultation services give you access to experienced strategists who help you make data-driven decisions with confidence.",
      "We work closely with founders and leadership teams to identify bottlenecks, unlock opportunities, and create actionable growth plans. Whether you need a full business audit, a go-to-market strategy, or guidance on digital transformation, we deliver clarity and direction at every stage of your journey."
    ],
    features: [
      "Business Audit & Analysis",
      "Growth Strategy Roadmap",
      "Market Research & Competitor Analysis",
      "Digital Transformation Guidance",
      "Operational Efficiency Review",
      "Go-to-Market Strategy"
    ],
    icon: Briefcase,
    image: "/services/consultation.png"
  },
  {
    slug: "company-registration",
    name: "Company Registarion",
    description: "We handle the entire legal registration process so you can start your business hassle-free. Fast, compliant, and fully guided from start to finish.",
    fullDescription: [
      "Starting a business shouldn't be held back by complex paperwork. We manage the complete company registration process — from choosing the right business structure (Pvt. Ltd., LLP, OPC, Proprietorship) to filing with the MCA and obtaining all necessary registrations like GST, PAN, and TAN.",
      "Our team ensures full legal compliance at every step, reducing errors and delays. We also assist with trademark registration, MSME registration, and import-export codes. You focus on building your business — we handle every legal and regulatory formality seamlessly."
    ],
    features: [
      "Private Limited Company Registration",
      "LLP & OPC Registration",
      "GST Registration",
      "Trademark Registration",
      "MSME / Udyam Registration",
      "Import-Export Code (IEC)"
    ],
    icon: FileCheck,
    image: "/services/registration.png"
  },
  {
    slug: "shopify-store-development",
    name: "Shopify Store Development",
    description: "We build custom Shopify stores designed to convert visitors into customers. Clean design, smooth functionality, and built to scale with your business.",
    fullDescription: [
      "Empower your business with a high-performance Shopify store. We focus on custom theme development, seamless product management, and optimized user journeys that drive conversions. From initial setup to advanced feature integration like custom Liquid tweaks and third-party app syncs, our solutions are built to scale with your brand's growth.",
      "Maximize your reach with a store optimized for all devices and search engines. We implement best-in-class performance standards, secure payment gateways, and automated marketing tools. Whether you're launching a new venture or migrating from another platform, we ensure a smooth, high-speed shopping experience for your customers 24/7."
    ],
    features: [
      "Shopify Store Setup",
      "Theme Customization",
      "Product Listing & Management",
      "Payment Gateway Integration",
      "Order Management",
      "Mobile Responsive Store"
    ],
    icon: ShoppingCart,
    image: "/services/shopify.png"
  },
  {
    slug: "customized-software-development",
    name: "Customized Sofware Development",
    description: "We design and develop software tailored to your exact business requirements. Scalable, secure, and built to solve your specific challenges.",
    fullDescription: [
      "Build custom web and mobile applications tailored to your specific business logic. We go beyond off-the-shelf software to develop bespoke tools, APIs, and cross-platform mobile apps. Using modern frameworks like React and Flutter, we create secure, scalable architectures that automate processes and solve complex business challenges.",
      "From initial wireframing to enterprise-grade deployment, we manage the full development lifecycle. Our apps feature seamless integrations with CRMs, payment providers, and logistics platforms. We focus on intuitive UI/UX and robust backend performance to ensure your digital products provide a superior user experience and a competitive edge."
    ],
    features: [
      "Custom Web Application Development",
      "Mobile App Development (Android & iOS)",
      "API Design & Integration",
      "Scalable Cloud Architecture",
      "Business Process Automation",
      "Secure Data Management"
    ],
    icon: Smartphone,
    image: "/services/app-dev.png"
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing (SMM)",
    description: "We create engaging content and strategies that grow your brand's online presence. Connect with your audience and build lasting customer relationships.",
    fullDescription: [
      "Social Media Marketing grows brand presence on platforms like Instagram, Facebook, LinkedIn, Twitter, Pinterest, and YouTube through active profiles, engaging content, and community building to boost visibility, leads, trust, and relationships. It involves crafting content calendars with reels/stories, LinkedIn thought leadership, YouTube SEO, strategic campaigns, influencer collabs, user-generated content, and omnichannel consistency.",
      "We manage multiple accounts, A/B test creatives via Meta Business Suite, track key metrics like engagement rate and follower growth, and use tools like Canva and Later for ROI up to 4x. Direct audience interaction via planning, posting, and performance analysis turns social into a channel for awareness, traffic, engagement, and sales."
    ],
    features: [
      "Social Media Strategy",
      "Content Creation & Calendar",
      "Reel & Story Production",
      "Community Management",
      "Influencer Collaboration",
      "Performance Analytics & Reporting"
    ],
    icon: Share2,
    image: "/services/social-media.png"
  },
  {
    slug: "ai-search-engine-marketing",
    name: "Ai Search Engine Marketing",
    description: "We use AI-driven strategies to improve your visibility on search engines. Reach the right audience at the right time with smarter targeting.",
    fullDescription: [
      "Increase your search visibility and attract high-intent traffic through strategic on-page and off-page optimization powered by AI tools. We perform deep keyword research, technical audits, and content structure improvements. By optimizing meta data, site speed, and mobile responsiveness, we ensure your website meets Google's core web vitals for higher rankings.",
      "Our AI-driven approach identifies search trends faster, predicts content gaps, and automates technical SEO fixes like schema markup, sitemap optimization, and internal linking strategies. We help your brand reach the top of search results, driving more organic leads and conversions without the recurring costs of paid ads."
    ],
    features: [
      "AI-Powered Keyword Research",
      "Technical SEO Audit",
      "On-Page Optimization",
      "Content Gap Analysis",
      "Link Building Strategy",
      "Schema Markup & Sitemap"
    ],
    icon: Bot,
    image: "/services/seo.png"
  },
  {
    slug: "performance-marketing",
    name: "Performance Marketing ( Google / Meta )",
    description: "We run data-driven ad campaigns across Google and Meta platforms. Every rupee spent is optimized to maximize your return on investment.",
    fullDescription: [
      "Performance marketing delivers targeted traffic via powerful platforms for quick reach: Google Ads shows on search, YouTube, and partner networks with keyword targeting, search/display/video campaigns, remarketing, and SKAGs for e-commerce. Meta Ads (Facebook/Instagram) use Advantage+ shopping, dynamic catalogs for interests, demographics, and behavior in feeds and stories.",
      "Every campaign is built around your ROI goals. We handle budget optimization, RLSA, A/B landing pages, and policy compliance, while continuously scaling winning ads and pausing underperformers. Typical ROAS of 5–8x with full analytics transparency — you always know exactly where your money is going and what it's returning."
    ],
    features: [
      "Google Search & Display Campaigns",
      "Meta (Facebook & Instagram) Ads",
      "Audience Targeting & Retargeting",
      "A/B Testing & Creative Optimization",
      "Budget Management & Scaling",
      "ROI Reporting & Analytics"
    ],
    icon: TrendingUp,
    image: "/services/ads.png"
  }
];
