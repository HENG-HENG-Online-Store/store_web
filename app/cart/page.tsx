"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useCart } from "@/lib/context/cart-context";
import { useLanguage } from "@/lib/context/language-context";
import { formatPrice } from "@/lib/utils/format";

export default function CartPage() {
  const { items, removeItem, updateQuantity, itemCount } = useCart();
  const { t } = useLanguage();

  const total = items.reduce(
    (sum, i) => sum + i.product.price * i.quantity,
    0
  );
  const currency = items[0]?.product.currency ?? "$";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--logo-orange)] mb-2">
          {t("cart.title")}
        </h1>
        <p className="text-[var(--logo-blue)] mb-8">
          {t("cart.subtitle")}
        </p>

        {items.length === 0 ? (
          <div className="rounded-xl border border-[var(--logo-blue)]/20 bg-[var(--logo-orange)]/5 p-8 text-center">
            <p className="text-[var(--foreground)]/80 mb-4">
              {t("cart.empty")}
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--logo-orange)] text-white font-semibold hover:bg-[var(--logo-orange-dark)] transition-colors"
            >
              {t("cart.viewProducts")}
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)]"
                >
                  <div className="relative w-full sm:w-24 aspect-square shrink-0 bg-[var(--foreground)]/[0.04] rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h2 className="font-bold text-[var(--foreground)]">
                        {product.name}
                      </h2>
                      <p className="text-sm text-[var(--foreground)]/60">
                        {product.brand} · {product.category}
                      </p>
                      <p className="mt-1 font-semibold text-[var(--logo-orange)]">
                        {formatPrice(product.price, product.currency)} × {quantity} = {formatPrice(product.price * quantity, product.currency)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[var(--foreground)]/20 rounded-lg overflow-hidden">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-9 h-9 flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-colors"
                          aria-label={t("cart.quantityLess")}
                        >
                          −
                        </button>
                        <span className="w-10 h-9 flex items-center justify-center text-sm font-medium border-x border-[var(--foreground)]/20">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-9 h-9 flex items-center justify-center text-[var(--foreground)] hover:bg-[var(--foreground)]/10 transition-colors"
                          aria-label={t("cart.quantityMore")}
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="p-2 rounded-lg text-red-600 hover:bg-red-500/10 transition-colors"
                        title={t("cart.remove")}
                        aria-label={t("cart.remove")}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                          <line x1="10" y1="11" x2="10" y2="17" />
                          <line x1="14" y1="11" x2="14" y2="17" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 rounded-xl border border-[var(--logo-orange)]/30 bg-[var(--logo-orange)]/5">
              <p className="text-lg font-bold text-[var(--foreground)]">
                {t("cart.total", { count: String(itemCount) })}:{" "}
                <span className="text-[var(--logo-orange)]">
                  {formatPrice(total, currency)}
                </span>
              </p>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-[var(--logo-orange)] text-white font-semibold hover:bg-[var(--logo-orange-dark)] transition-colors shrink-0"
              >
                {t("cart.checkout")}
              </Link>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
