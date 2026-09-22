import React from "react";
import { cn } from "@/lib/utils";

interface StoreBadgesProps {
  className?: string;
  variant?: "dark" | "light";
}

export function StoreBadges({ className, variant = "dark" }: StoreBadgesProps) {
  const isLight = variant === "light";
  const btnClass = isLight
    ? "inline-flex items-center gap-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2.5 text-white hover:bg-white/25 transition-all shadow-md group hover:scale-[1.02]"
    : "inline-flex items-center gap-2.5 rounded-xl bg-grey-900 px-4 py-2.5 text-white hover:bg-grey-800 transition-all shadow-sm group hover:scale-[1.02]";

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {/* Apple App Store */}
      <a
        href="#download"
        className={btnClass}
        aria-label="Download on the App Store"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6 fill-white"
        >
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.35-.58.67-1.09 1.74-.95 2.77 1.01.08 2.05-.52 2.67-1.27Z" />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[9px] font-normal uppercase tracking-wider text-grey-200">
            Download on the
          </span>
          <span className="text-xs font-semibold text-white tracking-tight">
            App Store
          </span>
        </div>
      </a>

      {/* Google Play Store */}
      <a
        href="#download"
        className={btnClass}
        aria-label="Get it on Google Play"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            d="M3.609 1.814L13.792 12 3.61 22.186A2.217 2.217 0 0 1 3 20.617V3.383c0-.622.228-1.19.609-1.569z"
            fill="#00D3FF"
          />
          <path
            d="M17.18 8.613L4.992.836A1.897 1.897 0 0 0 3.609 1.814L13.792 12l3.388-3.387z"
            fill="#00F076"
          />
          <path
            d="M3.61 22.186c.414.288.92.428 1.446.223l12.124-7.796L13.792 12 3.61 22.186z"
            fill="#FF3A44"
          />
          <path
            d="M20.575 10.776l-3.395-2.163L13.792 12l3.388 3.387 3.395-2.182c.983-.63 1.425-1.536 1.425-2.429 0-.893-.442-1.799-1.425-2.429z"
            fill="#FFA700"
          />
        </svg>
        <div className="flex flex-col text-left leading-tight">
          <span className="text-[9px] font-normal uppercase tracking-wider text-grey-300">
            GET IT ON
          </span>
          <span className="text-xs font-semibold text-white tracking-tight">
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
}
