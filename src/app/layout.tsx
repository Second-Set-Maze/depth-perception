import type { Metadata } from "next";
import Providers from "@/components/providers";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Depth Perception",
  description: "Test your knowledge of chronological events",
  icons: { icon: "/leviathan-200x200-circle.png" },
};

// Root layout wraps every page with the global Navbar and a padded <main>.
// The Navbar is rendered above the page content and sticks to the top via
// its own `sticky top-0` styles. The <main> receives vertical padding to
// avoid content sitting flush against the nav or the viewport bottom.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans antialiased">
        <Providers>
          <Navbar />
          <main className="pt-8 pb-12">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
