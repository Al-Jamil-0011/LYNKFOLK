"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquareHeart, ArrowRight } from "lucide-react";
import { CONVERSATION_HIGHLIGHT_DATA } from "@/constants";

export function ConversationsHighlight() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mother & Daughter Candid Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={CONVERSATION_HIGHLIGHT_DATA.image}
                alt="Mother and teenage daughter having a close, empathetic conversation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: Copy & Interactive Daily Prompt Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full bg-primary-50 px-3.5 py-1 text-xs font-semibold text-primary-600 border border-primary-100 mb-6"
            >
              <span>{CONVERSATION_HIGHLIGHT_DATA.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-grey-900 leading-[1.15] tracking-tight"
            >
              Small moments can <br className="hidden sm:inline" />
              change conversations.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-grey-600 max-w-xl"
            >
              {CONVERSATION_HIGHLIGHT_DATA.description}
            </motion.p>

            {/* Interactive "Try this today" Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 rounded-2xl border border-grey-200/90 bg-white p-6 shadow-lg shadow-grey-200/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                    <MessageSquareHeart className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary-500">
                      {CONVERSATION_HIGHLIGHT_DATA.card.tag}
                    </span>
                    <p className="mt-1 text-sm sm:text-base font-medium text-grey-900 italic">
                      &ldquo;{CONVERSATION_HIGHLIGHT_DATA.card.prompt}&rdquo;
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Start prompt"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-primary-500 hover:text-white transition-all shadow-xs hover:scale-110 cursor-pointer"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
