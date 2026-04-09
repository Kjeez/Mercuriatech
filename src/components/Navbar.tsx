"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, Phone } from "lucide-react";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white backdrop-blur-2xl border-b border-black/[0.08] shadow-lg shadow-black/5"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center shrink-0"
          >
            <Image
              src="/logonew.png"
              alt="Mercuriatech"
              width={180}
              height={40}
              className="h-[32px] w-auto object-contain"
              priority
            />
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-[14px] font-medium text-black/60 hover:text-black transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="text-right mr-1">
              <div className="text-[11px] text-black/40 font-medium">
                {t("quickEnquiry")}
              </div>
              <div className="text-[14px] text-black font-semibold flex items-center gap-1.5">
                <Phone size={13} className="text-[#D71920]" />
                {t("phone")}
              </div>
            </div>

            <button
              onClick={() => scrollTo("#contact")}
              className="btn-primary text-[13px] py-[10px] px-5 rounded-full"
            >
              {t("requestQuote")}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-black p-2"
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
            className="fixed inset-x-0 top-[72px] z-40 bg-white backdrop-blur-2xl border-b border-black/[0.08] shadow-lg lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-[15px] font-medium text-black/60 hover:text-black transition-colors py-3 border-b border-black/[0.06]"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-5">
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
