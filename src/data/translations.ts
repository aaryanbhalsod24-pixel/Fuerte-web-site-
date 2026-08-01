export type Language = "en" | "hi" | "gu" | "nl" | "fr" | "ar";

export interface Translation {
  title: string;
  subtitle: string;
  // Navigation
  navHome: string;
  navAbout: string;
  navProducts: string;
  navServices: string;
  navPress: string;
  navBlog: string;
  navContact: string;
  navAboutCompany: string;
  navAboutCompanyDesc: string;
  navAboutStories: string;
  navAboutStoriesDesc: string;
  navAboutTeam: string;
  navAboutTeamDesc: string;

  // UI Labels & Selects
  selectLanguage: string;
  followUs: string;
  quickLinks: string;
  contactUs: string;
  allRightsReserved: string;
  privacyPolicy: string;
  termsOfService: string;
  cookiePolicy: string;
  getFreeConsultation: string;
  startProject: string;
  viewAllPosts: string;
  readMore: string;
  bookAppointment: string;
  getStartedNow: string;
  explore: string;
  returnHome: string;
  scrollLabel: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  exploreServices: string;
  verified: string;
  topRated: string;

  // Statistics (Vision/Landing)
  projectsCompleted: string;
  designAssets: string;
  happyClients: string;
  clientSatisfaction: string;
  clientGrowth: string;
  successStories: string;
  brandReach: string;

  // Global Growth/Mission
  globalGrowthPartner: string;
  fuerteMission: string;
  missionQuote: string;
  storySoFar: string;
  theHistory: string;
  storySoFarTitle: string;
  fuerteMissionTitle: string;

  // Expertise & Services
  expertiseDomains: string;
  expertiseSubtitle: string;
  expertiseDomainsTitle: string;
  expertiseSubtitleDesc: string;
  servicesTitle: string;
  servicesSubtitle: string;
  backToServices: string;
  serviceOverview: string;
  inDepthSolutions: string;
  advancedCapabilities: string;
  technicalSolutions: string;
  technicalSolutionsTitle: string;

  // 404
  error404: string;
  pageNotFound: string;
  pageNotFoundDesc: string;

  // Vision Section
  visionTitle: string;
  visionDesc: string;
  aboutUsLabel: string;

  // Products
  productsLabel: string;
  productsTitle: string;
  productsDesc: string;
  prodInventory: string;
  prodInventoryDesc: string;
  prodHealthcare: string;
  prodHealthcareDesc: string;
  prodCRM: string;
  prodCRMDesc: string;
  prodHRMS: string;
  prodHRMSDesc: string;
  prodParking: string;
  prodParkingDesc: string;

  // Services
  servicesLabel: string;
  servicesTitleMain: string;
  servicesDescMain: string;
  serBranding: string;
  serBrandingDesc: string;
  serBusConsult: string;
  serBusConsultDesc: string;
  serCoReg: string;
  serCoRegDesc: string;
  serShopify: string;
  serShopifyDesc: string;
  serSoftDev: string;
  serSoftDevDesc: string;
  serSMM: string;
  serSMMDesc: string;
  serAISEM: string;
  serAISEMDesc: string;
  serPerfMark: string;
  serPerfMarkDesc: string;
  serSEO: string;
  serSEODesc: string;
  serLocalSEO: string;
  serLocalSEODesc: string;
  serAppDev: string;
  serAppDevDesc: string;
  serAds: string;
  serAdsDesc: string;

  // Team
  teamLabel: string;
  teamTitle: string;
  teamDesc: string;
  teamCEO: string;
  teamCEORole: string;
  teamCEOQuote: string;
  teamCoFounder: string;
  teamCoFounderRole: string;
  teamCoFounderQuote: string;

  // Testimonials
  testimonialsLabel: string;
  testimonialsTitle: string;
  testimonialsDesc: string;
  test1Name: string;
  test1Company: string;
  test1Quote: string;
  test2Name: string;
  test2Company: string;
  test2Quote: string;
  test3Name: string;
  test3Company: string;
  test3Quote: string;
  test4Name: string;
  test4Company: string;
  test4Quote: string;

  // General Sections
  appointmentTitle: string;
  appointmentDescription: string;
  industriesLabel: string;
  industriesTitle: string;
  industriesDesc: string;
  blogLabel: string;
  blogTitle: string;
  blogDesc: string;
  
  // Footer
  footerDesc: string;
  snapshot: string;
  readyToElevate: string;
  joinSuccessful: string;
  overviewTitle: string;
  overviewHeroSubtitle: string;
  overviewFullStory: string;
  overviewGetInTouch: string;
  overviewMissionSubtitle: string;
  whoWeAre: string;
  ourFullStory: string;
  getInTouch: string;
  meetTeam: string;
  innovation: string;
  collaboration: string;
  viewProgress: string;
  ctaTitle: string;
  ctaButton: string;
  navTeam: string;
  navStories: string;

  // Stats
  statProjects: string;
  statClients: string;
  statYears: string;
  statTeam: string;
  // Sub-items
  subBillingSphere: string;
  subPOS: string;
  subDelivery: string;
  subLab: string;
  subAppointment: string;
  subHospital: string;
  subSpa: string;
  subBeOnTime: string;
  subParking: string;
  // Press & Media
  pressHeroTitle: string;
  pressHeroSubtitle: string;
  featuredInTitle: string;
  pressCoverageTitle: string;
  mediaContactTitle: string;
  mediaContactDesc: string;
  mediaContactEmail: string;
  pressCard1Title: string;
  pressCard1Source: string;
  pressCard1Date: string;
  pressCard1Desc: string;
  pressCard1Link: string;
  pressCard2Title: string;
  pressCard2Source: string;
  pressCard2Date: string;
  pressCard2Desc: string;
  pressCard2Link: string;
  pressCard3Title: string;
  pressCard3Source: string;
  pressCard3Date: string;
  pressCard3Desc: string;
  pressCard3Link: string;
  pressCard4Title: string;
  pressCard4Source: string;
  pressCard4Date: string;
  pressCard4Desc: string;
  pressCard4Link: string;
  // Blog Page
  blogHeroTitle: string;
  blogHeroSubtitle: string;
  blog1Title: string;
  blog1Desc: string;
  blog1Date: string;
  blog1Link: string;
  blog1Image: string;
  blog2Title: string;
  blog2Desc: string;
  blog2Date: string;
  blog2Link: string;
  blog2Image: string;
  blog3Title: string;
  blog3Desc: string;
  blog3Date: string;
  blog3Link: string;
  blog3Image: string;
  blog4Title: string;
  blog4Desc: string;
  blog4Date: string;
  blog4Link: string;
  blog4Image: string;
  blog5Title: string;
  blog5Desc: string;
  blog5Date: string;
  blog5Link: string;
  blog5Image: string;
  blog6Title: string;
  blog6Desc: string;
  blog6Date: string;
  blog6Link: string;
  blog6Image: string;
}


export const translations: Record<Language, Translation> = {
  en: {
    title: "Stories of Growth & Digital Success",
    subtitle: "We've partnered with 250+ businesses to transform their digital presence and drive measurable results.",
    clientGrowth: "Client Growth",
    successStories: "Success Stories",
    brandReach: "Brand Reach",
    ctaTitle: "Ready to transform your brand story?",
    ctaButton: "Get Started Now",
    navHome: "Home",
    navServices: "Services",
    navAbout: "About Us",
    navProducts: "Products",
    navPress: "Press & Media",
    navBlog: "Blog",
    navContact: "Contact",
    navAboutCompany: "Company Overview",
    navAboutCompanyDesc: "Learn about our journey, vision and impact",
    navAboutStories: "Customer Stories",
    navAboutStoriesDesc: "Success stories from our global clients",
    navAboutTeam: "Our Team",
    navAboutTeamDesc: "Meet the experts behind Fuerte",
    selectLanguage: "Select Language",
    followUs: "Follow Us",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    allRightsReserved: "All Rights Reserved",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    getFreeConsultation: "Get Free Consultation",
    navTeam: "Team",
    navStories: "Customer Stories",
    verified: "Verified",
    topRated: "Top Rated",
    startProject: "Start a Project",
    meetTeam: "Meet the Brilliant Minds Behind Our Innovations",
    innovation: "Innovation",
    collaboration: "Collaboration",
    viewProgress: "View progress",
    overviewTitle: "Who We Are",
    overviewHeroSubtitle: "All-in-one IT solutions designed to fuel your business growth from powerful branding and modern web development to hassle-free company registration trusted by entrepreneurs across the globe",
    overviewFullStory: "Our Full Story",
    overviewGetInTouch: "Get In Touch",
    projectsCompleted: "Projects Completed",
    designAssets: "Design Assets",
    happyClients: "Happy Clients",
    clientSatisfaction: "Client Satisfaction",
    fuerteMission: "Fuerte Mission",
    missionQuote: "Our outstanding team is ready to support you as you advance internationally as a company.",
    storySoFar: "Story So Far",
    theHistory: "The History",
    technicalSolutions: "Technical Solutions",
    expertiseDomains: "Expertise Domains",
    expertiseSubtitle: "A complete suite of services designed for your global business execution.",
    servicesTitle: "Our Expertise & Services",
    servicesSubtitle: "We provide comprehensive digital solutions to help your business thrive in the modern landscape.",
    backToServices: "Back to All Services",
    serviceOverview: "Service Overview",
    inDepthSolutions: "In-Depth Solutions",
    advancedCapabilities: "Advanced Capabilities",
    readyToElevate: "Ready to elevate your business?",
    joinSuccessful: "Join hundreds of successful businesses scaling with our specialized solutions. Let's build your future today.",
    globalGrowthPartner: "Your Global Growth Partner",
    snapshot: "Snapshot",
    overviewMissionSubtitle: "You cannot run a large business without preparing how you will carry it out and starting from scratch. We have specialists prepared to address IT issues in the marketplace.",
    explore: "Explore",
    getStartedNow: "Get Started Now",
    footerDesc: "Premium global IT solutions powered by innovation. We help brands thrive in the digital age with custom technology and design.",
    whoWeAre: "Who We Are",
    ourFullStory: "Our Full Story",
    getInTouch: "Get In Touch",
    fuerteMissionTitle: "Fuerte Mission",
    storySoFarTitle: "Story So Far",
    expertiseDomainsTitle: "Expertise Domains",
    technicalSolutionsTitle: "Technical Solutions",
    expertiseSubtitleDesc: "A complete suite of services designed for your global business execution.",
    error404: "404",
    pageNotFound: "Page Not Found",
    pageNotFoundDesc: "Oops! The page you're looking for doesn't exist or has been moved.",
    returnHome: "Return Home",
    heroTitle: "Empowering Businesses with Innovative Digital Solutions",
    heroSubtitle: "From Branding to Web Development, App Creation, SEO, and Marketing We Turn Ideas into Results",
    exploreServices: "Explore Our Services",
    scrollLabel: "Scroll",
    visionTitle: "Our Vision",
    visionDesc: "At Fuerte Developers Pvt. Ltd., we help businesses thrive in the digital world. By combining creativity, strategy, and technology, we deliver solutions that engage your audience and drive measurable growth.",
    aboutUsLabel: "About Us",
    productsLabel: "Our Products",
    productsTitle: "Digital Products That Drive Performance",
    productsDesc: "Powerful Digital Products Built to Automate, Manage, and Grow Your Business",
    servicesLabel: "What We Do",
    servicesTitleMain: "Our Core Services",
    servicesDescMain: "We provide end-to-end solutions to help your business grow and succeed in the digital world.",
    teamLabel: "Our Team",
    teamTitle: "Meet the Experts Behind Our Success",
    teamDesc: "Driving innovation, strategy, and growth at Fuerte Developers Pvt. Ltd.",
    testimonialsLabel: "Client Feedbacks",
    testimonialsTitle: "Builds trust and shows real-world results.",
    testimonialsDesc: "At Fuerte Developers Pvt. Ltd., we pride ourselves on delivering innovative digital solutions that drive growth. Here's what our clients have to say about working with us.",
    appointmentTitle: "Ready to Transform Your Business?",
    appointmentDescription: "Partner with Fuerte Developers Pvt. Ltd. to bring your ideas to life. Our team delivers innovative digital solutions in branding, web & app development, SEO, and marketing to help your business grow.",
    bookAppointment: "Book Your Appointment",
    industriesLabel: "We Have Served",
    industriesTitle: "Diverse industry & The list goes on",
    industriesDesc: "From manufacturing to services, we’ve helped brands across multiple sectors with websites, apps, SEO, and performance marketing.",
    blogLabel: "Blog",
    blogTitle: "Insights & Updates",
    blogDesc: "Quick reads on branding, development, SEO, and marketing to help you make better digital decisions.",
    viewAllPosts: "View All Posts",
    readMore: "Read more",
    prodInventory: "Inventory & Billing",
    prodInventoryDesc: "Comprehensive solutions for managing stock, invoicing, and logistics.",
    prodHealthcare: "Aapka Care",
    prodHealthcareDesc: "Healthcare management tools for clinics, labs, and hospitals.",
    prodCRM: "Customize CRM",
    prodCRMDesc: "Bespoke relationship management for niche service industries.",
    prodHRMS: "HRMS",
    prodHRMSDesc: "Workforce management and productivity tracking systems.",
    prodParking: "Smart Parking",
    prodParkingDesc: "Intuitive parking management and reservation solutions.",
    serBranding: "Branding",
    serBrandingDesc: "We craft a unique brand identity that reflects your vision and values. From logo to messaging, we help your business stand out and stay memorable.",
    serBusConsult: "Business Consultation",
    serBusConsultDesc: "Get expert guidance to navigate challenges and make smarter business decisions. We help you build a clear roadmap for sustainable growth.",
    serCoReg: "Company Registration",
    serCoRegDesc: "We handle the entire legal registration process so you can start your business hassle-free. Fast, compliant, and fully guided from start to finish.",
    serShopify: "Shopify Store Development",
    serShopifyDesc: "We build custom Shopify stores designed to convert visitors into customers. Clean design, smooth functionality, and built to scale with your business.",
    serSoftDev: "Customized Software Development",
    serSoftDevDesc: "We design and develop software tailored to your exact business requirements. Scalable, secure, and built to solve your specific challenges.",
    serSMM: "Social Media Marketing (SMM)",
    serSMMDesc: "We create engaging content and strategies that grow your brand's online presence. Connect with your audience and build lasting customer relationships.",
    serAISEM: "AI Search Engine Marketing",
    serAISEMDesc: "We use AI-driven strategies to improve your visibility on search engines. Reach the right audience at the right time with smarter targeting.",
    serPerfMark: "Performance Marketing (Google / Meta)",
    serPerfMarkDesc: "We run data-driven ad campaigns across Google and Meta platforms. Every rupee spent is optimized to maximize your return on investment.",
    serSEO: "On/Off Page SEO",
    serSEODesc: "Search Engine Optimization helps websites rank higher on search engines like Google.",
    serLocalSEO: "Local SEO",
    serLocalSEODesc: "Local SEO helps businesses appear in location-based search results and attract nearby customers.",
    serAppDev: "Customize App Development",
    serAppDevDesc: "Custom App Development is the process of building applications according to specific business requirements.",
    serAds: "Google / Meta Ads",
    serAdsDesc: "Google Ads and Meta Ads help businesses reach targeted audiences through paid advertising campaigns.",
    teamCEO: "Aditya Prakash",
    teamCEORole: "Founder & CEO",
    teamCEOQuote: "Innovation is at the heart of everything we build. We turn ideas into digital success.",
    teamCoFounder: "Pooja Gangwani",
    teamCoFounderRole: "Co-Founder",
    teamCoFounderQuote: "Ensuring every project delivers value, quality, and client satisfaction.",
    test1Name: "Vishal Kavaiya",
    test1Company: "3 years ago",
    test1Quote: "Fuerte developers have been providing services for the past few years for our Graphic Design Posts. Overall, it's been a positive experience. Also, our company looks forward to receiving their services in the future.",
    test2Name: "Nevil Soni",
    test2Company: "4 years ago",
    test2Quote: "I am really Thankful to Fuerte Developers Who have Provided me best Graphic Designing Services for Jewelry Business and they well maintained my social accounts too.",
    test3Name: "Preyasi Rajora",
    test3Company: "5 years ago",
    test3Quote: "Had great experience. Highly qualified and experienced staff. Would recommend everyone to get their professional help, when in need. They aren't leaving you dissatisfied.",
    test4Name: "Aksa Sama",
    test4Company: "3 years ago",
    test4Quote: "Great experience. Thank you so much for a chance. I had learnt a lot and all of the members were very supportive and cooperative. Thank you for providing me with such an opportunity.",
    statProjects: "Projects Completed",
    statClients: "Happy Clients",
    statYears: "Years Experience",
    statTeam: "Expert Team",
    subBillingSphere: "Billing Sphere",
    subPOS: "Billing Sphere POS",
    subDelivery: "Delivery App",
    subLab: "Laboratory",
    subAppointment: "Appointment Booking",
    subHospital: "Hospital Management",
    subSpa: "Spa Management",
    subBeOnTime: "Be On Time",
    subParking: "Aapka Parking",
    // Press & Media
    pressHeroTitle: "Press & Media Appearances",
    pressHeroSubtitle: "Fuerte Developers Pvt. Ltd. is committed to building a solid digital fortress for brands worldwide. Our journey, which began in 2017, is driven by a vision to solve complex technical challenges and empower businesses in the digital age.",
    featuredInTitle: "Featured In",
    pressCoverageTitle: "Press Coverage",
    mediaContactTitle: "Get in Touch with Our Media Team",
    mediaContactDesc: "For press inquiries, interviews, or media kits, please reach out to our communications team.",
    mediaContactEmail: "media@fuertedevelopers.in",
    pressCard1Title: "Fuerte Developers Pvt. Ltd. - Providing a Strong Shield for Businesses in the Digital Age",
    pressCard1Source: "Hindustan Bytes",
    pressCard1Date: "December 13, 2022",
    pressCard1Desc: "Discover how Fuerte Developers Pvt. Ltd. is providing clients with innovative solutions to ease their business operations and drive higher profits.",
    pressCard1Link: "https://fuertedevelopers.in/press-media/hindustanbytes/",
    pressCard2Title: "Fuerte Developers Pvt. Ltd. – Providing a Strong Shield for Businesses in the Digital Age",
    pressCard2Source: "Entrepreneur Hunt",
    pressCard2Date: "December 13, 2022",
    pressCard2Desc: "A deep dive into the vision of Fuerte Developers Pvt. Ltd. and its commitment to solving complex technical challenges for modern businesses.",
    pressCard2Link: "https://fuertedevelopers.in/press-media/entrepreneurhunt/",
    pressCard3Title: "To protect businesses in the digital age, Fuerte Developers Pvt. Ltd. offers a solid digital fortress",
    pressCard3Source: "INC91",
    pressCard3Date: "December 13, 2022",
    pressCard3Desc: "Every business starts with an idea, and we at Fuerte Developers Pvt. Ltd. always provide a quality solution to that idea.",
    pressCard3Link: "https://fuertedevelopers.in/press-media/inc91/",
    pressCard4Title: "Fuerte Developers Pvt. Ltd. - Providing a Strong Shield for Businesses in the Digital Age",
    pressCard4Source: "DailyHunt",
    pressCard4Date: "December 13, 2022",
    pressCard4Desc: "Exploring the impact of Fuerte Developers Pvt. Ltd.'s technical solutions on the growth and security of businesses globally.",
    pressCard4Link: "https://fuertedevelopers.in/press-media/dailyhunt/",
    // Blog
    blogHeroTitle: "Insights & Updates",
    blogHeroSubtitle: "Expert perspectives on branding, development, SEO, and the future of digital marketing to help your business scale.",
    blog1Title: "Tips to Improve Your Local Ranking on Google",
    blog1Desc: "Moving forward into the Local SEO space in 2026 feels like you'd be looking for a moving target. With AI shaping the way search results are displayed...",
    blog1Date: "April 2, 2026",
    blog1Link: "https://fuertedevelopers.in/seo-digital-marketing/tips-to-improve-your-local-ranking-on-google/",
    blog1Image: "/assets/blog/local_seo_ranking.png",
    blog2Title: "Why Google Reviews Matter So Much to Local SEO Success in 2026",
    blog2Desc: "Having visibility through search results plays a vital role in many aspects of business today. Google Reviews are a cornerstone of local SEO, boosting rankings and trust...",
    blog2Date: "April 1, 2026",
    blog2Link: "https://fuertedevelopers.in/seo-digital-marketing/why-google-reviews-matter-so-much-to-local-seo-success-in-2026/",
    blog2Image: "/assets/blog/google_reviews_seo.png",
    blog3Title: "How AI and SGE Are Shaping Search Strategy for the Future",
    blog3Desc: "In the past year there has been more change in the world of search than there has been in the previous decade, primarily due to the rise of AI and Search Generative Experience...",
    blog3Date: "March 31, 2026",
    blog3Link: "https://fuertedevelopers.in/ai/how-ai-and-sge-are-shaping-search-strategy-for-the-future/",
    blog3Image: "/assets/blog/ai_search_strategy.png",
    blog4Title: "How Google Business Profile Helps Local Businesses",
    blog4Desc: "Visibility in today's digital world is essential, especially for local companies. An optimized Google Business Profile is key to standing out from competitors and attracting customers...",
    blog4Date: "March 30, 2026",
    blog4Link: "https://fuertedevelopers.in/seo-digital-marketing/how-google-business-profile-helps-local-businesses/",
    blog4Image: "/assets/blog/google_business_profile.png",
    blog5Title: "WhatsApp Marketing Strategy for Small Business",
    blog5Desc: "Smaller businesses often fail not because of budget, but due to a slower speed of response. WhatsApp has become a vital tool for immediate customer engagement and conversion...",
    blog5Date: "March 28, 2026",
    blog5Link: "https://fuertedevelopers.in/seo-digital-marketing/whatsapp-marketing-strategy-for-small-business/",
    blog5Image: "/assets/blog/whatsapp_marketing_small_biz.png",
    blog6Title: "Local SEO Strategies That Help Businesses Rank Higher on Google Maps",
    blog6Desc: "Google Maps is often the first place potential customers look for local services. Implementing effective Local SEO strategies can significantly boost your visibility and search rankings...",
    blog6Date: "March 27, 2026",
    blog6Link: "https://fuertedevelopers.in/seo-digital-marketing/local-seo-strategies-that-help-businesses-rank-higher-on-google-maps/",
    blog6Image: "/assets/blog/local_seo_google_maps.png"
  },

  hi: {} as any,
  gu: {} as any,
  nl: {} as any,
  fr: {} as any,
  ar: {} as any
};

translations.hi = translations.en;
translations.gu = translations.en;
translations.nl = translations.en;
translations.fr = translations.en;
translations.ar = translations.en;

