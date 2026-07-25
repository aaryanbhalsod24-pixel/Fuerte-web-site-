import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Folder, User } from "lucide-react";
import FadeIn from "@/components/landing/FadeIn";

type ApiBlog = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullContent: string;
  featuredImage: string;
  category: string;
  tags?: string;
  author?: string;
  publishDate: string;
};

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5001/api";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<ApiBlog | null>(null);
  const [related, setRelated] = useState<ApiBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setNotFound(false);
    window.scrollTo(0, 0);

    const load = async () => {
      try {
        const [blogRes, listRes] = await Promise.all([
          fetch(`${API_URL}/blogs/slug/${slug}`).then((r) => r.json()),
          fetch(`${API_URL}/blogs/published?limit=4`).then((r) => r.json()),
        ]);
        if (cancelled) return;

        if (blogRes.success && blogRes.data) {
          setBlog(blogRes.data);
        } else {
          setNotFound(true);
        }

        if (listRes.success && Array.isArray(listRes.data)) {
          setRelated(listRes.data);
        }
      } catch {
        if (!cancelled) setNotFound(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center text-muted-foreground">
        Loading...
      </div>
    );
  }

  if (notFound || !blog) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = related.filter((p) => p._id !== blog._id).slice(0, 3);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <section className="py-12 md:py-16 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <FadeIn>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs mb-5">
              <span className="flex items-center gap-2 font-bold text-primary uppercase tracking-widest">
                <Folder size={14} />
                {blog.category}
              </span>
              <span className="flex items-center gap-2 text-muted-foreground font-medium">
                <User size={14} />
                {blog.author || "Admin"}
              </span>
              <span className="flex items-center gap-2 text-muted-foreground font-medium">
                <Calendar size={14} />
                {blog.publishDate}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-5xl font-black tracking-tight leading-tight">
              {blog.title}
            </h1>
          </FadeIn>
        </div>
      </section>

      {blog.featuredImage && (
        <FadeIn>
          <div className="max-w-5xl mx-auto px-6 mt-10 mb-12">
            <div className="aspect-[16/9] rounded-[2rem] overflow-hidden border border-border/50 shadow-xl">
              <img src={blog.featuredImage} alt={blog.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </FadeIn>
      )}

      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            {blog.fullContent ? (
              /<[a-z][\s\S]*>/i.test(blog.fullContent) ? (
                <div
                  className="blog-content text-base md:text-lg text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: blog.fullContent }}
                />
              ) : (
                <div className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {blog.fullContent}
                </div>
              )
            ) : (
              <div className="text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {blog.shortDescription}
              </div>
            )}
          </FadeIn>

          {/* Tags section removed */}
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-20 px-6 bg-secondary/5 border-t border-border/40">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-10">
                You Might Also Like
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, i) => (
                <FadeIn key={post._id} delay={i * 0.08}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block rounded-[1.5rem] overflow-hidden border border-border/50 bg-card hover:border-primary/30 hover:shadow-xl transition-all h-full"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-primary">
                        Read More <ArrowRight size={12} />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
