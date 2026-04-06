"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2, Handshake, Globe2, Wrench } from "lucide-react";

const cardIcons = [Building2, Handshake, Globe2, Wrench];

export default function WhyUs() {
  const t = useTranslations("WhyUs");

  const cards = [1, 2, 3, 4].map((i) => ({
    icon: cardIcons[i - 1],
    title: t(`card${i}.title`),
    desc: t(`card${i}.desc`),
  }));

  return (
    <section id="about" className="relative" style={{ background: "#07000F" }}>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: "500px",
            height: "500px",
            top: "-10%",
            right: "-10%",
            background: "radial-gradient(circle, rgba(164,110,219,0.05), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A46EDB]/15 to-transparent" />

      <div className="max-w-[1320px] mx-auto px-6 py-24 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-[650px] mx-auto"
        >
          <div className="section-label mx-auto w-fit">{t("label")}</div>
          <h2 className="section-heading mb-4">{t("title")}</h2>
          <p className="text-[16px] text-white/50">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="purple-card text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#A46EDB]/10 border border-[#A46EDB]/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#A46EDB]/20 transition-colors">
                  <Icon size={26} className="text-[#A46EDB]" strokeWidth={1.8} />
                </div>
                <h3 className="text-[16px] font-semibold text-white mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[13px] text-white/45 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
