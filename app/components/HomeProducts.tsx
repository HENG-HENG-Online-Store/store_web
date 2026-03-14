"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MOCK_PRODUCTS } from "@/lib/data/products";
import { useCart } from "@/lib/context/cart-context";
import { useLanguage } from "@/lib/context/language-context";
import { formatPrice } from "@/lib/utils/format";

const FEATURED_COUNT = 6;

export default function HomeProducts() {
  const { addItem } = useCart();
  const { t } = useLanguage();
  const featured = MOCK_PRODUCTS.slice(0, FEATURED_COUNT);

  return (
    <section className="py-16 border-t border-[var(--logo-blue)]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-[var(--logo-orange)]">
              {t("featured.title")}
            </h2>
            <p className="text-[var(--logo-blue)] mt-1 flex items-center gap-2 flex-wrap">
              <span aria-hidden>🇺🇸</span>
              {t("featured.subtitle")}
            </p>
          </div>
          <Link
            href="/products"
            className="text-[var(--logo-blue)] font-semibold hover:text-[var(--logo-orange)] transition-colors shrink-0"
          >
            {t("featured.viewAll")}
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product) => (
            <article
              key={product.id}
              className="rounded-2xl bg-[var(--background)] border border-[var(--foreground)]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <Link
                href="/products"
                className="relative w-full aspect-square max-h-48 flex items-center justify-center bg-[var(--foreground)]/[0.04] p-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </Link>
              <div className="p-4 flex flex-col flex-1">
                <Link href="/products" className="group">
                  <h3 className="font-bold text-base text-[var(--foreground)] leading-tight group-hover:text-[var(--logo-orange)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/55 mt-1">
                    {product.brand} · {product.category}
                  </p>
                </Link>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="font-bold text-[var(--logo-orange)]">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  <button
                    type="button"
                    title={t("addToCart")}
                    aria-label={t("addToCart")}
                    onClick={() => addItem(product)}
                    className="shrink-0 p-2 rounded-lg bg-[var(--logo-orange)] text-white hover:bg-[var(--logo-orange-dark)] transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12h14M12 5v14" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
