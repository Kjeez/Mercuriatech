"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Send, ArrowRight, Globe, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const [email, setEmail] = useState("");

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: t("home"), href: "#home" },
    { label: t("products"), href: "#products" },
    { label: t("brands"), href: "#brands" },
    { label: t("about"), href: "#about" },
    { label: t("contact"), href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-white">
      {/* Red accent stripe at top — mirrors the navbar */}
      <div className="h-[3px] bg-gradient-to-r from-[#D71920] via-[#E8242B] to-[#D71920]" />

      {/* Newsletter strip */}
      <div className="border-b border-black/[0.06]">
        <div className="max-w-[1320px] mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-[18px] font-bold text-black mb-1">
                {t("newsletter")}
              </p>
              <p className="text-[13px] text-black/40">Get the latest updates on products &amp; solutions</p>
            </motion.div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                className="max-w-[300px] w-full text-[13px] py-3 px-4 rounded-xl bg-gray-50/80 border border-black/[0.08] text-black placeholder:text-black/30 outline-none focus:border-[#D71920]/30 focus:ring-2 focus:ring-[#D71920]/10 transition-all"
              />
              <button className="h-[46px] px-6 flex items-center gap-2 bg-gradient-to-r from-[#E8242B] via-[#D71920] to-[#A8101A] text-white font-semibold text-[13px] rounded-xl transition-all hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.02]">
                <Send size={14} />
                {t("send")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1320px] mx-auto px-6 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo + Tagline */}
          <div>
            <div className="mb-4">
              <Image
                src="/logonew.png"
                alt="Mercuriatech"
                width={160}
                height={36}
                className="h-[28px] w-auto object-contain"
              />
            </div>
            <p className="text-[13px] text-black/45 leading-relaxed mb-6 max-w-[280px]">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-50 border border-black/[0.06] flex items-center justify-center hover:border-[#D71920]/30 hover:bg-red-50/50 transition-all group">
                <Globe size={15} className="text-black/35 group-hover:text-[#D71920] transition-colors" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-gray-50 border border-black/[0.06] flex items-center justify-center hover:border-[#D71920]/30 hover:bg-red-50/50 transition-all group">
                <Mail size={15} className="text-black/35 group-hover:text-[#D71920] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] font-bold text-black mb-5 uppercase tracking-wider">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[13px] text-black/45 hover:text-[#D71920] transition-all duration-200 flex items-center gap-1.5 group py-0.5 px-2 -ml-2 rounded-md hover:bg-red-50/50"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[13px] font-bold text-black mb-5 uppercase tracking-wider">
              {t("contactInfo")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-black/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-[#D71920]" />
                </div>
                <span className="text-[13px] text-black/45 leading-relaxed">{t("address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-black/[0.06] flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-[#D71920]" />
                </div>
                <span className="text-[13px] text-black/45 font-medium">{t("phone")}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-50 border border-black/[0.06] flex items-center justify-center shrink-0">
                  <Mail size={14} className="text-[#D71920]" />
                </div>
                <span className="text-[13px] text-black/45">{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/[0.06]">
        <div className="max-w-[1320px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-black/30">{t("copyright")}</p>
          <p className="text-[11px] text-black/20">{t("registered")}</p>
        </div>
      </div>

      {/* Red accent stripe at bottom */}
      <div className="h-[3px] bg-gradient-to-r from-[#D71920] via-[#E8242B] to-[#D71920]" />
    </footer>
  );
}
