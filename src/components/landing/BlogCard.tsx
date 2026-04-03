import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, image, link }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative bg-card border border-border/50 rounded-[2rem] overflow-hidden flex flex-col h-full hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-4">
          <Calendar size={14} />
          {date}
        </div>

        <h3 className="font-display text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-8 line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
          {description}
        </p>

        <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group/link"
          >
            {t.readMore}
            <ArrowRight size={14} className="group-hover/link:translate-x-1.5 transition-transform" />
          </a>

          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      {/* Ghost background highlight */}
      <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};

export default BlogCard;
