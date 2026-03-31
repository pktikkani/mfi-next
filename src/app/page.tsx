"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

const pillars = [
  {
    img: "/img/imagine-desktop.png",
    title: ["Reimagining a", "Mindful India"],
    sanskrit: ["पुनर्नि र्निर्मा मः", "मनस्वीं भारतम्"],
  },
  {
    img: "/img/celebrate.svg",
    title: ["Celebrating", "Our Heritage"],
    sanskrit: ["उत्सवामः", "स्वधर्म मंम"],
  },
  {
    img: "/img/cultivate-desktop.png",
    title: ["Cultivating", "Inner Wisdom"],
    sanskrit: ["अन्तः", "प्रज्ञा संवर्धनम्"],
  },
];

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setModalOpen(true)} />
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <main className="flex-1">
        {/* ═══ Hero ═══ */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
          {/* Ambient glow behind hero */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto">
            <h1 className="font-heading text-4xl md:text-7xl text-dark-teal animate-fade-in-up leading-tight">
              Meditate for India
            </h1>

            <div className="relative mt-8 mb-8 animate-fade-in-up delay-200">
              <Image
                src="/img/meditation-desktop.png"
                alt="Meditation"
                width={800}
                height={500}
                className="hidden md:block rounded-3xl"
                priority
              />
              <Image
                src="/img/meditation-desktop.png"
                alt="Meditation"
                width={400}
                height={300}
                className="md:hidden rounded-2xl"
                priority
              />

              {/* Overlaid text + button inside the bottom cloud area */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center px-4" style={{ height: '28%' }}>
                <div className="space-y-2 text-center">
                  <p className="text-base md:text-2xl font-heading text-dark-teal drop-shadow-sm">
                    A Free Global 24-Hour Immersion in
                  </p>
                  <p className="text-base md:text-2xl font-heading text-dark-teal drop-shadow-sm">
                    Meditation, Pranayama, Asana and Chanting
                  </p>
                  <p className="text-sm md:text-xl font-bold text-txt-muted pt-1 md:pt-2 drop-shadow-sm">
                    21st June 2025 From: time
                  </p>
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className="hidden md:block mt-5 px-8 py-3.5 bg-primary text-bg-elevated font-semibold rounded-xl hover:bg-primary-hover transition-all duration-300 hover:shadow-[0_0_32px_var(--c-primary-glow)] active:scale-95 text-sm"
                >
                  Join Meditate for India
                </button>
              </div>
            </div>

            {/* Mobile-only button below the image */}
            <button
              onClick={() => setModalOpen(true)}
              className="md:hidden mt-4 px-8 py-3.5 bg-primary text-bg-elevated font-semibold rounded-xl hover:bg-primary-hover transition-all duration-300 hover:shadow-[0_0_32px_var(--c-primary-glow)] active:scale-95 text-sm animate-fade-in-up delay-400"
            >
              Join Meditate for India
            </button>
          </div>
        </section>

        {/* ═══ Three Pillars ═══ */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto flex items-start justify-center gap-8 md:gap-24">
            {pillars.map((p, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center animate-fade-in-up delay-${(i + 1) * 100}`}
              >
                <div className="w-12 h-12 md:w-24 md:h-24 mb-4 relative animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                  <Image
                    src={p.img}
                    alt={p.title.join(" ")}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs md:text-xl text-dark-teal font-medium">
                  {p.title.map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                <p className="text-xs md:text-base text-txt-muted mt-2">
                  {p.sanskrit.map((line, j) => (
                    <span key={j} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ Movement Section ═══ */}
        <section className="py-20 px-4 relative">
          {/* Background accent */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-glow/30 to-transparent pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center">
            <Image
              src="/img/meditate-desktop.svg"
              alt="Meditate 2.0"
              width={1034}
              height={200}
              className="hidden md:block mx-auto mb-12"
            />
            <Image
              src="/img/meditate.svg"
              alt="Meditate 2.0"
              width={280}
              height={100}
              className="md:hidden mx-auto mb-10"
            />

            <h2 className="font-heading text-2xl md:text-4xl text-dark-teal mb-10">
              A Movement Rooted in Tradition
            </h2>

            <div className="section-divider mb-10" />

            <div className="space-y-6 text-base md:text-xl text-txt-muted font-light leading-relaxed">
              <p>
                <strong className="font-bold text-txt">
                  Meditate for India
                </strong>{" "}
                is more than just an event; it is a collective movement to bring
                India&apos;s ancient wisdom into modern life. The first Meditate for
                India was held during the{" "}
                <strong className="font-bold text-txt">
                  COVID-19 pandemic, offering thousands a space for healing,
                  resilience, and connection
                </strong>
              </p>
              <p>
                Now, we come together again not in response to crisis, but as a{" "}
                <strong className="font-bold text-txt">
                  step toward cultivating lasting well-being.
                </strong>{" "}
                Meditation is not just an individual practice; it is a shared
                journey that uplifts communities and strengthens societies.
              </p>
              <p>
                This year, Meditate for India will be held{" "}
                <strong className="font-bold text-txt">online </strong>
                across cities worldwide. Whether you join from{" "}
                <strong className="font-bold text-txt">
                  home, a yoga Shala,
                </strong>{" "}
                or a meditation center, you will be part of a global wave of
                stillness, breath, and sound.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ Reasons Infographic ═══ */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <Image
              src="/img/reasons.svg"
              alt="Meditate for India Infographic"
              width={1920}
              height={800}
              className="hidden md:block w-full"
            />
            <Image
              src="/img/reason-mobile.svg"
              alt="Meditate for India Infographic"
              width={404}
              height={800}
              className="md:hidden w-full"
            />
          </div>
        </section>

        {/* ═══ Speakers ═══ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-heading text-2xl md:text-5xl text-dark-teal mb-6">
              Wisdom Form Our Speakers
            </h2>
            <p className="text-base md:text-xl text-txt-muted font-light leading-relaxed">
              Discover the inspiring teachers and experts who will guide you
              through mindfulness, inner peace, and self-discovery
            </p>
          </div>

          {/* Desktop: 4 + 3 */}
          <div className="hidden md:block max-w-5xl mx-auto">
            <div className="grid grid-cols-4 gap-10 mb-10">
              {Array.from({ length: 4 }).map((_, i) => (
                <SpeakerCard key={`d1-${i}`} />
              ))}
            </div>
            <div className="grid grid-cols-3 gap-10 mx-auto max-w-[75%]">
              {Array.from({ length: 3 }).map((_, i) => (
                <SpeakerCard key={`d2-${i}`} />
              ))}
            </div>
          </div>

          {/* Mobile: 3 + 2 */}
          <div className="md:hidden">
            <div className="flex justify-center gap-4 mb-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <SpeakerCard key={`m1-${i}`} mobile />
              ))}
            </div>
            <div className="flex justify-center gap-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <SpeakerCard key={`m2-${i}`} mobile />
              ))}
            </div>
          </div>
        </section>

        {/* ═══ Join Us CTA ═══ */}
        <section className="hidden md:flex py-20 flex-col items-center relative overflow-hidden">
          <div className="relative w-full max-w-6xl mx-auto">
            <Image
              src="/img/join-us-desktop.png"
              alt="Join Us"
              width={1200}
              height={500}
              className="w-full rounded-3xl"
            />
            {/* Text in the bottom cloud area */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center px-4" style={{ height: '35%' }}>
              <h2 className="font-heading text-5xl text-medium-teal mb-4">
                &ldquo;Join Us&rdquo;
              </h2>
              <p className="text-xl text-txt-muted font-light mb-8">
                <strong className="font-bold">Online:</strong> Join
                live-streamed sessions from anywhere.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-3.5 bg-primary text-bg-elevated font-semibold rounded-xl hover:bg-primary-hover transition-all duration-300 hover:shadow-[0_0_32px_var(--c-primary-glow)] active:scale-95 text-sm"
              >
                Join Meditate for India
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function SpeakerCard({ mobile }: { mobile?: boolean }) {
  const size = mobile ? "w-24 h-24" : "w-40 h-40";
  const textSize = mobile ? "text-xs" : "text-lg";
  return (
    <div className="flex flex-col items-center group">
      <div
        className={`${size} rounded-full overflow-hidden mb-3 ring-2 ring-transparent group-hover:ring-primary/40 transition-all duration-500 relative`}
      >
        <Image
          src="/img/speaker.png"
          alt="Sri Kunal Kendurkar"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <p className={`${textSize} text-center font-medium text-medium-teal`}>
        Sri Kunal Kendurkar
      </p>
      <p className={`${textSize} text-center text-txt-muted`}>Yoga Coach</p>
    </div>
  );
}
