"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "sw" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { label: t("home"), href: "#home" },
    { label: t("products"), href: "#products" },
    { label: t("brands"), href: "#brands" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl shadow-purple-950/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-0.5 shrink-0"
          >
            <span className="text-[22px] font-bold text-white tracking-tight">
              Mercuria
            </span>
            <span className="text-[22px] font-bold text-[#A46EDB]">tech</span>
            <span className="w-[7px] h-[7px] rounded-full bg-[#A46EDB] ml-[2px] -mt-2" />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[14px] font-medium text-white/50 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="text-right mr-1">
              <div className="text-[11px] text-white/40 font-medium">
                {t("quickEnquiry")}
              </div>
              <div className="text-[14px] text-white font-semibold flex items-center gap-1.5">
                <Phone size={13} className="text-[#A46EDB]" />
                {t("phone")}
              </div>
            </div>

            <button
              onClick={toggleLocale}
              className="px-3 py-1.5 rounded-full text-[11px] font-semibold border border-white/10 text-white/50 hover:text-white hover:border-[#A46EDB]/40 transition-all duration-200"
            >
              {locale === "en" ? "EN | SW" : "SW | EN"}
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-[13px] py-[10px] px-5 rounded-full"
            >
              {t("requestQuote")}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-black/95 backdrop-blur-2xl border-b border-white/[0.06] lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[15px] font-medium text-white/50 hover:text-white transition-colors py-3 border-b border-white/[0.06]"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-5">
                <button
                  onClick={toggleLocale}
                  className="px-4 py-2.5 rounded-full text-[12px] font-semibold border border-white/10 text-white/50"
                >
                  {locale === "en" ? "EN | SW" : "SW | EN"}
                </button>
                <button
                  onClick={() => scrollTo("#contact")}
                  className="btn-primary text-[13px] py-2.5 flex-1 rounded-full"
                >
                  {t("requestQuote")}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
