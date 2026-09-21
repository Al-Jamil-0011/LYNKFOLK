"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smile,
  Sparkles,
  MessageCircle,
  Wind,
  ShieldCheck,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";
import { FEATURES_DATA, FeatureItem } from "@/constants";

const ICON_MAP: Record<string, LucideIcon> = {
  Smile,
  Sparkles,
  MessageCircle,
  Wind,
  ShieldCheck,
  HeartHandshake,
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-grey-50/70 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary-600 mb-3"
          >
            Thoughtfully Crafted
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 tracking-tight"
          >
            Empowering family connection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-grey-600"
          >
            Designed with developmental psychologists to make emotional check-ins natural, rewarding, and stress-free.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((feature: FeatureItem, idx: number) => {
            const Icon = ICON_MAP[feature.iconName] || Sparkles;
            const isSecondary = idx % 2 === 1;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl border border-grey-100 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon with touch of primary-500 purple or secondary-500 blue */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl mb-6 transition-all duration-300 ${
                    isSecondary
                      ? "bg-secondary-50 text-secondary-600 border border-secondary-100 group-hover:bg-secondary-500 group-hover:text-white"
                      : "bg-primary-50 text-primary-600 border border-primary-100 group-hover:bg-primary-500 group-hover:text-white"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="font-serif-heading text-xl font-semibold text-grey-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-grey-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
