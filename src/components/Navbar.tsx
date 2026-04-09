"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Red accent stripe at top */}
        <div className="h-[3px] bg-gradient-to-r from-[#D71920] via-[#E8242B] to-[#D71920]" />

        {/* Main navbar */}
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border-b border-black/[0.04]"
              : "bg-white border-b border-black/[0.04]"
          }`}
        >
          <div className="max-w-[1320px] mx-auto px-6 h-[72px] flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#home")}
              className="flex items-center shrink-0 group"
            >
              <Image
                src="/logonew.png"
                alt="Mercuriatech"
                width={180}
                height={40}
                className="h-[32px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                priority
              />
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative text-[13px] font-semibold text-black/55 hover:text-[#D71920] transition-all duration-200 px-4 py-2 rounded-lg hover:bg-red-50/60 uppercase tracking-[0.5px]"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Phone badge */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-50/80 border border-black/[0.04]">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D71920] to-[#A8101A] flex items-center justify-center shadow-sm shadow-red-200">
                  <Phone size={14} className="text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-black/35 font-medium uppercase tracking-wider leading-none mb-0.5">
                    {t("quickEnquiry")}
                  </div>
                  <div className="text-[14px] text-black font-bold leading-none">
                    {t("phone")}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollTo("#contact")}
                className="group flex items-center gap-1.5 bg-gradient-to-r from-[#D71920] to-[#A8101A] text-white text-[13px] font-semibold py-[11px] px-6 rounded-xl shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:scale-[1.02] transition-all duration-200"
              >
                {t("requestQuote")}
                <ChevronRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-black/70 hover:text-black p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
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
            className="fixed inset-x-0 top-[75px] z-40 bg-white/98 backdrop-blur-2xl border-b border-black/[0.06] shadow-xl lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[15px] font-semibold text-black/60 hover:text-[#D71920] hover:bg-red-50/50 transition-all py-3 px-3 rounded-lg border-b border-black/[0.04]"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-5">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#D71920] to-[#A8101A] text-white text-[13px] font-semibold py-3 flex-1 rounded-xl shadow-lg shadow-red-500/20"
                >
                  {t("requestQuote")}
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
