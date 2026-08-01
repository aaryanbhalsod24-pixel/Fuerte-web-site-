import React, { useEffect, useState } from "react";
import FadeIn from "@/components/landing/FadeIn";
import { useTranslation } from "@/contexts/LanguageContext";
import BlogCard, { BlogCardSkeleton } from "@/components/landing/BlogCard";
import { getBlogs } from "@/data/blogData";
import {
  Sparkles,
  Search,
  ArrowDownCircle,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

type BlogItem = {
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
};

type ApiBlog = {
  _id?: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullContent: string;
  featuredImage: string;
  category: string;
  tags?: string;
  publishDate: string;
  customUrl?: string;
};

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";
const PAGE_SIZE = 9;

// Builds a compact page list like [1, 2, "...", 8, 9], keeping the current
// page's neighbors visible and collapsing far-away runs into an ellipsis.
const getPageNumbers = (current: number, total: number): (number | "...")[] => {
  const boundaryCount = 2;
  const siblingCount = 1;
  const pageSet = new Set<number>();

  for (let i = 1; i <= boundaryCount; i++) pageSet.add(i);
  for (let i = total - boundaryCount + 1; i <= total; i++) pageSet.add(i);
  for (let i = current - siblingCount; i <= current + siblingCount; i++) pageSet.add(i);

  const pages = [...pageSet].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const result: (number | "...")[] = [];
  pages.forEach((p, idx) => {
    if (idx === 0) {
      result.push(p);
      return;
    }
    const prev = pages[idx - 1];
    if (p - prev === 2) result.push(prev + 1);
    else if (p - prev > 2) result.push("...");
    result.push(p);
  });

  return result;
};

const BlogPage = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  // Debounce search input, then reset to page 1
  useEffect(() => {
    const handle = setTimeout(() => {
      setSearchTerm(searchInput);
      setPage(1);
    }, 400);
    return () => clearTimeout(handle);
  }, [searchInput]);

  useEffect(() => {
    let cancelled = false;

    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({ page: String(page), limit: String(PAGE_SIZE) });
        if (searchTerm) params.set("search", searchTerm);

        const res = await fetch(`${API_URL}/blogs/published?${params}`);
        const json = await res.json();
        if (cancelled) return;

        if (json.success && Array.isArray(json.data) && (json.data.length > 0 || searchTerm || page > 1)) {
          const mappedBlogs: BlogItem[] = json.data.map((blog: ApiBlog) => ({
            title: blog.title,
            description: blog.shortDescription,
            date: blog.publishDate,
            image: blog.featuredImage,
            link: blog.customUrl || `/blog/${blog.slug}`,
          }));

          setBlogs(mappedBlogs);
          setTotalPages(json.pagination?.totalPages || 1);
          setUsingFallback(false);
        } else {
          setBlogs(getBlogs(t));
          setTotalPages(1);
          setUsingFallback(true);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        if (!cancelled) {
          setBlogs(getBlogs(t));
          setTotalPages(1);
          setUsingFallback(true);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchBlogs();
    return () => {
      cancelled = true;
    };
  }, [t, page, searchTerm]);

  const filteredBlogs = usingFallback
    ? blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogs;

  return (
    <div className="pt-24 min-h-screen bg-background overflow-hidden">
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
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/40 group-focus-within:text-primary transition-colors"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
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

      <section className="py-24 px-6 bg-secondary/5 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-16">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <TrendingUp size={20} />
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Latest Stories
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {loading
              ? Array.from({ length: PAGE_SIZE }).map((_, i) => <BlogCardSkeleton key={i} />)
              : filteredBlogs.map((blog, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <BlogCard {...blog} />
                  </FadeIn>
                ))}
          </div>

          {!loading && filteredBlogs.length === 0 && (
            <div className="text-center py-20 opacity-50">
              <p>No articles found matching your search.</p>
            </div>
          )}

          {!loading && !usingFallback && totalPages > 1 && (
            <div className="flex items-center justify-center flex-wrap gap-2 mt-16">
              {getPageNumbers(page, totalPages).map((p, idx) =>
                p === "..." ? (
                  <span
                    key={`dots-${idx}`}
                    className="px-1 text-muted-foreground/50 font-bold select-none"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    aria-label={`Page ${p}`}
                    aria-current={p === page ? "page" : undefined}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-colors ${
                      p === page
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    {p}
                  </button>
                )
              )}

              {page < totalPages && (
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="ml-3 flex items-center gap-1 font-bold text-sm text-foreground hover:text-primary transition-colors"
                >
                  Next Post
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="relative rounded-[3rem] overflow-hidden bg-[#1A1A1A] border border-white/10 p-12 md:p-20 text-center group">
              <div className="absolute inset-0 bg-white/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <h2 className="font-display text-4xl md:text-5xl font-black mb-8 leading-tight text-white">
                Never Miss an <br />{" "}
                <span className="text-blue-400 italic">Update</span>
              </h2>
              <p className="max-w-xl mx-auto text-white/70 text-lg mb-12 leading-relaxed">
                Stay ahead of the curve with our weekly newsletter featuring
                the latest in tech, branding, and digital growth.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/30 transition-all font-medium"
                />
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-white/90 rounded-2xl font-bold text-sm shadow-xl shadow-white/5 hover:-translate-y-1 transition-all active:scale-95 whitespace-nowrap">
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
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default BlogPage;