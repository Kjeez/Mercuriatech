"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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
      {/* Statement banner with gradient */}
      <div
        className="diamond-pattern relative"
        style={{
          background: "linear-gradient(135deg, #200D42 0%, #1A0B38 40%, #130826 100%)",
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

      {/* Stats row */}
      <div
        className="border-t border-white/[0.06]"
        style={{ background: "#0A0015" }}
      >
        <div className="max-w-[1320px] mx-auto px-6 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="text-[32px] sm:text-[42px] font-bold gradient-text-purple mb-1">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.value.includes("+") ? "+" : ""}
                  />
                </div>
                <div className="text-[13px] text-white/40 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
