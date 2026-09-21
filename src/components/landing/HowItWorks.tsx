"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HOW_IT_WORKS_DATA } from "@/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 tracking-tight"
          >
            <span className="text-primary-600 font-medium">How LYNKFOLK</span>{" "}
            helps
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-base sm:text-lg text-grey-500"
          >
            {HOW_IT_WORKS_DATA.subtitle}
          </motion.p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOW_IT_WORKS_DATA.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="group flex flex-col justify-between rounded-3xl border border-grey-100 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                {/* Circular Illustrated Avatar Header */}
                <div className="relative mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src={pillar.image}
                    alt={pillar.tag}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="160px"
                  />
                </div>

                {/* Tag & Subheading */}
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary-500 mb-2">
                  {pillar.tag}
                </span>
                <h3 className="font-serif-heading text-xl sm:text-2xl font-semibold text-grey-900 mb-3">
                  {pillar.subheading}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-grey-600 mb-8">
                  {pillar.description}
                </p>
              </div>

              {/* Action Circle Button with Purple Accent */}
              <div className="pt-2">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-xs group-hover:scale-110">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
