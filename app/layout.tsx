import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import WhatsappIcon from "@/components/layout/WhatsappIcon";
import { api } from "@/lib/axios";
import { QueryLayout } from "@/lib/queryGraphql";
import { LayoutType } from "@/types/types";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const res = await api.post("", {
    query: QueryLayout
  })
  const {website}:LayoutType = res.data.data
  return {
    title: website?.title || "",
    description: website?.description || "",
    keywords: website?.keywords || ""
  };
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await api.post("", {
    query: QueryLayout
  })
  
  const {navbar, footer}:LayoutType = res.data.data

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 inset-x-0 z-50 !w-full backdrop-blur-sm bg-primary">
          <Header links={navbar.links}/>
          <Toaster position="top-center"/>
        </div>
        <div className="h-16" />
        {children}
        <Footer data={footer} />
        <WhatsappIcon link={navbar.whatsapp} />
      </body>
    </html>
  );
}
