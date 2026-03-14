"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Simulate submit (no backend yet)
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 600);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 py-12">
        <h1 className="text-2xl sm:text-3xl font-bold text-[var(--logo-orange)] mb-2">
          ទំនាក់ទំនង
        </h1>
        <p className="text-[var(--logo-blue)] mb-8">
          ចង់ជួយអ្នកគ្រប់ពេល។ ផ្ញើសារមកយើង ឬទូរស័ព្ទ/អ៉ីមែលដោយផ្ទាល់។
        </p>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)] p-6">
              <h2 className="font-bold text-lg text-[var(--foreground)] mb-4">
                ព័ត៌មានទំនាក់ទំនង
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-[var(--logo-orange)]/10 flex items-center justify-center text-[var(--logo-orange)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">ទូរស័ព្ទ</p>
                    <a href="tel:+85512345678" className="text-[var(--logo-blue)] hover:underline">
                      +855 12 345 678
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-[var(--logo-orange)]/10 flex items-center justify-center text-[var(--logo-orange)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">អ៉ីមែល</p>
                    <a href="mailto:contact@hengheng-store.com" className="text-[var(--logo-blue)] hover:underline break-all">
                      contact@hengheng-store.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-lg bg-[var(--logo-orange)]/10 flex items-center justify-center text-[var(--logo-orange)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">អាសយដ្ឋាន</p>
                    <p className="text-[var(--foreground)]/80">
                      ភ្នំពេញ, កម្ពុជា
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)] p-6 sm:p-8">
              <h2 className="font-bold text-lg text-[var(--foreground)] mb-6">
                ផ្ញើសារមកយើង
              </h2>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-lg bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20">
                  អរគុណ! យើងបានទទួលសាររបស់អ្នក នឹងតបវិញឆាប់ៗនេះ។
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-4 rounded-lg bg-red-500/10 text-red-700 dark:text-red-400 border border-red-500/20">
                  មានបញ្ហា សូមព្យាយាមម្តងទៀត។
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      ឈ្មោះ *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--logo-orange)] focus:border-transparent"
                      placeholder="ឈ្មោះរបស់អ្នក"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      អ៉ីមែល *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--logo-orange)] focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      ទូរស័ព្ទ
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--logo-orange)] focus:border-transparent"
                      placeholder="012 345 678"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                      ប្រធានបទ *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--logo-orange)] focus:border-transparent"
                    >
                      <option value="">-- ជ្រើសរើស --</option>
                      <option value="order">សំណួរអំពីការបញ្ជាទិញ</option>
                      <option value="product">សំណួរអំពីផលិតផល</option>
                      <option value="support">ជំនួយ / បញ្ហាបច្ចេកទេស</option>
                      <option value="other">ផ្សេងៗ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-1.5">
                    សារ *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--logo-orange)] focus:border-transparent resize-y min-h-[120px]"
                    placeholder="សូមសរសេរសាររបស់អ្នក..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[var(--logo-orange)] text-white font-semibold hover:bg-[var(--logo-orange-dark)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "កំពុងផ្ញើ..." : "ផ្ញើសារ"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
