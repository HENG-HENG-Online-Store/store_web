"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/context/language-context";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-auto bg-[var(--logo-blue)]/10 border-t border-[var(--logo-blue)]/20 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"
            alt={t("brand.name")}
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-bold text-[var(--logo-orange)]">{t("brand.name")}</span>
          <span className="text-sm text-[var(--logo-blue)]">{t("brand.tagline")}</span>
        </div>
        <p className="text-sm text-[var(--foreground)]/70">
          © {new Date().getFullYear()} {t("brand.full")}. {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
