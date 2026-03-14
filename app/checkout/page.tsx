"use client";

import React from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--logo-orange)] mb-2">
          ទូរទាត់រួច
        </h1>
        <p className="text-[var(--logo-blue)] mb-8">
          ទំព័រទូរទាត់នឹងមាននៅពេលក្រោយ។
        </p>
        <div className="rounded-xl border border-[var(--logo-blue)]/20 bg-[var(--logo-orange)]/5 p-8 text-center">
          <p className="text-[var(--foreground)]/80 mb-4">
            អរគុណចំពោះការជ្រើសរើសទិញឥវ៉ាន់នៅហាងយើង។ ការទូរទាត់នឹងត្រូវបានដំណើរការនៅពេលខាងមុខ។
          </p>
          <Link
            href="/cart"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--logo-orange)] text-white font-semibold hover:bg-[var(--logo-orange-dark)] transition-colors"
          >
            ត្រឡប់ទៅរទេះ
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
