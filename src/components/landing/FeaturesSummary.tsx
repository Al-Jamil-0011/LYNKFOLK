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
    <section id="features" className="py-8 sm:py-10 md:py-12 bg-[#FAF9F6] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Soft Sage/Mint Framed Container */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#F3F9F5] border border-emerald-100/60 p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden shadow-xs">

          {/* Decorative organic green fluid blob on the right edge */}
          <div className="absolute -top-10 -right-10 w-44 sm:w-56 h-44 sm:h-56 rounded-full bg-[#7be4a2]/40 blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 -right-8 w-28 sm:w-36 h-28 sm:h-36 rounded-full bg-[#a8e6cf]/60 blur-xl pointer-events-none" />
          <svg
            className="absolute -right-6 top-8 w-32 sm:w-40 h-32 sm:h-40 text-[#6ed898]/50 pointer-events-none hidden sm:block"
            viewBox="0 0 200 200"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M42.7,-62.9C53.9,-54.3,60.8,-40.4,66.7,-25.9C72.6,-11.4,77.5,3.7,74.7,17.9C71.8,32.1,61.2,45.3,48.2,54.7C35.2,64.1,19.8,69.7,3.6,64.7C-12.6,59.8,-29.6,44.3,-43.3,31.7C-57.1,19.1,-67.6,9.5,-69.1,-1.5C-70.6,-12.6,-63,-25.1,-52.7,-34.7C-42.3,-44.4,-29.3,-51.2,-16.4,-58.5C-3.6,-65.8,11.5,-73.6,26.4,-71.1C41.3,-68.6,42.7,-62.9,42.7,-62.9Z" transform="translate(100 100)" />
          </svg>

          {/* Section Header */}
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 relative z-10">
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-normal text-grey-900 tracking-tight">
              Why <span>Families Need</span> <span className="text-primary-600 font-medium">LYNKFOLK</span>
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative z-10">
            {SUMMARY_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="group rounded-2xl sm:rounded-3xl bg-white p-6 sm:p-7 border border-grey-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`h-11 w-11 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 ${item.iconBg} transition-transform duration-300 group-hover:scale-110 shadow-2xs`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif-heading text-lg font-semibold text-grey-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-grey-600">
                      {item.description}
                    </p>
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
