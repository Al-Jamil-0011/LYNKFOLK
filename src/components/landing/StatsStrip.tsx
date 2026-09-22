"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Star, Heart } from "lucide-react";

const STATS = [
  {
    icon: Users,
    value: "10K+",
    label: "Families Trust Us",
    iconColor: "text-emerald-700 bg-emerald-50 border border-emerald-100/80",
  },
  {
    icon: Globe,
    value: "20+",
    label: "Countries Reached",
    iconColor: "text-emerald-700 bg-emerald-50 border border-emerald-100/80",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "App Store Rating",
    iconColor: "text-emerald-700 bg-emerald-50 border border-emerald-100/80",
  },
  {
    icon: Heart,
    value: "100%",
    label: "Focus on Family Wellbeing",
    iconColor: "text-emerald-700 bg-emerald-50 border border-emerald-100/80",
  },
];

export function StatsStrip() {
  return (
    <section className="py-6 sm:py-8 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="rounded-2xl sm:rounded-3xl bg-white px-5 py-4 border border-grey-100/80 shadow-2xs hover:shadow-xs transition-all duration-300 flex items-center gap-3.5"
              >
                <div className={`h-11 w-11 rounded-xl flex-shrink-0 flex items-center justify-center ${stat.iconColor} shadow-2xs`}>
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>
                <div>
                  <div className="font-serif-heading text-xl sm:text-2xl font-bold text-grey-900 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-grey-500 mt-0.5">
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
