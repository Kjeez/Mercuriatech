"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, Layers, Globe2, ShieldCheck } from "lucide-react";
import Image from "next/image";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const numericValue = parseInt(target.replace(/\D/g, ""));
  const isNumeric = !isNaN(numericValue) && numericValue > 0;

  useEffect(() => {
    if (!isInView || !isNumeric) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(numericValue / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericValue, isNumeric]);

  return (
    <span ref={ref}>
      {isNumeric ? `${count}${suffix}` : target}
    </span>
  );
}

const statCards = [
  {
    icon: Award,
    image: "/brands-bg.png",
    accent: "#3B8EED",
  },
  {
    icon: Layers,
    image: "/categories-bg.png",
    accent: "#D71920",
  },
  {
    icon: Globe2,
    image: "/coverage-bg.png",
    accent: "#3B8EED",
  },
  {
    icon: ShieldCheck,
    image: "/certified-bg.png",
    accent: "#D71920",
  },
];

export default function Statement() {
  const t = useTranslations("Statement");

  const stats = [
    { value: t("stat1"), label: t("stat1Label") },
    { value: t("stat2"), label: t("stat2Label") },
    { value: t("stat3"), label: t("stat3Label") },
    { value: t("stat4"), label: t("stat4Label") },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Statement headline banner */}
      <div
        className="diamond-pattern relative"
        style={{
          background: "linear-gradient(135deg, #0A1E3D 0%, #081228 40%, #020810 100%)",
        }}
      >
        <div className="max-w-[1320px] mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-[700px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label mb-6">{t("label")}</div>
              <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-medium leading-[1.1] text-white tracking-tight">
                {t("headline")}
              </h2>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats cards with background images */}
      <div style={{ background: "#000A1A" }}>
        <div className="max-w-[1320px] mx-auto px-6 py-16 lg:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => {
              const card = statCards[i];
              const Icon = card.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative rounded-2xl overflow-hidden border border-white/[0.08] hover:border-white/[0.16] transition-all duration-500 cursor-default h-[240px]"
                >
                  {/* Background image */}
                  <Image
                    src={card.image}
                    alt={stat.label}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover:from-black/85 group-hover:via-black/50 group-hover:to-black/20 transition-all duration-500" />

                  {/* Accent line at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ background: `linear-gradient(90deg, ${card.accent}, transparent)` }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm transition-colors duration-300"
                      style={{
                        background: `${card.accent}20`,
                        border: `1px solid ${card.accent}30`,
                      }}
                    >
                      <Icon size={20} style={{ color: card.accent }} strokeWidth={2} />
                    </div>

                    {/* Stat value */}
                    <div className="text-[36px] sm:text-[42px] font-bold text-white leading-none mb-1 drop-shadow-lg">
                      <AnimatedCounter
                        target={stat.value}
                        suffix={stat.value.includes("+") ? "+" : ""}
                      />
                    </div>

                    {/* Label */}
                    <div className="text-[13px] text-white/70 font-semibold uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
