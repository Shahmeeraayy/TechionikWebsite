import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Techionik",
  description:
    "Thanks for reaching out to Techionik. Our team will review your request and get back to you shortly.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,83,35,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            Request received
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-[4rem]">
            Thanks for reaching out to Techionik
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            We have received your message and our team will review it shortly.
            If it’s urgent, you can also contact us directly through the main
            contact page.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-[#F05323] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Back to Home
            </Link>
            <Link
              href="/contact-us"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
