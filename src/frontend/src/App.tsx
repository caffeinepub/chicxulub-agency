import { useEffect } from "react";
import { ChatbotWidget } from "./components/ChatbotWidget";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { useRouter } from "./hooks/useRouter";
import { Home } from "./pages/Home";
import { ServicePage } from "./pages/ServicePage";

function App() {
  const { pathname } = useRouter();

  // biome-ignore lint/correctness/useExhaustiveDependencies: scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const renderPage = () => {
    if (pathname === "/" || pathname === "") {
      return <Home />;
    }
    const serviceMatch = pathname.match(/^\/services\/([^/]+)$/);
    if (serviceMatch) {
      return <ServicePage slug={serviceMatch[1]} />;
    }
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-foreground mb-3">404</h1>
          <p className="text-muted-foreground mb-6">Page not found.</p>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-foreground text-primary-foreground rounded-lg text-sm font-medium"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <div className="flex-1">{renderPage()}</div>
      <Footer />
      <FloatingWhatsApp />
      <ChatbotWidget />
    </div>
  );
}

export default App;
