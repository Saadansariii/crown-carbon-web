"use client";

import { Mail, MapPin, Phone, Clock, FileCheck } from "lucide-react";
import { Button } from "../ui/button";
import { useState, ChangeEvent, MouseEvent } from "react";

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

export function ContactSection() {
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
        message: "Please fill in all required fields (*).",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Append category to message so it is included in email body without breaking API schema
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
          message: "Enquiry submitted successfully! Our engineering team will contact you within 24 hours.",
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
          message: result.error || "Failed to submit enquiry. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please verify your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-white relative">
      {/* Decorative Blueprint Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-zinc-800" />

      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact Channels & Metadata */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-[11px] font-bold text-industry-accent tracking-widest uppercase block">
                07 / CONTACT & INQUIRIES
              </span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
                Submit an Engineering Inquiry
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Connect with our technical representatives in Mumbai. Provide your dimensional parameters, application speed, or copper shunt details, and we'll draft a specifications sheet and quote.
              </p>
            </div>

            {/* Tactile contact channel info */}
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">Office Address</h3>
                  <p className="text-sm text-zinc-450 leading-relaxed">
                    Malad West, Mumbai, 400095, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">Direct Lines</h3>
                  <p className="text-sm text-zinc-450 font-mono">+91 7400202234</p>
                  <p className="text-sm text-zinc-450 font-mono">+91 9224245981</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">Corporate Email</h3>
                  <p className="text-sm text-zinc-450 font-mono">crowncarbonbrush@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-industry-accent rounded-none">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1">Response Time</h3>
                  <p className="text-sm text-zinc-450">Within 24 business hours guaranteed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Console Form */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 p-8 shadow-2xl relative">
            <div 
              className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-5 pointer-events-none z-0" 
              aria-hidden="true" 
            />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <FileCheck className="h-5 w-5 text-industry-accent" />
                <h3 className="text-lg font-bold uppercase tracking-wider text-white">
                  Technical Specifications Form
                </h3>
              </div>

              {submitStatus && (
                <div
                  className={`p-4 text-xs font-semibold border ${
                    submitStatus.type === "success"
                      ? "bg-green-950/40 text-green-400 border-green-800"
                      : "bg-red-950/40 text-red-400 border-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs text-white placeholder-zinc-600 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  {/* Company field */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs text-white placeholder-zinc-600 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                      placeholder="e.g. Steel Industries Ltd."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs text-white placeholder-zinc-600 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                      placeholder="e.g. buyer@company.com"
                    />
                  </div>

                  {/* Phone field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs text-white placeholder-zinc-600 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                      placeholder="e.g. +91 9999999999"
                    />
                  </div>
                </div>

                {/* Product Category Selector Dropdown */}
                <div>
                  <label
                    htmlFor="category"
                    className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5"
                  >
                    Select Component Category
                  </label>
                  <select
                    id="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs text-white rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all cursor-pointer"
                  >
                    <option value="carbon-brushes">Industrial Carbon Brushes</option>
                    <option value="brush-holders">Heavy-Duty Brush Holders</option>
                    <option value="slip-rings">Precision Slip Rings</option>
                    <option value="custom-solution">Custom Sintered Solutions</option>
                  </select>
                </div>

                {/* Requirements details message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 mb-1.5"
                  >
                    Technical Specifications / Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-950 border border-zinc-800 px-4 py-3 text-xs text-white placeholder-zinc-650 rounded-none focus:outline-none focus:border-industry-accent focus:ring-1 focus:ring-industry-accent transition-all"
                    placeholder="Provide pocket dimensions, bevel angles, spring tension requirements, shunt lengths or raw grades here..."
                  ></textarea>
                </div>

                {/* Submit button */}
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-industry-accent hover:bg-industry-accent/90 text-white rounded-none font-bold uppercase tracking-wider text-xs py-6 mt-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry Details"}
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
