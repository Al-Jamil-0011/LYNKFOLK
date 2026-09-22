"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ROLE_PILLARS = [
  {
    id: "teens",
    anchorId: "for-teens",
    role: "For Teens",
    subtitle: "Private emotional support",
    description: "Feel heard, build confidence — all in a safe space.",
    image: "/images/avatar-teen.jpg",
    cardBg: "bg-[#E8F5E9]/80 border-emerald-200/50",
    pillBg: "bg-emerald-100 text-emerald-800",
    buttonBg: "bg-white text-emerald-700 hover:bg-emerald-600 hover:text-white",
  },
  {
    id: "parents",
    anchorId: "for-parents",
    role: "For Parents",
    subtitle: "Calm guidance",
    description: "Understand your teen's world, get practical tools, and learn how to support them better.",
    image: "/images/avatar-parent.jpg",
    cardBg: "bg-[#FFF3E0]/90 border-amber-200/50",
    pillBg: "bg-amber-100 text-amber-900",
    buttonBg: "bg-white text-amber-700 hover:bg-amber-600 hover:text-white",
  },
  {
    id: "together",
    anchorId: "together",
    role: "Together",
    subtitle: "Guided conversations",
    description: "Bridge the gap with meaningful conversations and shared activities.",
    image: "/images/avatar-together.jpg",
    cardBg: "bg-[#F3EAFD] border-purple-200/50",
    pillBg: "bg-purple-100 text-purple-800",
    buttonBg: "bg-white text-purple-700 hover:bg-primary-500 hover:text-white",
  },
];

export function RolePillars() {
  return (
    <section id="roles" className="py-8 sm:py-10 md:py-12 bg-[#FAF9F6] relative overflow-hidden scroll-mt-24">
      {/* Decorative organic green blob matching reference on right side */}
      <div className="absolute top-1/4 -right-12 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#7be4a2]/40 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-8 w-40 sm:w-52 h-40 sm:h-52 rounded-full bg-[#a8e6cf]/50 blur-2xl pointer-events-none -z-10" />
      
      {/* Visible fluid SVG shape peeking from the right margin */}
      <svg
        className="absolute -right-10 top-1/3 w-36 sm:w-48 h-36 sm:h-48 text-[#6ed898]/60 pointer-events-none -z-10 hidden sm:block"
        viewBox="0 0 200 200"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M43.7,-63.9C57.3,-54.3,69.5,-42.8,74.4,-28.9C79.3,-15.1,77,1.1,71.2,16.6C65.5,32.1,56.3,46.9,43.5,57.7C30.7,68.4,14.3,75.1,-1.2,76.8C-16.7,78.4,-33.4,75,-47.3,66C-61.2,57,-72.3,42.4,-77.1,26.1C-81.9,9.8,-80.4,-8.2,-73.4,-24.1C-66.4,-40,-53.9,-53.8,-39.8,-63.3C-25.7,-72.7,-10,-77.8,3.9,-82.2C17.8,-86.6,30.1,-73.5,43.7,-63.9Z" transform="translate(100 100)" />
      </svg>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 tracking-tight">
            How <span className="text-primary-600 font-medium">LYNKFOLK</span> helps
          </h2>
          <p className="mt-2 text-sm sm:text-base text-grey-500">
            Different needs. One connected journey.
          </p>
        </div>

        {/* 3 Large Pastel Tinted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {ROLE_PILLARS.map((item, idx) => (
            <motion.div
              key={item.id}
              id={item.anchorId}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`group flex flex-col justify-between h-full rounded-3xl p-7 sm:p-8 border shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 scroll-mt-28 ${item.cardBg}`}
            >
              <div>
                {/* Circular Illustrated Avatar Header */}
                <div className="relative mx-auto mb-6 h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full border-4 border-white shadow-md bg-white">
                  <Image
                    src={item.image}
                    alt={item.role}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>

                {/* Role Title & Subtitle */}
                <h3 className="font-serif-heading text-xl sm:text-2xl font-semibold text-grey-900 mb-1 text-center">
                  {item.role}
                </h3>
                <h4 className="text-sm font-semibold text-grey-800 mb-3 text-center">
                  {item.subtitle}
                </h4>

                {/* Description */}
                <p className="text-sm leading-relaxed text-grey-600 text-center mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Circle Arrow Button */}
              <div className="flex justify-center pt-2">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full shadow-xs transition-all duration-300 group-hover:scale-110 ${item.buttonBg}`}
                >
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
