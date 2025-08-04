import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../../context/provider";
import { Toaster } from "@/components/ui/Sonner";
import { NavProvider } from "@/context/NavProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const notoSanThai = Noto_Sans_Thai({ subsets: ["latin", "thai"] });

export const metadata: Metadata = {
  title: "Abdulkode portfolio",
  description: "A Full-Stack Developer based in Thailand",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={notoSanThai.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            // enableSystem
            disableTransitionOnChange
          >
            <NavProvider>{children}</NavProvider>
            <Toaster richColors />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
