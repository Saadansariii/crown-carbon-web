"use client";

import { Mail, MapPin, Phone, Clock, FileCheck } from "lucide-react";
import { Button } from "../ui/button";
import { useState, ChangeEvent, MouseEvent } from "react";
import { translations } from "@/lib/translations";

interface ContactSectionProps {
  lang: "en" | "hi";
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  category: string;
}

interface SubmitStatus {
  type: "success" | "error";
  message: string;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    category: "carbon-brushes",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus | null>(null);

  const t = translations[lang].contact;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Validate fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        type: "error",
        message: t.requiredMsg,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Append category to message so it is included in email body
      const formattedMessage = `[Category: ${formData.category.toUpperCase()}]\n\n${formData.message}`;
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formattedMessage,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: t.successMsg,
        });
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          category: "carbon-brushes",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || t.errorMsg,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t.errorMsg,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-800" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold text-industry-accent tracking-widest uppercase block">
                {t.kicker}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">
                {t.title}
              </h2>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {t.desc}
              </p>
            </div>

            {/* Channels */}
            <div className="space-y-5 pt-3">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none shrink-0">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 mb-0.5">{t.officeLabel}</h3>
                  <p className="text-xs text-zinc-450 leading-relaxed">{t.officeVal}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none shrink-0">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 mb-0.5">{t.phoneLabel}</h3>
                  <p className="text-xs text-zinc-450 font-mono leading-snug">+91 7400202234</p>
                  <p className="text-xs text-zinc-450 font-mono leading-snug">+91 9224245981</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none shrink-0">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 mb-0.5">{t.emailLabel}</h3>
                  <p className="text-xs text-zinc-450 font-mono">crowncarbonbrush@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none shrink-0">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-zinc-300 mb-0.5">{t.responseLabel}</h3>
                  <p className="text-xs text-zinc-450">{t.responseVal}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Inquiry form */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 p-6 md:p-8 shadow-xl relative">
            <div 
              className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-5 pointer-events-none z-0" 
              aria-hidden="true" 
            />
            
            <div className="relative z-10 space-y-5">
              <div className="flex items-center gap-2 mb-4">
                <FileCheck className="h-4.5 w-4.5 text-industry-accent" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  {t.formTitle}
                </h3>
              </div>

              {submitStatus && (
                <div
                  className={`p-3 text-[11px] font-semibold border ${
                    submitStatus.type === "success"
                      ? "bg-green-950/40 text-green-400 border-green-850"
                      : "bg-red-950/40 text-red-400 border-red-850"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1"
                    >
                      {t.formName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-650 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1"
                    >
                      {t.formCompany}
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-650 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                      placeholder="e.g. Steel Industries Ltd."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1"
                    >
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-650 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                      placeholder="e.g. buyer@company.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1"
                    >
                      {t.formPhone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-650 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                      placeholder="e.g. +91 9999999999"
                    />
                  </div>
                </div>

                {/* Dropdown Selector */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1"
                  >
                    {t.formCat}
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-2.5 text-xs text-white rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all cursor-pointer"
                  >
                    <option value="carbon-brushes">{t.catBrushes}</option>
                    <option value="brush-holders">{t.catHolders}</option>
                    <option value="slip-rings">{t.catRings}</option>
                    <option value="custom-solution">{t.catCustom}</option>
                  </select>
                </div>

                {/* Text Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[9px] font-bold uppercase tracking-wider text-zinc-400 mb-1"
                  >
                    {t.formMsg}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 px-3.5 py-2.5 text-xs text-white placeholder-zinc-650 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                    placeholder={t.placeholderMsg}
                  ></textarea>
                </div>

                {/* Submit */}
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-industry-accent hover:bg-industry-accent/90 text-white rounded-none font-bold uppercase tracking-wider text-[10px] py-5 mt-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t.formSubmitting : t.formSubmit}
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
