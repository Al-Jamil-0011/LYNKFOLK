"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Smile, Sparkles, MessageCircle, Heart, ArrowRight, ChevronRight } from "lucide-react";

const STEPS = [
  {
    num: "1. Check in",
    desc: "Share mood, journal or engagement insights.",
    icon: Smile,
    color: "bg-purple-50 text-purple-600",
  },
  {
    num: "2. Get Matched",
    desc: "Our system finds the right module for your needs.",
    icon: Sparkles,
    color: "bg-secondary-50 text-secondary-600",
  },
  {
    num: "3. Take Action",
    desc: "Follow structured guidance, tools and conversation scripts.",
    icon: MessageCircle,
    color: "bg-sky-50 text-sky-600",
  },
  {
    num: "4. Grow Together",
    desc: "Build solid habits, stronger conversation and lasting bonds.",
    icon: Heart,
    color: "bg-rose-50 text-rose-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-8 sm:py-10 md:py-12 bg-[#FAF9F6] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Soft Lavender Mist Framed Container */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#F8F5FC] border border-purple-100/60 p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden shadow-xs">
          
          {/* Decorative organic green fluid blob on the bottom-left edge */}
          <div className="absolute -bottom-10 -left-10 w-40 sm:w-52 h-40 sm:h-52 rounded-full bg-[#7be4a2]/35 blur-2xl pointer-events-none" />
          <div className="absolute bottom-4 -left-6 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#a8e6cf]/50 blur-xl pointer-events-none" />
          <svg
            className="absolute -left-6 bottom-4 w-28 sm:w-36 h-28 sm:h-36 text-[#6ed898]/40 pointer-events-none hidden sm:block"
            viewBox="0 0 200 200"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M47.7,-64.9C61.3,-56.3,71.5,-41.8,75.4,-25.9C79.3,-10.1,77,7.1,71.2,22.6C65.5,38.1,56.3,51.9,43.5,61.7C30.7,71.4,14.3,77.1,-1.2,78.8C-16.7,80.4,-33.4,78,-47.3,69C-61.2,60,-72.3,44.4,-77.1,27.1C-81.9,9.8,-80.4,-9.2,-73.4,-25.1C-66.4,-41,-53.9,-53.8,-39.8,-62.3C-25.7,-70.7,-10,-74.8,3.9,-80.2C17.8,-85.6,34.1,-73.5,47.7,-64.9Z" transform="translate(100 100)" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
            {/* Left Column: Heading, Description & Action */}
            <div className="lg:col-span-4 flex flex-col items-start text-left">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-600 bg-white/80 px-3.5 py-1 rounded-full border border-primary-100 mb-3 shadow-2xs">
                HOW IT WORKS
              </span>
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 tracking-tight leading-[1.15]">
                How It Works
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-grey-600">
                LYNKFOLK guides you through a structured routine with personalized support, tools, and meaningful conversations.
              </p>
              <div className="mt-6">
                <Link
                  href="#tools-showcase"
                  className="inline-flex items-center gap-2 rounded-full bg-primary-500 hover:bg-primary-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: 4 Step Cards with Chevrons */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 items-stretch">
                {STEPS.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.08 }}
                      className="relative rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 border border-purple-100/70 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className={`h-10 w-10 rounded-2xl flex items-center justify-center mb-4 ${step.color} shadow-2xs`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-sm text-grey-900 mb-1.5">
                          {step.num}
                        </h3>
                        <p className="text-xs leading-relaxed text-grey-500">
                          {step.desc}
                        </p>
                      </div>

                      {/* Chevron connector between steps (desktop only) */}
                      {idx < STEPS.length - 1 && (
                        <div className="hidden xl:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-6 w-6 rounded-full bg-[#F8F5FC] border border-purple-200/80 items-center justify-center text-primary-400">
                          <ChevronRight className="h-3.5 w-3.5" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

