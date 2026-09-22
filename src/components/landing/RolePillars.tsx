"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ROLE_PILLARS = [
  {
    id: "teens",
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
    <section id="roles" className="py-20 sm:py-24 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative organic blob matching reference on right side */}
      <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-[40px] bg-emerald-200/40 blur-[80px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 tracking-tight">
            How <span className="text-primary-600 font-medium">LYNKFOLK</span> helps
          </h2>
          <p className="mt-3 text-base sm:text-lg text-grey-500">
            Different needs. One connected journey.
          </p>
        </div>

        {/* 3 Large Pastel Tinted Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROLE_PILLARS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`group flex flex-col justify-between rounded-3xl p-8 border shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ${item.cardBg}`}
            >
              <div>
                {/* Circular Illustrated Avatar Header */}
                <div className="relative mx-auto mb-8 h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-md bg-white">
                  <Image
                    src={item.image}
                    alt={item.role}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>

                {/* Role Title & Subtitle */}
                <h3 className="font-serif-heading text-xl sm:text-2xl font-semibold text-grey-900 mb-1.5 text-center">
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
