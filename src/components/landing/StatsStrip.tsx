"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Star, Heart } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: "10K+",
    label: "Families Trust Us",
    iconColor: "text-primary-600 bg-primary-50",
  },
  {
    icon: Globe,
    value: "20+",
    label: "Countries Reached",
    iconColor: "text-secondary-600 bg-secondary-50",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "App Store Rating",
    iconColor: "text-amber-500 bg-amber-50",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Focus on Family Wellbeing",
    iconColor: "text-emerald-600 bg-emerald-50",
  },
];

export function StatsStrip() {
  return (
    <section className="py-8 sm:py-10 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="rounded-3xl bg-white p-6 border border-grey-200/60 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                <div className={`h-12 w-12 rounded-2xl flex-shrink-0 flex items-center justify-center ${stat.iconColor} shadow-2xs`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-grey-900 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-grey-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
