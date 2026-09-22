"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight, Heart, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/constants";

export function Testimonials() {
  const featuredTestimonial = TESTIMONIALS_DATA[0];
  const teenTestimonial = TESTIMONIALS_DATA[1];

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-[#FAF9F6] relative overflow-hidden scroll-mt-24">
      <div id="stories" className="absolute -top-24" />
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-10 h-[400px] w-[400px] rounded-full bg-primary-100/30 blur-[130px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Context, Trust Metric & CTA */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full bg-primary-50 px-3.5 py-1 text-xs font-semibold text-primary-600 border border-primary-100"
            >
              <span>Why Families Choose LYNKFOLK</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 leading-[1.15] tracking-tight"
            >
              Real stories from <br />
              families finding calm.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg leading-relaxed text-grey-600"
            >
              How parents and teens went from tension and closed doors to daily empathy, calm conversations, and genuine shared laughter.
            </motion.p>

            {/* Trust Rating pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex items-center gap-3 pt-2"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-grey-800">
                4.9/5 Rating
              </span>
              <span className="text-xs text-grey-500">
                · 10,000+ Happy Families
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-4"
            >
              <Link
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary-500/20 hover:bg-primary-600 transition-all hover:scale-105 active:scale-95"
              >
                <span>Start Your Family Journey</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right Column: High-Trust Photo + Testimonial Story Cards */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              
              {/* Authentic Teen Outdoor Portrait with Rotated Handwriting Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="sm:col-span-6 relative"
              >
                <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-grey-100">
                  <Image
                    src="/images/story-teen.jpg"
                    alt="Authentic smiling teen outdoors feeling supported and confident"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Micro quote overlay on photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                    <p className="italic font-medium">
                      &ldquo;{teenTestimonial.quote}&rdquo;
                    </p>
                    <p className="mt-1 font-bold text-primary-200 text-[11px]">
                      — {teenTestimonial.name}, 16
                    </p>
                  </div>
                </div>

                {/* Rotated Handwriting Note */}
                <motion.div
                  initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
                  whileInView={{ opacity: 1, rotate: -6, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -top-4 -left-3 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-lg border border-primary-100 flex items-center gap-1.5 font-handwriting text-xl text-primary-700 pointer-events-none z-20"
                >
                  <span>Real Support Real Growth</span>
                  <span className="text-rose-500 text-lg">♡</span>
                </motion.div>
              </motion.div>

              {/* Main Testimonial Card */}
              <div className="sm:col-span-6 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-3xl border border-grey-100 bg-white p-7 shadow-lg shadow-grey-200/50 relative"
                >
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-primary-200 mb-2 stroke-[1.5]" />

                  <p className="text-sm sm:text-base leading-relaxed text-grey-700 italic">
                    &ldquo;{featuredTestimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3.5 mt-6 pt-4 border-t border-grey-100">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-primary-100 shadow-xs">
                      <Image
                        src={featuredTestimonial.avatarUrl}
                        alt={featuredTestimonial.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-grey-900">
                        {featuredTestimonial.name}
                      </h4>
                      <p className="text-xs text-grey-500">
                        {featuredTestimonial.role} · <span className="text-primary-600 font-medium">{featuredTestimonial.familyContext}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Mini Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="rounded-2xl border border-primary-100 bg-primary-50/50 p-4 shadow-sm flex items-start gap-3"
                >
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 shrink-0 mt-0.5">
                    <Heart className="h-4 w-4 fill-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-grey-700 italic leading-relaxed">
                      &ldquo;Our silent morning drives to school turned into moments where we actually laugh and understand each other.&rdquo;
                    </p>
                    <p className="text-[11px] font-bold text-primary-700 mt-1">
                      David & Maya V. · Connected family
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
