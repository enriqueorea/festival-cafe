import Header from "@/components/UI/Header";
import "./globals.css";
import Image from "next/image";
import { Footer } from "@/components";
import { Metadata } from "next";
import SoundButton from "@/components/SoundButton";

export const metadata: Metadata = {
  title: "Segundo Festival Café Veracruz 2024",
  description:
    " El Festival del Café es un evento que se realiza en el municipio Xalapa, Veracruz, México, con el objetivo de promover la cultura del café, así como la cultura de la región.",
  openGraph: {
    title:
      "Festival Café Veracruz 2024: Descubre los Sabores y Aromas del Café",
    description:
      "Sumérgete en el fascinante mundo del café en el Festival Café Veracruz. Del 05 al 07 de julio, celebra la riqueza y diversidad del café veracruzano con degustaciones, talleres y eventos culturales en el corazón de Xalapa.",
    type: "website",
    url: "https://festival-cafe.vercel.app/",
    images: ["/nombre cafe.png"],
  },
  twitter: {
    title:
      "Festival Café Veracruz 2024: Descubre los Sabores y Aromas del Café",
    description:
      "Sumérgete en el fascinante mundo del café en el Festival Café Veracruz. Del 05 al 07 de julio, celebra la riqueza y diversidad del café veracruzano con degustaciones, talleres y eventos culturales en el corazón de Xalapa.",
    images: ["/nombre cafe.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-purple relative">
        <Header />
        <main>{children}</main>
        <Footer />
        <div className="hidden lg:block bg-fixed fixed w-[210px] h-[850px] left-0 bottom-0 scale-125">
          <Image
            alt="Festival background"
            className="object-contain w-full h-full aspect-video"
            fill
            src="/Asset 1.png"
          />
        </div>
        <div className="hidden lg:block bg-fixed fixed w-[210px] h-[950px] right-0 bottom-0">
          <Image
            alt="Festival background"
            className="object-contain w-full h-full aspect-video scale-125"
            fill
            src="/Asset 2.png"
          />
        </div>
        {/* <SoundButton /> */}
      </body>
    </html>
  );
}
