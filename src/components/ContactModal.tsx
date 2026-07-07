import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Phone, Mail, Calendar, MapPin, Building, BookOpen, MessageSquare } from "lucide-react";
import { useModal } from "@/contexts/ModalContext";
import { useTranslation } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5050/api";
const PROJECT_REQUEST_SOURCE = "fuertedevelopers.com";

const ContactModal = () => {
  const { isModalOpen, closeModal } = useModal();
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    address: "",
    city: "",
    requirement: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/project-requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: PROJECT_REQUEST_SOURCE }),
      });
      const json = await res.json();
      if (json.success) {
        toast({
          title: "Request submitted!",
          description: "We've received your project details and will get back to you shortly.",
        });
        closeModal();
        setFormData({
          name: "",
          phone: "",
          email: "",
          date: "",
          address: "",
          city: "",
          requirement: "",
          description: "",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: json.message || "Please try again in a moment.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Could not reach the server. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-card border border-border shadow-2xl rounded-[2.5rem] overflow-y-auto max-h-[90vh] custom-scrollbar"
          >
            {/* Header */}
            <div className="p-8 pb-0 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-display font-black tracking-tight text-gradient">
                  Start Your Project
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  Fill out the details below and we'll get back to you shortly.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-3 rounded-full hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
                {/* Name */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <User size={12} className="text-primary" /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-5 py-3.5 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-sm font-medium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <Phone size={12} className="text-primary" /> Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    className="w-full px-5 py-3.5 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-sm font-medium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <Mail size={12} className="text-primary" /> Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hello@example.com"
                    className="w-full px-5 py-3.5 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-sm font-medium"
                  />
                </div>

                {/* Date */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <Calendar size={12} className="text-primary" /> Expected Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-sm font-medium"
                  />
                </div>

                {/* Address */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <MapPin size={12} className="text-primary" /> Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street name, Area"
                    className="w-full px-5 py-3.5 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-sm font-medium"
                  />
                </div>

                {/* City */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <Building size={12} className="text-primary" /> City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. New York"
                    className="w-full px-5 py-3.5 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-sm font-medium"
                  />
                </div>

                {/* Requirement */}
                <div className="col-span-full space-y-2 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <BookOpen size={12} className="text-primary" /> Your Requirement
                  </label>
                  <input
                    type="text"
                    name="requirement"
                    required
                    value={formData.requirement}
                    onChange={handleChange}
                    placeholder="Enter your specific requirement"
                    className="w-full px-5 py-3.5 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-sm font-medium"
                  />
                </div>

                {/* Description */}
                <div className="col-span-full space-y-2 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1 flex items-center gap-2">
                    <MessageSquare size={12} className="text-primary" /> Project Description
                  </label>
                  <textarea
                    name="description"
                    required
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements..."
                    className="w-full px-5 py-4 rounded-2xl bg-secondary/30 border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all text-sm font-medium resize-none shadow-inner"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 rounded-2xl font-bold text-sm tracking-widest uppercase shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      Submit Request
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </AnimatePresence>
  );
};

export default ContactModal;
