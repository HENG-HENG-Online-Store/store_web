"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import type { Product } from "@/lib/types/product";
import { MOCK_PRODUCTS } from "@/lib/data/products";
import { useCart } from "@/lib/context/cart-context";
import { useLanguage } from "@/lib/context/language-context";
import { formatPrice } from "@/lib/utils/format";

const BRANDS = Array.from(new Set(MOCK_PRODUCTS.map((p) => p.brand))).sort();

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const { addItem } = useCart();
  const { t } = useLanguage();

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MOCK_PRODUCTS.filter((p) => {
      const matchBrand = !selectedBrand || p.brand === selectedBrand;
      if (!matchBrand) return false;
      if (!q) return true;
      const searchable = [p.name, p.brand, p.category, p.description].join(" ").toLowerCase();
      return searchable.includes(q);
    });
  }, [searchQuery, selectedBrand]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-[var(--background)]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-detail-title"
        >
          <button
            type="button"
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/10 hover:bg-black/20 text-[var(--foreground)] transition-colors"
            aria-label={t("modal.close")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="flex-1 flex flex-col min-h-0 sm:flex-row">
            <div className="flex-1 min-h-[40vh] sm:min-h-0 flex items-center justify-center p-6 sm:p-12 bg-[var(--foreground)]/[0.04]">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                width={400}
                height={400}
                className="object-contain w-full h-full max-h-[50vh] sm:max-h-none"
                sizes="100vw"
              />
            </div>
            <div className="shrink-0 w-full sm:w-[min(100%,28rem)] flex flex-col justify-center p-6 sm:p-10 overflow-y-auto border-t sm:border-t-0 sm:border-l border-[var(--foreground)]/10">
              <h2 id="product-detail-title" className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                {selectedProduct.name}
              </h2>
              <p className="text-base text-[var(--foreground)]/70 mt-2">
                {selectedProduct.brand} · {selectedProduct.category}
              </p>
              {(selectedProduct.model || selectedProduct.storage || selectedProduct.color) && (
                <p className="text-sm text-[var(--foreground)]/60 mt-1">
                  {[selectedProduct.model, selectedProduct.storage, selectedProduct.color].filter(Boolean).join(" · ")}
                </p>
              )}
              <p className="mt-4 text-[var(--foreground)]/90 leading-relaxed text-base">
                {selectedProduct.description}
              </p>
              {selectedProduct.specs && selectedProduct.specs.length > 0 && (
                <dl className="mt-6 space-y-2">
                  {selectedProduct.specs.map(({ label, value }) => (
                    <div key={label} className="flex flex-wrap gap-x-2 gap-y-0 text-sm">
                      <dt className="font-medium text-[var(--foreground)]/80 shrink-0">{label}:</dt>
                      <dd className="text-[var(--foreground)]/90">{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <span className="text-2xl font-bold text-[var(--logo-orange)]">
                  {formatPrice(selectedProduct.price, selectedProduct.currency)}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    addItem(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="px-6 py-3 rounded-lg bg-[var(--logo-orange)] text-white font-semibold hover:bg-[var(--logo-orange-dark)] transition-colors"
                >
                  {t("addToCart")}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--logo-orange)] mb-2">
          {t("products.title")}
        </h1>
        <p className="text-[var(--logo-blue)] mb-2">
          {t("products.subtitle")}
        </p>
        <p className="text-sm text-[var(--foreground)]/70 mb-6 flex items-center gap-2">
          <span className="text-base" aria-hidden>🇺🇸</span>
          {t("products.importUSA")}
        </p>

        <div className="mb-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <label className="relative block w-full sm:max-w-xs">
            <span className="sr-only">{t("products.searchPlaceholder")}</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t("products.searchPlaceholder")}
              className="w-full rounded-xl border border-[var(--foreground)]/20 bg-[var(--background)] px-4 py-3 pl-10 text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:border-[var(--logo-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--logo-orange)]/20"
              aria-label={t("products.searchPlaceholder")}
            />
            <svg
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--foreground)]/50"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </label>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-[var(--foreground)]/70 shrink-0">{t("products.filterByBrand")}:</span>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] focus:border-[var(--logo-orange)] focus:outline-none focus:ring-2 focus:ring-[var(--logo-orange)]/20"
              aria-label={t("products.filterByBrand")}
            >
              <option value="">{t("products.allBrands")}</option>
              {BRANDS.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-[var(--foreground)]/70 py-12">{t("products.noResults")}</p>
        ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="rounded-2xl bg-[var(--background)] border border-[var(--foreground)]/10 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <button
                type="button"
                className="relative w-full aspect-square max-h-56 flex items-center justify-center bg-[var(--foreground)]/[0.04] p-4 text-left cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </button>
              <div className="p-4 flex flex-col flex-1">
                <button
                  type="button"
                  className="text-left hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedProduct(product)}
                >
                  <h2 className="font-bold text-base text-[var(--foreground)] leading-tight">
                    {product.name}
                  </h2>
                  <p className="text-sm text-[var(--foreground)]/55 mt-1">
                    {product.brand} · {product.category}
                  </p>
                </button>
                <div className="mt-4 flex items-center justify-between gap-2">
                  <span className="font-bold text-[var(--logo-orange)]">
                    {formatPrice(product.price, product.currency)}
                  </span>
                  <button
                    type="button"
                    title={t("addToCart")}
                    aria-label={t("addToCart")}
                    onClick={(e) => {
                      e.stopPropagation();
                      addItem(product);
                    }}
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
        )}
      </main>

      <Footer />
    </div>
  );
}
