import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddhant Badola - AI/ML Tech Lead & Product Manager",
  description: "AI/ML Tech Lead and Technical Product Manager with 5+ years of experience in agentic AI, mobile development, and product strategy. Building intelligent systems that scale.",
  keywords: ["AI", "ML", "Tech Lead", "Product Manager", "Flutter", "React", "Agentic AI", "LLM", "RAG", "Computer Vision"],
  authors: [{ name: "Siddhant Badola" }],
  creator: "Siddhant Badola",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sidhunt.github.io",
    title: "Siddhant Badola - AI/ML Tech Lead & Product Manager",
    description: "AI/ML Tech Lead and Technical Product Manager crafting intelligent systems that scale.",
    siteName: "Siddhant Badola Portfolio",
    images: [
      {
        url: "https://media.giphy.com/media/debCoZ6a5aFuSHY1S5/giphy.gif",
        width: 1200,
        height: 630,
        alt: "Siddhant Badola - AI/ML Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Badola - AI/ML Tech Lead & Product Manager",
    description: "AI/ML Tech Lead and Technical Product Manager crafting intelligent systems that scale.",
    creator: "@sidhunt_b",
    images: ["https://media.giphy.com/media/debCoZ6a5aFuSHY1S5/giphy.gif"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#3b82f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
