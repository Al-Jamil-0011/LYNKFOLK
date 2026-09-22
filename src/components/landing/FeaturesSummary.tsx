"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Heart, Shield, Sparkles } from "lucide-react";

const SUMMARY_ITEMS = [
  {
    title: "Stronger Communication",
    description: "Build trust and understanding with guided conversations.",
    icon: MessageSquare,
    iconBg: "bg-primary-50 text-primary-600",
  },
  {
    title: "Emotional Support",
    description: "Get personalized tools to handle life's ups and downs.",
    icon: Heart,
    iconBg: "bg-[#FFE7D1] text-amber-600",
  },
  {
    title: "Safe & Private",
    description: "A secure space for your family's journey.",
    icon: Shield,
    iconBg: "bg-[#E8F5E9] text-emerald-600",
  },
  {
    title: "Better Together",
    description: "Support your teen's growth and build a strong bond.",
    icon: Sparkles,
    iconBg: "bg-secondary-50 text-secondary-600",
  },
];

export function FeaturesSummary() {
  return (
    <section id="features" className="py-10 md:py-14 bg-[#FAF9F6] relative overflow-hidden scroll-mt-24">
      {/* Soft decorative background leaf blob */}
      <div className="absolute top-1/2 right-4 w-72 h-72 rounded-full bg-emerald-100/40 blur-[90px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-7">
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-normal text-grey-900 tracking-tight">
            How <span className="text-primary-600 font-medium">LYNKFOLK</span> helps
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUMMARY_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group rounded-3xl bg-white p-7 border border-grey-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-11 w-11 rounded-2xl flex items-center justify-center mb-5 ${item.iconBg} transition-transform duration-300 group-hover:scale-110 shadow-2xs`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif-heading text-lg font-semibold text-grey-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-grey-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
