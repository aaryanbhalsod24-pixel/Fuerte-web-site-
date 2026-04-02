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
  serShopify: string;
  serShopifyDesc: string;
  serAppDev: string;
  serAppDevDesc: string;
  serSEO: string;
  serSEODesc: string;
  serLocalSEO: string;
  serLocalSEODesc: string;
  serSMM: string;
  serSMMDesc: string;
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
    visionDesc: "At Fuerte Developers, we help businesses thrive in the digital world. By combining creativity, strategy, and technology, we deliver solutions that engage your audience and drive measurable growth.",
    aboutUsLabel: "About Us",
    productsLabel: "Our Products",
    productsTitle: "Digital Products That Drive Performance",
    productsDesc: "Powerful Digital Products Built to Automate, Manage, and Grow Your Business",
    servicesLabel: "What We Do",
    servicesTitleMain: "Our Core Services",
    servicesDescMain: "We provide end-to-end solutions to help your business grow and succeed in the digital world.",
    teamLabel: "Our Team",
    teamTitle: "Meet the Experts Behind Our Success",
    teamDesc: "Driving innovation, strategy, and growth at Fuerte Developers Pvt Ltd.",
    testimonialsLabel: "Client Feedbacks",
    testimonialsTitle: "Builds trust and shows real-world results.",
    testimonialsDesc: "At Fuerte Developers, we pride ourselves on delivering innovative digital solutions that drive growth. Here's what our clients have to say about working with us.",
    appointmentTitle: "Ready to Transform Your Business?",
    appointmentDescription: "Partner with Fuerte Developers to bring your ideas to life. Our team delivers innovative digital solutions in branding, web & app development, SEO, and marketing to help your business grow.",
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
    serShopify: "Shopify Store Development",
    serShopifyDesc: "Shopify Store Development focuses on creating an online store where businesses can sell their products and services easily.",
    serAppDev: "Customize App Development",
    serAppDevDesc: "Custom App Development is the process of building applications according to specific business requirements.",
    serSEO: "On/Off Page SEO",
    serSEODesc: "Search Engine Optimization helps websites rank higher on search engines like Google.",
    serLocalSEO: "Local SEO",
    serLocalSEODesc: "Local SEO helps businesses appear in location-based search results and attract nearby customers.",
    serSMM: "Social Media Marketing",
    serSMMDesc: "Social Media Marketing helps businesses promote their products and services through social media platforms.",
    serAds: "Google / Meta Ads",
    serAdsDesc: "Google Ads and Meta Ads help businesses reach targeted audiences through paid advertising campaigns.",
    teamCEO: "Aditya Prakash",
    teamCEORole: "Founder & CEO",
    teamCEOQuote: "Innovation is at the heart of everything we build. We turn ideas into digital success.",
    teamCoFounder: "Pooja Gangwani",
    teamCoFounderRole: "Co-Founder",
    teamCoFounderQuote: "Ensuring every project delivers value, quality, and client satisfaction.",
    test1Name: "Rahul Sharma",
    test1Company: "TechVista Solutions",
    test1Quote: "Fuerte Developers transformed our online presence completely. Their team delivered a stunning Shopify store that increased our sales by 150% within three months.",
    test2Name: "Priya Mehta",
    test2Company: "GreenLeaf Organics",
    test2Quote: "The CRM system they built for us streamlined our entire sales process. Exceptional quality and outstanding support throughout the project.",
    test3Name: "Amit Patel",
    test3Company: "QuickServe Logistics",
    test4Name: "Sneha Reddy",
    test4Company: "Wellness Hub Spa",
    test4Quote: "The spa management system is exactly what we needed. Booking, scheduling, and customer management — all in one beautiful platform.",
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
    subParking: "Aapka Parking"
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

