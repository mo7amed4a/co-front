import { Geist, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import WhatsappIcon from "@/components/layout/WhatsappIcon";
import { api } from "@/lib/axios";
import { QueryLayout } from "@/lib/queryGraphql";
import { LayoutType } from "@/types/types";
import HeaderLayout from "@/components/layout/HeaderLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <head>
      <link rel="preload" data-rocket-preload="" as="style" href="https://fonts.googleapis.com/css?family=Work%20Sans%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CPoppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;display=swap" />
      </head>
      <body
        className={`${geistSans.variable} ${poppins.variable} ${poppins.className} antialiased`}
      >
        <HeaderLayout links={navbar.links}/>
        {children}
        <Footer data={footer} />
        <WhatsappIcon link={navbar.whatsapp} />
      </body>
    </html>
  );
}
