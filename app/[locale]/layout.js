import "./globals.css";
import { Providers } from "@/app/[locale]/providers";

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Sidebar from "@/components/sidebar/Sidebar";
import SideContainer from "@/components/sidebar/SideContainer";


export const metadata = {
  title: "My task",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params }) {

  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html dir={`${locale == "en" || locale == "de" ? "ltr" : "rtl"}`} lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Providers>
            <main className="flex flex-col h-screen w-full xl:flex-row p-2 py-4 gap-4">
              <SideContainer />

              <section className="w-full xl:w-10/12 h-full  lg:overflow-y-auto">
                {children}
              </section>
            </main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
