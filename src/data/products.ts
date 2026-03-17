import { CreditCard, Clock, Car, Users, Hospital, Sparkles, FlaskConical, Truck } from "lucide-react";

export const products = [
  {
    slug: "inventory-billing",
    name: "Inventory & Billing",
    description: "Comprehensive solutions for managing stock, invoicing, and logistics.",
    icon: CreditCard,
    externalUrl: "https://billingsphere.com/",
    subItems: [
      {
        name: "Billing Sphere",
        description: "Complete billing and invoicing solution for businesses.",
        url: "https://billingsphere.com/",
      },
      {
        name: "Billing Sphere POS",
        description: "POS system to manage sales, inventory, and transactions.",
        url: "https://billingsphere.com/",
      },
      {
        name: "Delivery App",
        description: "Manage and track deliveries with real-time updates.",
        url: "https://fdsupermartdelivery.netlify.app/",
      },
    ],
  },
  {
    slug: "aapka-care",
    name: "Aapka Care",
    description: "Healthcare management tools for clinics, labs, and hospitals.",
    icon: Hospital,
    externalUrl: "https://aapka-care-new.netlify.app/",
    subItems: [
      {
        name: "Laboratory",
        description: "Manage lab operations, reports, and patient data.",
        url: "https://micasacare.com/",
      },
      {
        name: "Appointment Booking",
        description: "Easy scheduling system for patients and doctors.",
        url: "https://aapka-care-new.netlify.app/",
      },
      {
        name: "Hospital Management",
        description: "Complete hospital workflow and records management.",
        url: "https://aapka-care-new.netlify.app/",
      },
    ],
  },
  {
    slug: "customize-crm",
    name: "Customize CRM",
    description: "Bespoke relationship management for niche service industries.",
    icon: Users,
    externalUrl: "https://crmautogrowth.netlify.app/",
    subItems: [
      {
        name: "Spa Management",
        description: "Manage customers, bookings, and spa services efficiently.",
        url: "https://spamanager.netlify.app/",
      },
    ],
  },
  {
    slug: "hrms",
    name: "HRMS",
    description: "Workforce management and productivity tracking systems.",
    icon: Clock,
    externalUrl: "https://beontimeofficial.com/",
    subItems: [
      {
        name: "Be On Time",
        description: "Track employee attendance, shifts, and productivity.",
        url: "https://beontimeofficial.com/",
      },
    ],
  },
  {
    slug: "smart-parking",
    name: "Smart Parking",
    description: "Intuitive parking management and reservation solutions.",
    icon: Car,
    externalUrl: "https://appka-parking-new.netlify.app/",
    subItems: [
      {
        name: "Aapka Parking",
        description: "Smart parking system for booking and managing spaces.",
        url: "https://appka-parking-new.netlify.app/",
      },
    ],
  },
];
