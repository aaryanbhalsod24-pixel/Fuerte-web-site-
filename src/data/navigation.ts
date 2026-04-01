import {
  ShoppingCart,
  Smartphone,
  Search,
  MapPin,
  Share2,
  MousePointerClick,
  CreditCard,
  Clock,
  Car,
  Users,
  Hospital,
  Sparkles,
  FlaskConical,
  Truck,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { SiX } from "react-icons/si";

export const navLinks = [
  { label: "Home", href: "/" },

  {
    label: "About",
    href: "/#vision",
    dropdown: [
      {
        label: "Company Overview",
        description:
          "Learn about our vision, mission, and how we empower businesses.",
        href: "/company-overview",
        icon: Users,
      },
      {
        label: "Customer Stories",
        description:
          "Real-world success stories from our satisfied global clients.",
        href: "/customer-stories",
        icon: Sparkles,
      },
      {
        label: "Our Team",
        description: "Meet the experts behind Fuerte Developers.",
        href: "/team",
        icon: Users,
      },
    ],
  },

  {
    label: "Products",
    href: "/#products",
    dropdown: [
      {
        label: "Inventory & Billing",
        href: "https://billingsphere.com/",
        icon: CreditCard,
        subItems: [
          { label: "Billing Sphere", href: "https://billingsphere.com/" },
          { label: "Billing Sphere POS", href: "https://billingspherepos.netlify.app/" },
          { label: "Delivery App", href: "https://fdsupermartdelivery.netlify.app/" },
        ],
      },
      {
        label: "Aapka Care",
        href: "https://aapka-care-new.netlify.app/",
        icon: Hospital,
        subItems: [
          { label: "Laboratory", href: "https://micasacare.com/" },
          { label: "Appointment Booking", href: "https://aapka-care-new.netlify.app/" },
          { label: "Hospital Management", href: "https://aapka-care-new.netlify.app/" },
        ],
      },
      {
        label: "Customize CRM",
        href: "https://crmautogrowth.netlify.app/",
        icon: Users,
        subItems: [
          { label: "Spa Management", href: "https://spamanager.netlify.app/" },
        ],
      },
      {
        label: "HRMS",
        href: "https://beontimeofficial.com/",
        icon: Clock,
        subItems: [
          { label: "Be On Time", href: "https://beontimeofficial.com/" },
        ],
      },
      {
        label: "Smart Parking",
        href: "https://appka-parking-new.netlify.app/",
        icon: Car,
        subItems: [
          { label: "Aapka Parking", href: "https://appka-parking-new.netlify.app/" },
        ],
      },
    ],
  },

  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Shopify Development",
        description: "High-converting online stores.",
        href: "/services/shopify-store-development",
        icon: ShoppingCart,
      },
      {
        label: "App Development",
        description: "Customized mobile and web applications.",
        href: "/services/customize-app-development",
        icon: Smartphone,
      },
      {
        label: "On/Off Page SEO",
        description: "Technical optimization for better ranking.",
        href: "/services/on-off-page-seo",
        icon: Search,
      },
      {
        label: "Local SEO",
        description: "Local search and maps visibility.",
        href: "/services/local-seo",
        icon: MapPin,
      },
      {
        label: "Social Media",
        description: "Engagement through strategic campaigns.",
        href: "/services/social-media-marketing",
        icon: Share2,
      },
      {
        label: "Google / Meta Ads",
        description: "Targeted paid advertising results.",
        href: "/services/google-meta-ads",
        icon: MousePointerClick,
      },
    ],
  },

  { label: "Press & Media", href: "/#press" },

  { label: "Blog", href: "/#blog" },

  { label: "Contact", href: "/#contact" },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/#vision" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/#contact" },
  ],

  socialLinks: [
    { label: "Facebook", href: "https://www.facebook.com/fuertedevelopers/", icon: Facebook },
    { label: "Instagram", href: "https://www.instagram.com/fuerte_developers?igshid=ky7ulp42smfv", icon: Instagram },
    { label: "LinkedIn", href: "https://in.linkedin.com/company/fuertedevelopers", icon: Linkedin },
    { label: "X", href: "https://x.com/FuerteDeveloper",  icon: SiX, },
  ],
};