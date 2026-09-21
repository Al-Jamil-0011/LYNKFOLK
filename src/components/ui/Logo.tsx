import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imageClassName?: string;
  showTagline?: boolean;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-8 sm:h-9 w-auto",
  md: "h-10 sm:h-12 w-auto",
  lg: "h-12 sm:h-14 md:h-16 w-auto",
};

export function Logo({
  className,
  imageClassName,
  showTagline = true,
  priority = true,
  size = "md",
}: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <div className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
        <Image
          src="/assets/logo.png"
          alt="LYNKFOLK Logo"
          width={778}
          height={654}
          priority={priority}
          className={cn(
            "object-contain filter drop-shadow-[0_2px_8px_rgba(138,44,226,0.12)]",
            sizeClasses[size],
            imageClassName
          )}
        />
      </div>

      {showTagline && (
        <div className="hidden sm:flex flex-col justify-center border-l border-grey-200 pl-3 py-0.5">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase text-primary-600">
            LYNKFOLK
          </span>
          <span className="text-[10px] font-medium tracking-normal text-grey-500 leading-tight">
            Stronger Families. Brighter Futures.
          </span>
        </div>
      )}
    </div>
  );
}

