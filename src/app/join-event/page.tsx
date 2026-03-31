"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

export default function JoinEventPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onLoginClick={() => setModalOpen(true)} />
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <main className="flex-1 flex flex-col items-center justify-center pt-24 pb-16 px-4">
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/6 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center animate-fade-in-up">
          <div className="mb-10">
            <Image
              src="/img/together.png"
              alt="Together"
              width={300}
              height={200}
              className="mx-auto"
            />
          </div>

          <h1 className="font-heading text-2xl md:text-4xl text-medium-teal mb-4 font-light">
            Let&apos;s Meditate for India.
          </h1>
          <h1 className="font-heading text-2xl md:text-4xl text-medium-teal mb-10 font-light">
            Let&apos;s Meditate for Ourselves.
          </h1>

          <div className="section-divider mb-10" />

          <p className="text-base md:text-xl font-light text-txt-muted leading-relaxed mb-6">
            The transformation of a nation begins from within. When we heal
            ourselves, we heal our surroundings. When we meditate together, we
            create an unstoppable wave of clarity, peace, and well-being.
          </p>

          <p className="text-base md:text-xl font-light text-txt-muted leading-relaxed mb-10">
            <strong className="font-bold text-txt">Online:</strong> Join
            live-streamed sessions from anywhere.
          </p>

          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-3.5 bg-primary text-bg-elevated font-semibold rounded-xl hover:bg-primary-hover transition-all duration-300 hover:shadow-[0_0_32px_var(--c-primary-glow)] active:scale-95 text-sm"
          >
            Join online
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
