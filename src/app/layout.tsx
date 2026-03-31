import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meditate for India — The Mindful Initiative",
  description:
    "Fun and enriching yoga summer camp for kids in Bangalore. Combining mindfulness, movement, and play to nurture children's physical and emotional wellbeing. Ages 5-12.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-txt font-body">
        {children}
      </body>
    </html>
  );
}
