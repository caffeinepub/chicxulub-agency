import { useCallback, useEffect, useState } from "react";

export function useRouter() {
  const [pathname, setPathname] = useState(() => window.location.pathname);

  useEffect(() => {
    const handler = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const navigate = useCallback((to: string) => {
    window.history.pushState(null, "", to);
    setPathname(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { pathname, navigate };
}

export function navigateTo(to: string) {
  window.history.pushState(null, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0 });
}
