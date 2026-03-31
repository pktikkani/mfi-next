"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationModal from "@/components/RegistrationModal";

const faqs = [
  {
    q: "What is Meditate for India?",
    a: "It's a free, global 24-hour immersion event featuring Meditation, Pranayama, Asana, and Chanting. It aims to bring India's ancient wisdom into modern life and foster collective well-being.",
  },
  {
    q: "When is the event?",
    a: "The main event is scheduled for June 21st, 2025. Specific timings for sessions will be announced closer to the date.",
  },
  {
    q: "How can I participate?",
    a: "join-online",
  },
  {
    q: "Who is organizing this?",
    a: "organizer",
  },
  {
    q: "Is this the first Meditate for India event?",
    a: "No, the first Meditate for India was held during the COVID-19 pandemic, offering thousands a space for healing, resilience, and connection. This event continues the movement as a proactive step toward cultivating lasting well-being, rather than just in response to a crisis.",
  },
  {
    q: "What is the purpose or goal?",
    a: "It's a collective movement focused on three core pillars: Reimagining a Mindful India, Celebrating Our Heritage, and Cultivating Inner Wisdom through shared practice.",
  },
];

export default function FaqPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Navbar onLoginClick={() => setModalOpen(true)} />
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-3xl md:text-4xl text-dark-teal mb-10 text-center animate-fade-in-up">
            Frequently Asked Questions
          </h1>

          <div className="section-divider mb-10" />

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                index={i}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const renderAnswer = () => {
    if (answer === "join-online") {
      return (
        <p>
          You can join <strong>online</strong> from anywhere through
          live-streamed sessions. Please visit the &apos;Join Event&apos; page to
          register.
        </p>
      );
    }
    if (answer === "organizer") {
      return (
        <p>
          Meditate for India is organized by{" "}
          <Link
            href="/about-us"
            className="text-primary hover:text-primary-hover underline underline-offset-2 transition-colors"
          >
            The Mindful Initiative
          </Link>
          , an organization dedicated to integrating mindfulness, yoga, and
          contemplative practices into daily life since 2017.
        </p>
      );
    }
    return <p>{answer}</p>;
  };

  return (
    <div
      className={`glass-card rounded-xl overflow-hidden transition-all duration-300 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-dark-teal pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-txt-light flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 text-sm md:text-base text-txt-muted leading-relaxed">
          {renderAnswer()}
        </div>
      </div>
    </div>
  );
}
