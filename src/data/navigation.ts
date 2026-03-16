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
} from "lucide-react";

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
        href: "/#vision",
        icon: Users,
      },
      {
        label: "Customer Stories",
        description:
          "Real-world success stories from our satisfied global clients.",
        href: "/#testimonials",
        icon: Sparkles,
      },
      {
        label: "Our Team",
        description: "Meet the experts behind Fuerte Developers.",
        href: "/#team",
        icon: Users,
      },
    ],
  },

  {
    label: "Products",
    href: "/#products",
    dropdown: [
      {
        label: "BillingSphere POS",
        description: "Complete POS and e-commerce solution.",
        href: "https://billingsphere.com/",
        icon: CreditCard,
      },
      {
        label: "Be On Time (BOT)",
        description: "Smart attendance and productivity system.",
        href: "https://beontimeofficial.com/",
        icon: Clock,
      },
      {
        label: "Smart Parking App",
        description: "Easy parking reservations and payments.",
        href: "https://appka-parking-new.netlify.app/",
        icon: Car,
      },
      {
        label: "Customized CRM System",
        description: "Centralized intelligent business platform.",
        href: "https://appka-parking-new.netlify.app/",
        icon: Users,
      },
      {
        label: "Hospital Appointment",
        description: "Efficient healthcare management platform.",
        href: "https://aapka-care-new.netlify.app/",
        icon: Hospital,
      },
      {
        label: "Spa Management",
        description: "Streamline spa services and bookings.",
        href: "https://micasacare.com/",
        icon: Sparkles,
      },
      {
        label: "Laboratory System",
        description: "Digitize lab operations and reports.",
        href: "https://micasacare.com/",
        icon: FlaskConical,
      },
      {
        label: "Delivery App",
        description: "Real-time tracking and route optimization.",
        href: "https://micasacare.com/",
        icon: Truck,
      },
    ],
  },

  {
    label: "Services",
    href: "/#services",
    dropdown: [
      {
        label: "Shopify Development",
        description: "High-converting online stores.",
        href: "/services/shopify-development",
        icon: ShoppingCart,
      },
      {
        label: "App Development",
        description: "Customized mobile and web applications.",
        href: "/services/app-development",
        icon: Smartphone,
      },
      {
        label: "On/Off Page SEO",
        description: "Technical optimization for better ranking.",
        href: "/services/seo",
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
        href: "/services/social-media",
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
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ],

  socialLinks: [
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Twitter", href: "#", icon: Twitter },
  ],
};