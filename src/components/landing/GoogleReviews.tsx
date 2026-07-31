import FadeIn from "./FadeIn";

// Static Google Reviews — update these with your actual reviews from Google Business
const googleReviews = [
  {
    name: "Rajesh Mehta",
    rating: 5,
    text: "Fuerte Developers transformed our digital presence completely. Their SEO and social media strategies brought us a 3x increase in leads within just 3 months. Highly professional team!",
    date: "a month ago",
    initials: "RM",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Excellent work on our website redesign and digital marketing campaigns. The team is responsive, creative, and truly understands what clients need. Strongly recommend Fuerte!",
    date: "2 months ago",
    initials: "PS",
  },
  {
    name: "Amit Patel",
    rating: 5,
    text: "We partnered with Fuerte for our brand launch and the results exceeded expectations. Their expertise in content strategy and paid ads is unmatched in the industry.",
    date: "3 months ago",
    initials: "AP",
  },
  {
    name: "Sonal Desai",
    rating: 5,
    text: "Very impressed with the professionalism and quality of service. Fuerte Developers delivered everything on time and the ROI has been fantastic. Would definitely work with them again.",
    date: "3 months ago",
    initials: "SD",
  },
];

// Google "G" logo SVG
const GoogleG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="20"
    height="20"
    aria-hidden="true"
  >
    <path
      fill="#4285F4"
      d="M44.5 20H24v8.5h11.8C34.5 33.5 30 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l6.1-6.1C34.4 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.5-7.7 19.5-20 0-1.3-.1-2.7-.5-4z"
    />
    <path
      fill="#34A853"
      d="M6.3 14.7l7 5.1C15 16.2 19.1 13 24 13c3 0 5.7 1.1 7.8 2.9l6.1-6.1C34.4 6.1 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#FBBC05"
      d="M24 44c5.4 0 10.3-1.8 14.1-5l-6.5-5.3C29.6 35.5 27 36 24 36c-5.9 0-10.4-2.5-11.7-6.5l-7 5.4C8.7 40.2 15.8 44 24 44z"
    />
    <path
      fill="#EA4335"
      d="M44.5 20H24v8.5h11.8c-.7 2.4-2.1 4.3-4 5.7l6.5 5.3C42.2 36.2 44.5 30.5 44.5 24c0-1.3-.1-2.7-.5-4z"
    />
  </svg>
);

// Filled star SVG
const StarFilled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#FBBC05"
    width="15"
    height="15"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const GoogleReviews = () => {
  return (
    <section id="google-reviews" className="section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          {/* Section label */}
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Google Reviews
          </p>

          <FadeIn delay={0.1}>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-gradient">
              What our clients say
            </h2>
            <br />
          </FadeIn>

          {/* Google overall rating badge */}
          <div className="flex items-center gap-3 mb-12">
            <GoogleG />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <StarFilled key={n} />
              ))}
            </div>
            <span className="text-sm font-semibold">5.0</span>
            <span className="text-sm text-muted-foreground">
              on Google Business
            </span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {googleReviews.map((review, i) => (
            <FadeIn key={review.name} delay={i * 0.1}>
              <div className="border border-border rounded-2xl p-8 hover:bg-secondary transition-colors duration-300 h-full flex flex-col">
                {/* Top: avatar + name + Google logo */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar circle with initials */}
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-primary-foreground">
                        {review.initials}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {review.date}
                      </p>
                    </div>
                  </div>
                  {/* Google G mark */}
                  <GoogleG />
                </div>

                {/* Star rating */}
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <StarFilled key={n} />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-muted-foreground text-sm leading-relaxed italic flex-1">
                  "{review.text}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Link to Google reviews */}
        <FadeIn delay={0.5}>
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/maps/search/Fuerte+Developers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border rounded-full px-6 py-2.5 hover:bg-secondary"
            >
              <GoogleG />
              See all reviews on Google
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default GoogleReviews;
