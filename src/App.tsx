import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function HeadMeta() {
  useEffect(() => {
    document.documentElement.lang = "en";
    document.title = "Fuerte Developers";

    function upsertMeta(selector: string, attrs: Record<string, string>) {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
        document.head.appendChild(el);
      } else {
        Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
      }
    }

    upsertMeta('meta[name="viewport"]', { name: "viewport", content: "width=device-width, initial-scale=1.0" });
    upsertMeta('meta[name="description"]', { name: "description", content: "Lovable Generated Project" });
    upsertMeta('meta[name="author"]', { name: "author", content: "Lovable" });

    upsertMeta('meta[property="og:title"]', { property: "og:title", content: "Lovable App" });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: "Lovable Generated Project" });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: "https://lovable.dev/opengraph-image-p98pqg.png",
    });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:site"]', { name: "twitter:site", content: "@Lovable" });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: "https://lovable.dev/opengraph-image-p98pqg.png",
    });
  }, []);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HeadMeta />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
