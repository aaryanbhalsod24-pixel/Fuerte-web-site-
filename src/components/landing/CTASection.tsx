import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import { useTranslation } from "@/contexts/LanguageContext";
import BlogCard from "./BlogCard";
import { getBlogs } from "@/data/blogData";

const industriesServed = [
  "Jewellery Manufacturing",
  "Clothing & Accessories",
  "Food & Beverages",
  "Interior",
  "Ceramic",
  "Transportation",
  "Hospital",
  "Real Estate",
  "Construction",
  "Accommodation",
  "Courier",
  "Education",
  "Electric Equipment",
  "Finance & Insurance",
  "Furniture & Furnishing",
  "Appliances",
  "Agriculture",
  "Machinery Manufacturing",
  "Paper Manufacturing",
  "Telecommunications",
  "Textiles Mills",
  "Wholesale Trade & Many More",
  "Building Material",
  "Stores",
] as const;

const CTASection = () => {
  const { t } = useTranslation();
  const blogs = getBlogs(t).slice(0, 3);

  return (
    <section className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-20">
          <FadeIn>
            <div className="border border-border rounded-2xl p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {t.industriesLabel}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gradient">
                {t.industriesTitle}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4 mb-8 max-w-3xl">
                {t.industriesDesc}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {industriesServed.map((industry) => (
                  <li key={industry}>
                    <div className="h-full border border-border rounded-full px-4 py-2 text-sm bg-background hover:bg-secondary transition-colors text-center">
                      {industry}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <div className="flex items-end justify-between gap-6 mb-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    {t.blogLabel}
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-gradient">
                    {t.blogTitle}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-2xl">
                    {t.blogDesc}
                  </p>
                </div>
                <Link
                  to="/blog"
                  className="shrink-0 bg-black text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-xl shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 transition-all active:scale-95"
                >
                  {t.viewAllPosts}
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {blogs.map((post, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <BlogCard {...post} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
