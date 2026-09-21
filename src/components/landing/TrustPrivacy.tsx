"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Sliders } from "lucide-react";
import { TRUST_PRIVACY_DATA } from "@/constants";

const ICON_MAP = {
  Shield: ShieldCheck,
  Lock: Lock,
  Sliders: Sliders,
};

export function TrustPrivacy() {
  return (
    <section className="py-24 bg-emerald-50/40 relative overflow-hidden">
      {/* Decorative soft organic background circles */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3D Mint/Green Translucent Shield Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-xl bg-white/80 border border-emerald-100/80 p-4 backdrop-blur-xs flex items-center justify-center">
              <div className="relative h-full w-full rounded-2xl overflow-hidden">
                <Image
                  src={TRUST_PRIVACY_DATA.image}
                  alt="Translucent 3D Privacy Shield with foliage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy & Trust Features */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full bg-emerald-100/70 px-3.5 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200/60 mb-6"
            >
              <span>{TRUST_PRIVACY_DATA.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 leading-[1.15] tracking-tight"
            >
              Built around trust <br className="hidden sm:inline" />
              and privacy.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-grey-600 max-w-xl"
            >
              {TRUST_PRIVACY_DATA.description}
            </motion.p>

            {/* 3 Trust points */}
            <div className="mt-10 space-y-6">
              {TRUST_PRIVACY_DATA.points.map((point, idx) => {
                const IconComponent =
                  ICON_MAP[point.icon as keyof typeof ICON_MAP] || ShieldCheck;

                return (
                  <motion.div
                    key={point.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm border border-emerald-100">
                      <IconComponent className="h-5 w-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-grey-900">
                        {point.title}
                      </h3>
                      <p className="mt-1 text-sm text-grey-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
