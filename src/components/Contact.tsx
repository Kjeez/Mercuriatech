"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Check, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const t = useTranslations("Contact");
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    companyEmail: "",
    phone: "",
    productInterest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({
      firstName: "",
      lastName: "",
      companyName: "",
      companyEmail: "",
      phone: "",
      productInterest: "",
      message: "",
    });
  };

  const benefits = [
    t("benefit1"),
    t("benefit2"),
    t("benefit3"),
    t("benefit4"),
    t("benefit5"),
    t("benefit6"),
  ];

  const productOptions = [
    { value: "endUser", label: t("options.endUser") },
    { value: "networking", label: t("options.networking") },
    { value: "servers", label: t("options.servers") },
    { value: "peripherals", label: t("options.peripherals") },
    { value: "security", label: t("options.security") },
    { value: "specialty", label: t("options.specialty") },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#A46EDB]/20 to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div
          className="px-6 sm:px-12 lg:px-16 py-20 lg:py-28 relative"
          style={{
            background: "linear-gradient(180deg, #130826 0%, #200D42 100%)",
          }}
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "400px",
              height: "400px",
              bottom: "-20%",
              left: "-15%",
              background: "radial-gradient(circle, rgba(164,110,219,0.08), transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <div className="relative z-10 max-w-[480px]">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-label mb-6">{t("label")}</div>
              <h2 className="text-[32px] sm:text-[40px] font-medium text-white leading-tight mb-4 tracking-tight">
                {t("title")}
              </h2>
              <p className="text-[15px] text-white/50 leading-relaxed mb-8">
                {t("body")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="space-y-4 mb-10"
            >
              <div className="flex items-center gap-3 text-[14px] text-white/55">
                <Phone size={16} className="text-[#A46EDB] shrink-0" />
                {t("phone")}
              </div>
              <div className="flex items-center gap-3 text-[14px] text-white/55">
                <Mail size={16} className="text-[#A46EDB] shrink-0" />
                {t("email")}
              </div>
              <div className="flex items-center gap-3 text-[14px] text-white/55">
                <MapPin size={16} className="text-[#A46EDB] shrink-0" />
                {t("location")}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="space-y-3"
            >
              {benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-[13px] text-white/50">
                  <div className="w-5 h-5 rounded-full bg-[#A46EDB]/15 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[#A46EDB]" />
                  </div>
                  {b}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div
          className="px-6 sm:px-12 lg:px-16 py-20 lg:py-28 relative flex items-center"
          style={{ background: "#07000F" }}
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "400px",
              height: "400px",
              top: "-10%",
              right: "-15%",
              background: "radial-gradient(circle, rgba(79,33,161,0.06), transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-[520px] mx-auto relative z-10"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-[#200D42]/30 backdrop-blur-xl p-8 sm:p-10 shadow-2xl shadow-purple-950/30">
              <h3 className="text-[22px] font-semibold text-white mb-7">
                {t("formTitle")}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    placeholder={t("firstName")}
                    className="form-field"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    placeholder={t("lastName")}
                    className="form-field"
                  />
                </div>
                <input
                  type="text"
                  name="companyName"
                  value={formState.companyName}
                  onChange={handleChange}
                  placeholder={t("companyName")}
                  className="form-field"
                />
                <input
                  type="email"
                  name="companyEmail"
                  value={formState.companyEmail}
                  onChange={handleChange}
                  placeholder={t("companyEmail")}
                  className="form-field"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  placeholder={t("phoneField")}
                  className="form-field"
                />
                <select
                  name="productInterest"
                  value={formState.productInterest}
                  onChange={handleChange}
                  className="form-field appearance-none"
                >
                  <option value="" disabled className="bg-[#200D42] text-white/40">
                    {t("productInterest")}
                  </option>
                  {productOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#200D42]">
                      {opt.label}
                    </option>
                  ))}
                </select>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t("message")}
                  rows={4}
                  className="form-field resize-none"
                />
                <button
                  type="submit"
                  className="w-full h-14 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-400 text-white font-semibold text-[15px] rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/25 hover:translate-y-[-2px]"
                >
                  {submitted ? (
                    "✓ Sent!"
                  ) : (
                    <>
                      <ArrowRight size={16} />
                      {t("submit")}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
