import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/Sonner";
import { NavProvider } from "@/context/NavProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdulkode portfolio",
  description: "A Full-Stack Developer based in Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <NavProvider>{children}</NavProvider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
