"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FINAL_CTA_DATA } from "@/constants";

export function CTA() {
  return (
    <section
      id="get-started"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-primary-50/40 via-primary-50/70 to-primary-100/30 overflow-hidden"
    >
      {/* Decorative botanical foliage flourishes on left & right */}
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-64 h-64 opacity-25 pointer-events-none text-primary-400">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M40,100 C60,40 120,40 140,80 C150,100 130,140 90,140 C50,140 30,120 40,100 Z" />
          <path d="M10,130 C30,70 90,70 110,110 C120,130 100,170 60,170 C20,170 0,150 10,130 Z" opacity="0.6" />
        </svg>
      </div>
      <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-64 opacity-25 pointer-events-none text-primary-400">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M160,100 C140,40 80,40 60,80 C50,100 70,140 110,140 C150,140 170,120 160,100 Z" />
          <path d="M190,130 C170,70 110,70 90,110 C80,130 100,170 140,170 C180,170 200,150 190,130 Z" opacity="0.6" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          {/* Badge */}
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-600 mb-4">
            {FINAL_CTA_DATA.badge}
          </span>

          {/* Headline */}
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 tracking-tight leading-[1.2]">
            {FINAL_CTA_DATA.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-grey-600 font-medium">
            {FINAL_CTA_DATA.subtitle}
          </p>

          {/* Center Pill Button */}
          <div className="mt-8 flex justify-center">
            <Link
              href="#download"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary-500/25 hover:bg-primary-600 transition-all hover:scale-105 active:scale-95"
            >
              <span>{FINAL_CTA_DATA.buttonText}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
