"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

export default function AboutPage() {
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
          <div className="mb-12">
            <Image
              src="/img/TMIlogo.png"
              alt="The Mindful Initiative"
              width={200}
              height={60}
              className="mx-auto"
            />
          </div>

          <div className="section-divider mb-10" />

          <p className="text-lg md:text-2xl font-light text-txt-muted leading-relaxed mb-6">
            Meditate for India is organized by The Mindful Initiative, an
            organization dedicated to integrating mindfulness, yoga, and
            contemplative practices into daily life.
          </p>

          <p className="text-lg md:text-2xl font-light text-txt-muted leading-relaxed mb-10">
            Since 2017, we have created podcasts, workshops, and programs to make
            these ancient practices accessible and impactful.
          </p>

          <p className="text-base md:text-lg text-txt-muted leading-relaxed">
            <strong className="text-txt">
              To learn more, visit:{" "}
              <a
                href="https://www.themindfulinitiative.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-hover underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
              >
                https://www.themindfulinitiative.com
              </a>
            </strong>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
