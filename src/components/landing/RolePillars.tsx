"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function RolePillars() {
  return (
    <section
      id="roles"
      className="py-12 sm:py-16 md:py-20 bg-[#FAF9F6] relative overflow-hidden scroll-mt-24"
    >
      {/* Soft Ambient Radial Gradients */}
      <div className="absolute top-8 left-10 w-96 h-96 rounded-full bg-[#E8F8F0]/60 blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-8 w-[450px] h-[450px] rounded-full bg-[#F3EAFD]/50 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-[#FFF5EB]/60 blur-[90px] pointer-events-none -z-10" />

      {/* Decorative Organic Wave Canvas Container */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        
        {/* Playful Handwritten Tag: "Family Care ♡" */}
        <div className="absolute -top-3 left-4 sm:left-8 z-20 flex items-center gap-1 font-handwriting text-2xl sm:text-3xl text-grey-800 font-semibold -rotate-6 select-none pointer-events-none">
          <span>Family Care</span>
          <span className="text-rose-400 text-xl sm:text-2xl">♡</span>
        </div>

        {/* Top-Right Doodle Stars */}
        <div className="absolute top-2 right-6 sm:right-12 z-10 text-grey-400 select-none pointer-events-none hidden sm:block">
          <svg className="w-6 h-6 text-grey-600 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L13.8 8.8L20.6 10.6L13.8 12.4L12 19.2L10.2 12.4L3.4 10.6L10.2 8.8L12 2Z" />
          </svg>
          <svg className="w-4 h-4 text-grey-500 ml-4 -mt-1 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
          </svg>
        </div>

        {/* Section Heading with Rainbow Gradient Underline & Doodle Sparkle */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 relative z-10">
          <div className="relative inline-block">
            {/* Top-Left Sparkle Doodle beside "How" */}
            <span className="absolute -top-3 -left-6 sm:-left-8 text-grey-600 pointer-events-none select-none">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L13.5 9.5L21 11L13.5 12.5L12 20L10.5 12.5L3 11L10.5 9.5L12 2Z" />
              </svg>
            </span>

            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-normal text-grey-900 tracking-tight">
              How{" "}
              <span className="relative inline-block text-primary-600 font-medium">
                LYNKFOLK
                {/* Horizontal Gradient Accent Line under LYNKFOLK */}
                <span className="absolute -bottom-1.5 left-0 right-0 h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-teal-300 via-primary-500 to-amber-300 shadow-xs" />
              </span>{" "}
              helps
            </h2>
          </div>
          
          <p className="mt-3 text-sm sm:text-base text-grey-500 font-normal">
            Different needs. One connected journey.
          </p>
        </div>

        {/* Left & Right Subtle Doodle Leaves */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none select-none hidden lg:block">
          <svg className="w-10 h-10 text-emerald-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 70C25 40 55 30 80 15C65 45 50 65 20 70Z" />
            <path d="M20 70Q45 50 80 15" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none select-none hidden lg:block">
          <svg className="w-10 h-10 text-purple-600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M80 70C75 40 45 30 20 15C35 45 50 65 80 70Z" />
            <path d="M80 70Q55 50 20 15" strokeLinecap="round" />
          </svg>
        </div>

        {/* Interactive 3-Card Grid Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch relative z-10">
          
          {/* Card 1: For Teens (Soft Mint Tint) */}
          <motion.div
            id="for-teens"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group flex flex-col justify-between h-full rounded-[32px] p-6 sm:p-7 md:p-8 bg-[#EBF7EE]/90 border border-emerald-100/90 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 text-center relative scroll-mt-28"
          >
            <div>
              {/* Circular Avatar with Glowing Ring & Floating Musical Notes */}
              <div className="relative mx-auto mb-6 h-28 w-28 sm:h-32 sm:w-32 flex items-center justify-center">
                {/* Ambient Halo Glow */}
                <div className="absolute inset-0 rounded-full bg-emerald-200/50 blur-lg pointer-events-none" />
                
                {/* Floating Musical Notes Micro-Doodles */}
                <motion.span
                  animate={{ y: [0, -5, 0], rotate: [-8, 4, -8] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -left-2 text-teal-500 text-xl font-bold select-none pointer-events-none drop-shadow-xs"
                >
                  ♪
                </motion.span>
                <motion.span
                  animate={{ y: [0, 5, 0], rotate: [6, -6, 6] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute -top-3 -right-2 text-teal-500 text-xl font-bold select-none pointer-events-none drop-shadow-xs"
                >
                  ♫
                </motion.span>

                {/* Avatar Image */}
                <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                  <Image
                    src="/images/avatar-teen.jpg"
                    alt="For Teens"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Title, Sub-label & Description */}
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                For Teens
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                Private emotional support
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                Feel heard, build confidence &mdash; all in a safe space.
              </p>
            </div>

            {/* Bottom CTA Pill Button: "LYNKFOLK →" */}
            <div className="flex justify-center pt-2">
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#7c28d4] to-[#9d4edd] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>LYNKFOLK</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: For Parents (Warm Amber/Peach Tint) */}
          <motion.div
            id="for-parents"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.08 }}
            className="group flex flex-col justify-between h-full rounded-[32px] p-6 sm:p-7 md:p-8 bg-[#FFF4EB]/90 border border-amber-100/90 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 text-center relative scroll-mt-28"
          >
            <div>
              {/* Circular Avatar with Glowing Ring & Ambient Bokeh Dots */}
              <div className="relative mx-auto mb-6 h-28 w-28 sm:h-32 sm:w-32 flex items-center justify-center">
                {/* Ambient Halo Glow */}
                <div className="absolute inset-0 rounded-full bg-amber-200/50 blur-lg pointer-events-none" />
                
                {/* Ambient Bokeh Dots */}
                <span className="absolute -top-1 -left-3 h-3 w-3 rounded-full bg-amber-300/60 blur-xs pointer-events-none" />
                <span className="absolute top-1/2 -right-3 h-2.5 w-2.5 rounded-full bg-amber-400/50 blur-xs pointer-events-none" />
                <span className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-orange-300/60 blur-xs pointer-events-none" />

                {/* Avatar Image */}
                <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                  <Image
                    src="/images/avatar-parent.jpg"
                    alt="For Parents"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Title, Sub-label & Description */}
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                For Parents
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                Calm guidance
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                Understand your teen&apos;s world, get practical tools, and learn how to support them better.
              </p>
            </div>

            {/* Bottom CTA Pill Button: "LYNKFOLK →" */}
            <div className="flex justify-center pt-2">
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#7c28d4] to-[#9d4edd] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>LYNKFOLK</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Card 3: Together (Soft Lavender Tint) */}
          <motion.div
            id="together"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.16 }}
            className="group flex flex-col justify-between h-full rounded-[32px] p-6 sm:p-7 md:p-8 bg-[#F3EAFD]/90 border border-purple-100/90 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 text-center relative scroll-mt-28"
          >
            <div>
              {/* Circular Avatar with Glowing Ring & Floating Hearts */}
              <div className="relative mx-auto mb-6 h-28 w-28 sm:h-32 sm:w-32 flex items-center justify-center">
                {/* Ambient Halo Glow */}
                <div className="absolute inset-0 rounded-full bg-purple-200/50 blur-lg pointer-events-none" />
                
                {/* Floating Hearts Micro-Doodles */}
                <motion.span
                  animate={{ y: [0, -5, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-2 text-rose-400 text-sm font-bold select-none pointer-events-none drop-shadow-xs"
                >
                  ♥
                </motion.span>
                <motion.span
                  animate={{ y: [0, -4, 0], scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="absolute top-2 -right-4 text-purple-400 text-xs font-bold select-none pointer-events-none drop-shadow-xs"
                >
                  ♥
                </motion.span>

                {/* Avatar Image */}
                <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                  <Image
                    src="/images/avatar-together.jpg"
                    alt="Together"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* Title, Sub-label & Description */}
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                Together
              </h3>
              <p className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-3">
                Guided conversations
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                Bridge the gap with meaningful conversations and shared activities.
              </p>
            </div>

            {/* Bottom CTA Pill Button: "LYNKFOLK →" */}
            <div className="flex justify-center pt-2">
              <Link
                href="#get-started"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#7c28d4] to-[#9d4edd] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>LYNKFOLK</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom-Left Curved Doodle Arrow */}
        <div className="absolute -bottom-4 left-6 sm:left-10 text-grey-400 select-none pointer-events-none hidden sm:block opacity-60">
          <svg className="w-8 h-8 rotate-12" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 35C20 20 35 15 45 22" strokeLinecap="round" />
            <path d="M38 16L45 22L40 28" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      </div>
    </section>
  );
}
