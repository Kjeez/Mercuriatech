"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Hero() {
  const t = useTranslations("Hero");

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const trustItems = [t("trust1"), t("trust2"), t("trust3")];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden hero-gradient"
    >
      {/* Vertical border lines */}
      <div className="absolute inset-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)]">
        <div className="col-span-1" />
        <div className="col-span-1 border-x border-white/[0.08]" />
        <div className="col-span-1" />
      </div>

      {/* Large elliptic shape at bottom */}
      <div
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[100%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,#000_82%,#3B8EED)]"
        style={{ borderTop: "1px solid #6CB4F5" }}
      />

      {/* Ambient blur orbs */}
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-[#3B8EED]/40 blur-[200px]" />
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-0 hidden md:block aspect-square w-[32vw] rounded-full bg-black/50 opacity-50 blur-[100px]" />
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-0 hidden md:block aspect-square w-[30vw] rounded-full bg-black/50 opacity-50 blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col divide-y divide-white/[0.08] pt-[72px]">
        {/* Top badge */}
        <div className="flex flex-col items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center gap-2 border border-white/[0.08] border-b-0 px-5 py-2.5 mt-8"
          >
            <div className="w-2 h-2 rounded-full bg-[#D71920] animate-pulse" />
            <p className="text-white/50 text-sm tracking-tight font-medium">
              {t("label")}
            </p>
          </motion.div>
        </div>

        {/* Headline area */}
        <div>
          <div className="mx-auto flex min-h-[280px] max-w-[80vw] shrink-0 flex-col items-center justify-center gap-4 px-2 py-8 sm:px-10 lg:px-24">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-pretty text-center text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(50px,7vw,75px)] font-medium leading-none tracking-[-1.44px] md:max-w-screen-lg md:tracking-[-2.16px]"
            >
              {t("headline1")} {t("headline2")}{" "}
              <span className="gradient-text-purple">{t("headline3")}</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-md text-white/50 max-w-2xl text-pretty text-center md:text-lg"
            >
              {t("subtext")}
            </motion.h2>
          </div>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex items-start justify-center divide-y divide-white/[0.08] px-8 sm:px-24"
        >
          <div className="flex w-full max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
            <button
              onClick={() => scrollTo("#products")}
              className="flex h-14 w-full items-center justify-center border-x border-white/[0.08] bg-transparent backdrop-blur-xl transition-colors duration-150 hover:bg-white/5 text-white font-medium text-base"
            >
              {t("exploreProducts")}
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex h-14 w-full items-center justify-center bg-gradient-to-r from-[#E8242B] via-[#D71920] to-[#A8101A] text-white font-medium text-base transition-all hover:shadow-lg hover:shadow-red-500/20"
            >
              {t("contactUs")}
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        </motion.div>

        {/* Trust strip below CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-center py-8"
        >
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            {trustItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 text-[14px] sm:text-[15px] font-semibold text-white/90 px-5 py-3 rounded-full border border-white/[0.12] bg-white/[0.05] backdrop-blur-md"
              >
                <div className="w-6 h-6 rounded-full bg-[#D71920]/20 border border-[#D71920]/30 flex items-center justify-center">
                  <Check size={13} className="text-[#D71920]" strokeWidth={3} />
                </div>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Brand logos marquee */}
        <div className="mx-auto max-w-7xl w-full">
          <AnimatedBrandCloud />
        </div>
      </div>
    </section>
  );
}

/* Animated logo cloud */
const brands = [
  { name: "CISCO", color: "#049FD9" },
  { name: "HP", color: "#0096D6" },
  { name: "Dell", color: "#007DB8" },
  { name: "Lenovo", color: "#E2231A" },
  { name: "Apple", color: "#A2AAAD" },
  { name: "Aruba", color: "#FF8300" },
  { name: "Fortinet", color: "#EE3124" },
  { name: "Hikvision", color: "#E30613" },
  { name: "Canon", color: "#CE0E2D" },
  { name: "Epson", color: "#003399" },
  { name: "Huawei", color: "#CF0A2C" },
  { name: "Samsung", color: "#1428A0" },
  { name: "HPE", color: "#01A982" },
  { name: "Zebra", color: "#FFFFFF" },
  { name: "Honeywell", color: "#E31937" },
  { name: "D-Link", color: "#FF6B00" },
];

function AnimatedBrandCloud() {
  return (
    <div className="w-full py-10">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative flex gap-8 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
            WebkitMaskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {[0, 1, 2].map((setIndex) => (
            <div
              key={setIndex}
              className="flex shrink-0 animate-marquee flex-row justify-around gap-8"
            >
              {brands.map((brand, i) => (
                <span
                  key={i}
                  className="text-[16px] font-bold tracking-wider whitespace-nowrap text-white/60 hover:text-white transition-colors duration-200 flex items-center gap-2 px-2"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full opacity-60"
                    style={{ backgroundColor: brand.color }}
                  />
                  {brand.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
