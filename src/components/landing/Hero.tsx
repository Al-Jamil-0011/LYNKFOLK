"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { HERO_DATA } from "@/constants";

export function Hero() {
  const [selectedMood, setSelectedMood] = useState<number>(0);

  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-b from-white via-primary-50/15 to-white"
    >
      {/* Ambient background soft glow blooms matching color palette */}
      <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary-400/10 via-primary-200/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-secondary-400/15 via-secondary-200/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-12 left-6 h-[380px] w-[380px] rounded-full bg-primary-100/20 blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Typography, CTAs & Social Proof */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center text-left z-10 animate-in fade-in slide-in-from-bottom-3 duration-700">
            {/* Pill Tag with subtle status pulse */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3.5 py-1.5 text-xs font-semibold text-primary-700 border border-primary-100 shadow-2xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
              <span>{HERO_DATA.badge}</span>
              <span className="text-primary-300">•</span>
              <span className="text-primary-600 font-medium">Private & Safe</span>
            </div>

            {/* H1: Exact typography style with secondary-500 (#2ed4ff) blue for 'understand' */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-normal leading-[1.08] tracking-tight text-grey-900">
              A calmer way to <br className="hidden sm:inline" />
              <span className="font-serif italic text-secondary-500">understand</span> each other.
            </h1>

            {/* Sub-text: Shortened, clarified, neutral grey-700 */}
            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-grey-700 max-w-xl font-normal">
              LYNKFOLK helps families express feelings, understand each other, and build deeper connections with private, AI-powered support.
            </p>

            {/* CTAs: Primary and Secondary buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA: Start Your Family Space */}
              <Link
                href="#get-started"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-primary-500 px-8 py-4 text-base font-semibold text-white shadow-md shadow-primary-500/25 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 w-full sm:w-auto text-center"
              >
                <span>Start Your Family Space</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA: How It Works */}
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-500/25 bg-primary-50/50 px-7 py-4 text-base font-semibold text-primary-600 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all duration-200 w-full sm:w-auto text-center"
              >
                <span>How It Works</span>
              </Link>
            </div>

            {/* Social Proof & Trust Badges: Perfectly horizontally aligned, grey-800 typography */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 pt-6 border-t border-grey-100/90 w-full">
              {/* Rating and Family Count */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                    <Image
                      src="/images/avatar-parent.jpg"
                      alt="Parent avatar"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                    <Image
                      src="/images/avatar-teen.jpg"
                      alt="Teen avatar"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <div className="relative h-8 w-8 rounded-full border-2 border-white overflow-hidden shadow-xs">
                    <Image
                      src="/images/avatar-together.jpg"
                      alt="Together avatar"
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <div className="flex items-center text-amber-400 text-xs">
                    {"★".repeat(5)}
                    <span className="ml-1.5 font-bold text-grey-800 text-xs">4.9/5</span>
                  </div>
                  <span className="text-[12px] font-medium text-grey-800">
                    2,400+ families connected
                  </span>
                </div>
              </div>

              <div className="h-8 w-px bg-grey-200 hidden sm:block" />

              {/* Privacy Trust Badge (Harmonized with light blue spectrum) */}
              <div className="inline-flex items-center gap-3 text-left">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600 border border-secondary-200/70 shadow-2xs">
                  <Shield className="h-4 w-4 text-secondary-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-grey-800">
                    Private by Default
                  </span>
                  <span className="text-[11px] font-medium text-grey-800">
                    Zero data sold • End-to-end encrypted
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Larger Family Image + Clean Framing Floating Cards */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex justify-end items-center">
            {/* Multi-layered ambient backlight glow behind imagery */}
            <div className="absolute -inset-8 rounded-[48px] bg-gradient-to-tr from-primary-500/20 via-secondary-400/20 to-primary-300/10 blur-3xl -z-10" />
            <div className="absolute -inset-2 rounded-[36px] bg-gradient-to-r from-primary-500/10 to-secondary-500/15 blur-lg -z-10" />

            {/* Main Family Image: Larger, sharper, more spacious with rounded-3xl */}
            <div className="relative w-full max-w-[530px] lg:max-w-[570px] xl:max-w-[600px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-black/5 animate-in fade-in duration-700 ml-auto">
              <Image
                src="/images/hero-family.jpg"
                alt="Father and teenage daughter sharing a calm, happy conversation"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 570px, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Subtle active status indicator */}
              <div className="absolute bottom-3.5 left-4 z-10 inline-flex items-center gap-2 rounded-full bg-grey-900/80 backdrop-blur-md px-3 py-1 text-white border border-white/15 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-secondary-400 animate-ping" />
                <span className="text-[11px] font-medium tracking-wide">Family Space Active</span>
              </div>
            </div>

            {/* Floating Card 1: Mood Check-in (Pushed leftward toward text, framing the photo without obscuring faces) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-10 lg:-left-14 z-20 rounded-2xl border border-grey-100/90 bg-white/95 p-3.5 sm:p-4 shadow-md shadow-grey-900/5 backdrop-blur-md max-w-[230px] transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <Heart className="h-3.5 w-3.5 text-primary-500 fill-primary-500" />
                  <span className="text-xs font-bold text-grey-900">
                    Mood Check-in
                  </span>
                </div>
                <span className="text-[10px] font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full border border-primary-100">
                  Daily
                </span>
              </div>

              <p className="text-[11px] text-grey-700 mb-2.5">
                How are you feeling today?
              </p>

              {/* Minimal emoji selector */}
              <div className="flex items-center justify-between gap-1 mb-2">
                {HERO_DATA.moodCard.emojis.map((item, idx) => (
                  <button
                    key={item.mood}
                    type="button"
                    onClick={() => setSelectedMood(idx)}
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-sm transition-all cursor-pointer ${
                      selectedMood === idx
                        ? "scale-110 ring-2 ring-primary-500 shadow-sm bg-white"
                        : "hover:scale-105 opacity-80"
                    } ${item.color}`}
                    title={item.mood}
                  >
                    {item.emoji}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-1 pt-1.5 border-t border-grey-100">
                <CheckCircle2 className="h-3 w-3 text-primary-500" />
                <p className="text-[10px] font-semibold text-primary-600">
                  You&apos;ve got this 💜
                </p>
              </div>
            </motion.div>

            {/* Floating Card 2: Private AI Support (Top right above image corner) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut", delay: 0.4 }}
              className="hidden sm:flex absolute -top-7 -right-2 sm:-right-4 z-20 items-center gap-3 rounded-2xl border border-grey-100/90 bg-white/95 p-3 shadow-md shadow-grey-900/5 backdrop-blur-md max-w-[240px] transition-all hover:shadow-lg"
            >
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-secondary-50 text-secondary-600 border border-secondary-100 shadow-2xs">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-grey-900">
                  Private AI Support
                </span>
                <span className="text-[11px] text-grey-700 leading-tight">
                  A safe space to talk, anytime.
                </span>
              </div>
            </motion.div>

            {/* Floating Card 3: Shared Conversation Prompt (Bottom right below image corner) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-7 -right-2 sm:-right-4 z-20 rounded-2xl border border-grey-100/90 bg-white/95 p-3.5 shadow-md shadow-grey-900/5 backdrop-blur-md max-w-[270px] transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary-50 text-primary-600">
                    <MessageCircle className="h-3 w-3" />
                  </div>
                  <span className="text-xs font-bold text-grey-900">
                    Shared Prompt
                  </span>
                </div>
                <span className="text-[10px] font-medium text-secondary-700 bg-secondary-50 px-2 py-0.5 rounded-full border border-secondary-100">
                  Today
                </span>
              </div>

              <p className="text-xs font-medium text-grey-800 leading-snug italic mb-2">
                &ldquo;What&apos;s something you wish I understood better about you?&rdquo;
              </p>

              <div className="flex items-center justify-between pt-1.5 border-t border-grey-100 text-[10px] text-grey-700 font-medium">
                <span>Safe family reply</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-white shadow-2xs">
                  <ArrowRight className="h-2.5 w-2.5" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



