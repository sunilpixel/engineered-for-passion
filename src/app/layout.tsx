import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engineered for Passion | TeQ Mavens",
  description:
    "A responsive and interactive frontend experience built with Next.js, Tailwind CSS, and Framer Motion.",
  keywords: [
    "Next.js",
    "React",
    "Frontend Developer",
    "Tailwind CSS",
    "Framer Motion",
    "Responsive Web Design",
  ],
  authors: [{ name: "Sunil Kumar" }],
  creator: "Sunil Kumar",
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Engineered for Passion",
    description:
      "A responsive and interactive frontend experience built with Next.js, Tailwind CSS, and Framer Motion.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.classList.toggle(
                "dark",
                localStorage.getItem("theme") === "dark"
              );
            `,
          }}
        />
      </head>
      <body className="dark:bg-black bg-seashell  font-sf-pro main-bg relative">
        {children}
      </body>
    </html>
  );
}
