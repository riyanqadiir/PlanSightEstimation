import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ContactDraftProvider } from "./context/ContactDraftContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/layout/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <ThemeProvider>
      <ContactDraftProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContactDraftProvider>
    </ThemeProvider>
  );
}
