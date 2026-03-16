import { CreditCard, Clock, Car, Users, Hospital, Sparkles, FlaskConical, Truck } from "lucide-react";

export const products = [
  {
    slug: "billingsphere",
    name: "BillingSphere POS",
    description: "Complete POS and e-commerce solution managing sales, inventory, billing, and online store operations seamlessly.",
    icon: CreditCard,
  },
  {
    slug: "beontime",
    name: "Be On Time (BOT)",
    description: "Smart attendance system tracking employee time, productivity, shifts, and automated workforce performance reports.",
    icon: Clock,
    externalUrl: "https://beontimeofficial.com/",
  },
  {
    slug: "smart-parking",
    name: "Smart Parking App",
    description: "Find, reserve, and pay parking spaces easily using mobile apps on Android and iOS.",
    icon: Car,
  },
  {
    slug: "crm",
    name: "Customized CRM System",
    description: "Manage leads, customers, sales pipelines, and relationships through one centralized intelligent business platform.",
    icon: Users,
  },
  {
    slug: "hospital-appointment",
    name: "Hospital Appointment & Listing System",
    description: "Manage patient bookings, doctor schedules, medical records, and hospital listings efficiently in one platform.",
    icon: Hospital,
  },
  {
    slug: "spa-management",
    name: "Spa Management System",
    description: "Streamline spa appointments, staff scheduling, services, and customer management with an all-in-one solution.",
    icon: Sparkles,
  },
  {
    slug: "laboratory-system",
    name: "Laboratory Management System",
    description: "Digitize lab operations including patient registration, test processing, reports generation, and secure data management.",
    icon: FlaskConical,
  },
  {
    slug: "delivery-app",
    name: "Delivery Management App",
    description: "Track orders, optimize delivery routes, and provide real-time updates integrated with Google Maps.",
    icon: Truck,
  },
];
