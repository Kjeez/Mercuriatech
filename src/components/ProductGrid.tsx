"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Monitor,
  Wifi,
  Server,
  Printer,
  Shield,
  Cpu,
  ArrowRight,
} from "lucide-react";

const icons = [Monitor, Wifi, Server, Printer, Shield, Cpu];

export default function ProductGrid() {
  const t = useTranslations("Solutions");

  const cards = [1, 2, 3, 4, 5, 6].map((i) => ({
    icon: icons[i - 1],
    title: t(`card${i}.title`),
    desc: t(`card${i}.desc`),
    brands: t(`card${i}.brands`),
  }));

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="relative" style={{ background: "#020810" }}>
      {/* Ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "10%",
            left: "-15%",
            background: "radial-gradient(circle, rgba(59,142,237,0.06), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            bottom: "5%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(0,86,184,0.08), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 py-24 lg:py-32 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-[650px] mx-auto"
        >
          <div className="section-label mx-auto w-fit">{t("label")}</div>
          <h2 className="section-heading">{t("title")}</h2>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="purple-card group flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#3B8EED]/10 border border-[#3B8EED]/15 flex items-center justify-center mb-5 group-hover:bg-[#3B8EED]/20 transition-colors">
                  <Icon
                    size={22}
                    className="text-[#3B8EED]"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Title */}
                <h3 className="text-[18px] font-semibold text-white mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[14px] text-white/50 leading-relaxed mb-4 flex-1">
                  {card.desc}
                </p>

                {/* Brands */}
                <p className="text-[12px] text-white/30 font-medium mb-5">
                  {card.brands}
                </p>

                {/* Get a Quote link — scrolls to contact */}
                <button
                  onClick={scrollToContact}
                  className="flex items-center gap-1.5 text-[13px] font-medium text-[#3B8EED] group-hover:gap-3 transition-all duration-300 cursor-pointer"
                >
                  {t("learnMore")}
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
