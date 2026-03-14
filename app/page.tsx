"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeProducts from "./components/HomeProducts";
import { useLanguage } from "@/lib/context/language-context";
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_DIRECTIONS_URL } from "@/lib/constants/location";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url(/usa-flag.svg)" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--logo-orange)]/20 via-[var(--background)]/75 to-[var(--logo-blue)]/20" aria-hidden />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-12">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--logo-orange)] mb-4">
              {t("hero.welcome")}
            </h1>
            <p className="text-lg text-[var(--logo-blue)] mb-2 max-w-xl">
              {t("hero.tagline")}
            </p>
            <p className="text-sm text-[var(--foreground)]/70 mb-6 max-w-xl flex items-center gap-2 flex-wrap">
              <span className="text-lg" aria-hidden>🇺🇸</span>
              {t("hero.importUSA")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--logo-orange)] text-white font-semibold hover:bg-[var(--logo-orange-dark)] transition-colors shadow-md"
              >
                {t("hero.browseProducts")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[var(--logo-blue)] text-[var(--logo-blue)] font-semibold hover:bg-[var(--logo-blue)]/10 transition-colors"
              >
                {t("hero.contact")}
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="/logo/logo.png"
              alt={t("brand.full")}
              width={280}
              height={280}
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      <HomeProducts />

      {/* Features / Why us */}
      <section className="py-16 border-t border-[var(--logo-blue)]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--logo-orange)] text-center mb-10">
            {t("features.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-[var(--logo-orange)]/5 border border-[var(--logo-orange)]/20">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--logo-orange)]/20 flex items-center justify-center text-[var(--logo-orange)] text-xl font-bold">
                🛒
              </div>
              <h3 className="font-bold text-[var(--logo-blue)] mb-2">{t("features.online")}</h3>
              <p className="text-[var(--foreground)]/80 text-sm">
                {t("features.onlineDesc")}
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[var(--logo-blue)]/5 border border-[var(--logo-blue)]/20">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--logo-blue)]/20 flex items-center justify-center text-[var(--logo-blue)] text-xl font-bold">
                ✓
              </div>
              <h3 className="font-bold text-[var(--logo-blue)] mb-2">{t("features.real")}</h3>
              <p className="text-[var(--foreground)]/80 text-sm">
                {t("features.realDesc")}
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[var(--logo-orange)]/5 border border-[var(--logo-orange)]/20">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--logo-orange)]/20 flex items-center justify-center text-[var(--logo-orange)] text-xl font-bold">
                📞
              </div>
              <h3 className="font-bold text-[var(--logo-blue)] mb-2">{t("features.support")}</h3>
              <p className="text-[var(--foreground)]/80 text-sm">
                {t("features.supportDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location: address + map + directions */}
      <section className="py-16 border-t border-[var(--logo-blue)]/15 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--logo-orange)] text-center mb-10">
            {t("location.title")}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4">
              <p className="font-medium text-[var(--foreground)]/80">{t("contact.address")}</p>
              <p className="text-lg text-[var(--foreground)]">
                {t("contact.addressValue")}
              </p>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[var(--logo-orange)] text-white font-semibold hover:bg-[var(--logo-orange-dark)] transition-colors shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {t("location.getDirections")}
              </a>
            </div>
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-[var(--foreground)]/10 shadow-lg aspect-[4/3] min-h-[280px]">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("location.title")}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
