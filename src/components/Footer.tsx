"use client";

import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Send, ArrowRight, Globe, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [email, setEmail] = useState("");

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "sw" : "en";
    router.replace(pathname, { locale: newLocale });
  };

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
    <footer className="relative overflow-hidden" style={{ background: "#030008" }}>
      {/* Decorative dot grid */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] pointer-events-none opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(rgba(164,110,219,0.2) 2px, transparent 2px)",
            backgroundSize: "18px 18px",
            maskImage: "radial-gradient(circle at 0% 0%, rgba(0,0,0,0.6), transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 0% 0%, rgba(0,0,0,0.6), transparent 70%)",
          }}
        />
      </div>

      {/* Newsletter strip */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[1320px] mx-auto px-6 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[16px] font-semibold text-white"
            >
              {t("newsletter")}
            </motion.p>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                className="form-field max-w-[300px] text-[13px] py-3"
              />
              <button className="h-[46px] px-6 flex items-center gap-2 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-400 text-white font-semibold text-[13px] rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/20">
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
                src="/logo.png"
                alt="Mercuriatech"
                width={160}
                height={36}
                className="h-[28px] w-auto object-contain"
              />
            </div>
            <p className="text-[13px] text-white/35 leading-relaxed mb-6 max-w-[280px]">
              {t("tagline")}
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:border-[#A46EDB]/30 hover:bg-[#A46EDB]/5 transition-all">
                <Globe size={15} className="text-white/40" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center hover:border-[#A46EDB]/30 hover:bg-[#A46EDB]/5 transition-all">
                <Mail size={15} className="text-white/40" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-5 uppercase tracking-wider">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[13px] text-white/35 hover:text-[#A46EDB] transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[14px] font-semibold text-white mb-5 uppercase tracking-wider">
              {t("contactInfo")}
            </h4>
            <ul className="space-y-3 text-[13px] text-white/35">
              <li>{t("address")}</li>
              <li>📞 {t("phone")}</li>
              <li>📧 {t("email")}</li>
            </ul>

            <button
              onClick={toggleLocale}
              className="mt-6 px-4 py-2 rounded-full text-[11px] font-semibold border border-white/10 text-white/35 hover:text-white hover:border-[#A46EDB]/40 transition-all"
            >
              {locale === "en" ? "🌐 EN | SW" : "🌐 SW | EN"}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="max-w-[1320px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-white/20">{t("copyright")}</p>
          <p className="text-[11px] text-white/15">{t("registered")}</p>
        </div>
      </div>
    </footer>
  );
}
