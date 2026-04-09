"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const allBrands = [
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
  { name: "Zebra", color: "#8B5CF6" },
  { name: "Honeywell", color: "#E31937" },
  { name: "Huawei", color: "#CF0A2C" },
  { name: "Samsung", color: "#1428A0" },
  { name: "D-Link", color: "#FF6B00" },
  { name: "HPE", color: "#01A982" },
  { name: "Dell EMC", color: "#007DB8" },
  { name: "Logitech", color: "#00B8FC" },
  { name: "NoMachine", color: "#28A8E0" },
];

export default function BrandMarquee() {
  const t = useTranslations("Brands");

  return (
    <section
      id="brands"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #000A1A 0%, #081228 50%, #000A1A 100%)",
      }}
    >
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B8EED]/30 to-transparent" />

      <div className="max-w-[1320px] mx-auto px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="section-label mx-auto w-fit mb-5">TRUSTED PARTNERS</div>
          <h2 className="section-heading">{t("title")}</h2>
        </motion.div>
      </div>

      {/* Row 1 — scroll left */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#000A1A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#000A1A] to-transparent z-10" />
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {[...allBrands.slice(0, 9), ...allBrands.slice(0, 9)].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-[#3B8EED]/30 transition-all duration-300"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: brand.color }}
                />
                <span className="text-[14px] font-semibold tracking-wide whitespace-nowrap text-white/70">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#000A1A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#000A1A] to-transparent z-10" />
        <div className="flex overflow-hidden">
          <div
            className="flex"
            style={{
              animation: "marquee 30s linear infinite reverse",
            }}
          >
            {[...allBrands.slice(9), ...allBrands.slice(9)].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-3 flex items-center gap-3 px-6 py-3.5 rounded-full border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-[#3B8EED]/30 transition-all duration-300"
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: brand.color }}
                />
                <span className="text-[14px] font-semibold tracking-wide whitespace-nowrap text-white/70">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B8EED]/20 to-transparent" />
    </section>
  );
}
