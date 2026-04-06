"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  GraduationCap,
  Store,
  HardHat,
  Landmark,
} from "lucide-react";

const chipIcons = [Building2, HeartPulse, GraduationCap, Store, HardHat, Landmark];

export default function Industries() {
  const t = useTranslations("Industries");

  const chips = [1, 2, 3, 4, 5, 6].map((i) => ({
    icon: chipIcons[i - 1],
    label: t(`chip${i}`),
  }));

  return (
    <section
      className="relative"
      style={{
        background: "linear-gradient(180deg, #0A0015 0%, #130826 100%)",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A46EDB]/15 to-transparent" />

      <div className="max-w-[1320px] mx-auto px-6 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14 max-w-[600px] mx-auto"
        >
          <div className="section-label mx-auto w-fit">{t("label")}</div>
          <h2 className="section-heading">{t("title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[900px] mx-auto">
          {chips.map((chip, index) => {
            const Icon = chip.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="flex items-center gap-4 px-6 py-5 rounded-2xl bg-[#200D42]/40 border border-white/[0.06] hover:border-[#A46EDB]/25 hover:bg-[#200D42]/60 transition-all duration-300 cursor-default group backdrop-blur-sm"
              >
                <div className="w-11 h-11 rounded-xl bg-[#A46EDB]/10 flex items-center justify-center shrink-0 group-hover:bg-[#A46EDB]/20 transition-colors">
                  <Icon size={20} className="text-[#A46EDB]" strokeWidth={1.8} />
                </div>
                <span className="text-[14px] font-medium text-white/80">
                  {chip.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
