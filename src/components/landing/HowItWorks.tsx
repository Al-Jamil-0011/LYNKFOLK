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
    <section id="how-it-works" className="py-20 sm:py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Description & Action */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 px-3.5 py-1 rounded-full border border-primary-100 mb-4">
              HOW IT WORKS
            </span>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 tracking-tight leading-[1.15]">
              How It Works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-grey-600">
              LYNKFOLK guides you through a structured routine with personalized support, tools, and meaningful conversations.
            </p>
            <div className="mt-6">
              <Link
                href="#features"
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
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="relative rounded-3xl bg-white p-5 border border-grey-200/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
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
                      <div className="hidden xl:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-6 w-6 rounded-full bg-[#FAF9F6] border border-grey-200 items-center justify-center text-grey-400">
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
    </section>
  );
}

