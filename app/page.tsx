import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--logo-orange)]/10 via-[var(--background)] to-[var(--logo-blue)]/10 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-12">
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--logo-orange)] mb-4">
              ស្វាគមន៍មកកាន់ ហេង ហេង ហាងអនឡាញ
            </h1>
            <p className="text-lg text-[var(--logo-blue)] mb-6 max-w-xl">
              ទិញឥវ៉ាន់អនឡាញដោយងាយស្រួល រហ័ស និងអាចទុកចិត្តបាន
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[var(--logo-orange)] text-white font-semibold hover:bg-[var(--logo-orange-dark)] transition-colors shadow-md"
              >
                រកមើលផលិតផល
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[var(--logo-blue)] text-[var(--logo-blue)] font-semibold hover:bg-[var(--logo-blue)]/10 transition-colors"
              >
                ទំនាក់ទំនង
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/logo/logo.png"
              alt="ហេង ហេង ហាងអនឡាញ"
              width={280}
              height={280}
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features / Why us */}
      <section className="py-16 border-t border-[var(--logo-blue)]/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--logo-orange)] text-center mb-10">
            ហេតុអ្វីជ្រើសរើសយើង?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-[var(--logo-orange)]/5 border border-[var(--logo-orange)]/20">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--logo-orange)]/20 flex items-center justify-center text-[var(--logo-orange)] text-xl font-bold">
                🛒
              </div>
              <h3 className="font-bold text-[var(--logo-blue)] mb-2">ទិញអនឡាញងាយ</h3>
              <p className="text-[var(--foreground)]/80 text-sm">
                បញ្ជាទិញពីផ្ទះ រត់ការរហ័ស ចម្ងាយជិត
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[var(--logo-blue)]/5 border border-[var(--logo-blue)]/20">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--logo-blue)]/20 flex items-center justify-center text-[var(--logo-blue)] text-xl font-bold">
                ✓
              </div>
              <h3 className="font-bold text-[var(--logo-blue)] mb-2">ផលិតផលពិត</h3>
              <p className="text-[var(--foreground)]/80 text-sm">
                ធានាគុណភាព និងផលិតផលពិត ១០០%
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-[var(--logo-orange)]/5 border border-[var(--logo-orange)]/20">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--logo-orange)]/20 flex items-center justify-center text-[var(--logo-orange)] text-xl font-bold">
                📞
              </div>
              <h3 className="font-bold text-[var(--logo-blue)] mb-2">គាំទ្រ ២៤/៧</h3>
              <p className="text-[var(--foreground)]/80 text-sm">
                ក្រុមយើងត្រៀមជួយអ្នកគ្រប់ពេល
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
