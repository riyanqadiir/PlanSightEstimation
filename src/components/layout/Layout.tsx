import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  const { themeClasses } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className={`min-h-screen ${themeClasses.bg} flex flex-col font-sans transition-colors duration-300`}>
      <Header />
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
