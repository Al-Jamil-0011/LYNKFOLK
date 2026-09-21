"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { TESTIMONIALS_DATA, TestimonialItem } from "@/constants";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold uppercase tracking-widest text-primary-600 mb-3"
          >
            Heartfelt Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 tracking-tight"
          >
            Loved by families everywhere
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-grey-600"
          >
            Hear how LYNKFOLK is transforming home dynamics and deepening relationships.
          </motion.p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t: TestimonialItem, idx: number) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col justify-between rounded-3xl border border-grey-100 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Purple heart rating icons as requested */}
                <div className="flex items-center gap-1.5 text-primary-500 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Heart key={i} className="h-4 w-4 fill-primary-500 text-primary-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base leading-relaxed text-grey-700 italic mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-grey-100">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary-100 shadow-xs">
                  <Image
                    src={t.avatarUrl}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-grey-900">
                    {t.name}
                  </h4>
                  <p className="text-xs text-grey-500">
                    {t.role} · <span className="text-primary-600 font-medium">{t.familyContext}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
