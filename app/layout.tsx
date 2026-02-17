import type { Metadata } from "next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  title: "Axiom — Design Studio",
  description: "A curated design studio crafting digital experiences with precision and purpose.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
