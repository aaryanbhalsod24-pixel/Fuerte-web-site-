import React from "react";
import FadeIn from "@/components/landing/FadeIn";
import { useTranslation } from "@/contexts/LanguageContext";
import BlogCard from "@/components/landing/BlogCard";
import { getBlogs } from "@/data/blogData";
import {
  Sparkles,
  Search,
  ArrowDownCircle,
  TrendingUp,
} from "lucide-react";

const BlogPage = () => {
  const { t } = useTranslation();

  const blogs = getBlogs(t);

  return (
    <div className="pt-24 min-h-screen bg-background overflow-hidden">
      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative py-24 pb-32">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/10 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-purple-500/10 blur-[130px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Sparkles size={14} className="animate-spin-slow" />
              {t.blogLabel}
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight mb-8 text-gradient">
              {t.blogHeroTitle}
            </h1>
            
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed opacity-70 mb-12">
              {t.blogHeroSubtitle}
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="relative group w-full max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-focus-within:text-primary transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-6 py-4 rounded-2xl bg-secondary/30 border border-border/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all font-medium backdrop-blur-sm"
                />
              </div>
            </div>
          </FadeIn>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
            <ArrowDownCircle size={32} />
          </div>
        </div>
      </section>

      {/* ─── BLOG GRID ───────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-secondary/5 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-16">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <TrendingUp size={20} />
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight">Latest Stories</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {blogs.map((blog, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <BlogCard {...blog} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─────────────────────────────────────────── */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 p-12 md:p-20 text-center group">
              <div className="absolute inset-0 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight">
                Never Miss an <br /> <span className="text-primary italic">Update</span>
              </h2>
              <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-12 opacity-80 leading-relaxed">
                Stay ahead of the curve with our weekly newsletter featuring the latest in tech, branding, and digital growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-2xl bg-background border border-border/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all font-medium"
                />
                <button className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all active:scale-95 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .text-gradient {
          background: linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
