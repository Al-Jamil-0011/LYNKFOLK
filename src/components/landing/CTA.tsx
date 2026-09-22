"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { FINAL_CTA_DATA } from "@/constants";
import { StoreBadges } from "@/components/ui/StoreBadges";

export function CTA() {
  return (
    <section
      id="get-started"
      className="py-10 md:py-14 bg-[#FAF9F6] relative overflow-hidden scroll-mt-24"
    >
      <div id="download" className="absolute -top-24" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Scenic Container with Sunset Family Silhouette */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl sm:rounded-[36px] overflow-hidden min-h-[400px] sm:min-h-[450px] flex items-center justify-center p-6 sm:p-10 lg:p-12 text-center shadow-xl border-4 border-white"
        >
          {/* Background Sunset Family Silhouette Image */}
          <Image
            src="/images/sunset-family.jpg"
            alt="Family holding hands together at sunset during golden hour"
            fill
            priority
            className="object-cover object-center transform scale-105"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />

          {/* Deep Twilight Purple to Golden Amber Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#180424]/95 via-[#2a0845]/80 to-[#180424]/65 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#200533]/40 to-[#12021a]/90 pointer-events-none" />

          {/* Content Layer */}
          <div className="relative z-10 mx-auto max-w-2xl flex flex-col items-center">
            
            {/* Rotated Handwriting Script Badge */}
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: -4, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="inline-flex items-center gap-1.5 font-handwriting text-2xl sm:text-3xl text-amber-300 drop-shadow-md mb-2"
            >
              <span>Because they matter</span>
              <span className="text-rose-400 text-xl sm:text-2xl">♡</span>
            </motion.div>

            {/* Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 border border-white/20 mb-4"
            >
              <Sparkles className="h-3 w-3 text-amber-300" />
              <span>{FINAL_CTA_DATA.badge}</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight leading-[1.18]"
            >
              Ready to transform your <br className="hidden sm:inline" />
              family communication?
            </motion.h2>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-3 text-sm sm:text-base text-white/90 font-normal leading-relaxed max-w-xl"
            >
              Join thousands of parents and teens building deeper connections, one honest conversation at a time.
            </motion.p>

            {/* CTAs: Button + Store Badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5"
            >
              <Link
                href="#download"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-primary-500/40 hover:bg-primary-600 transition-all hover:scale-105 active:scale-95 border border-primary-400/40"
              >
                <span>{FINAL_CTA_DATA.buttonText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <StoreBadges variant="light" className="justify-center" />
            </motion.div>

            {/* Trust Micro-Text */}
            <p className="mt-4 text-[11px] text-white/60 font-medium">
              Free 14-day trial · No credit card required · End-to-end encrypted
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
