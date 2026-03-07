import {
  ShoppingCart, Smartphone, Search, MapPin, Share2, MousePointerClick,
  CreditCard, Clock, Car, Users, Hospital, Sparkles, FlaskConical, Truck,
  Facebook, Instagram, Linkedin, Twitter,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#vision" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const products = [
  {
    name: "BillingSphere POS",
    description: "Complete POS and e-commerce solution managing sales, inventory, billing, and online store operations seamlessly.",
    icon: CreditCard,
  },
  {
    name: "Be On Time (BOT)",
    description: "Smart attendance system tracking employee time, productivity, shifts, and automated workforce performance reports.",
    icon: Clock,
  },
  {
    name: "Smart Parking App",
    description: "Find, reserve, and pay parking spaces easily using mobile apps on Android and iOS.",
    icon: Car,
  },
  {
    name: "Customized CRM System",
    description: "Manage leads, customers, sales pipelines, and relationships through one centralized intelligent business platform.",
    icon: Users,
  },
  {
    name: "Hospital Appointment & Listing System",
    description: "Manage patient bookings, doctor schedules, medical records, and hospital listings efficiently in one platform.",
    icon: Hospital,
  },
  {
    name: "Spa Management System",
    description: "Streamline spa appointments, staff scheduling, services, and customer management with an all-in-one solution.",
    icon: Sparkles,
  },
  {
    name: "Laboratory Management System",
    description: "Digitize lab operations including patient registration, test processing, reports generation, and secure data management.",
    icon: FlaskConical,
  },
  {
    name: "Delivery Management App",
    description: "Track orders, optimize delivery routes, and provide real-time updates integrated with Google Maps.",
    icon: Truck,
  },
];

export const services = [
  {
    name: "Shopify Store Development",
    description: "Build high-converting online stores on Shopify tailored to your products, brand identity, and customer journey.",
    icon: ShoppingCart,
  },
  {
    name: "Customize App Development",
    description: "Design and develop fully customized mobile or web apps that match your unique business workflow and user needs.",
    icon: Smartphone,
  },
  {
    name: "On Page SEO",
    description: "Improve your website's ranking with comprehensive on-page, off-page, and technical optimization strategies.",
    icon: Search,
  },
  {
    name: "Off Page SEO",
    description: "Attract nearby customers by optimizing your business for local searches, maps visibility, and location-based traffic.",
    icon: MapPin,
  },
  {
    name: "Social Media Marketing",
    description: "Grow your brand presence and engagement through strategic campaigns on platforms like Facebook, Instagram, and more.",
    icon: Share2,
  },
  {
    name: "Google / Meta Ads",
    description: "Drive targeted traffic and measurable results with paid campaigns on Google and Meta advertising platforms.",
    icon: MousePointerClick,
  },
];

export const stats = [
  { value: "10,000+", label: "Clients" },
  { value: "10+", label: "Years" },
  { value: "100+", label: "Team" },
];

export const teamMembers = [
  {
    name: "Aditya Prakash",
    role: " Founder & CEO",
    quote: "Innovation is at the heart of everything we build. We turn ideas into digital success.",
    image: "team-ceo",
  },
  {
    name: "Pooja Gangwani",
    role: "Co-Founder",
    quote: "Ensuring every project delivers value, quality, and client satisfaction.",
    image: "team-cofounder",
  },
];

export const testimonials = [
  {
    name: "Rahul Sharma",
    company: "TechVista Solutions",
    quote: "Fuerte Developers transformed our online presence completely. Their team delivered a stunning Shopify store that increased our sales by 150% within three months.",
  },
  {
    name: "Priya Mehta",
    company: "GreenLeaf Organics",
    quote: "The CRM system they built for us streamlined our entire sales process. Exceptional quality and outstanding support throughout the project.",
  },
  {
    name: "Amit Patel",
    company: "QuickServe Logistics",
    quote: "Their delivery management app revolutionized our operations. Real-time tracking and route optimization saved us hours every day.",
  },
  {
    name: "Sneha Reddy",
    company: "Wellness Hub Spa",
    quote: "The spa management system is exactly what we needed. Booking, scheduling, and customer management — all in one beautiful platform.",
  },
];

export const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#vision" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { label: "Facebook", href: "#", icon: Facebook },
    { label: "Instagram", href: "#", icon: Instagram },
    { label: "LinkedIn", href: "#", icon: Linkedin },
    { label: "Twitter", href: "#", icon: Twitter },
  ],
};
