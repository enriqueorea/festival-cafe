import Header from "@/components/UI/Header";
import "./globals.css";
import Image from "next/image";
import { Footer } from "@/components";

export const metadata = {
  title: "Festival del CaféPrimer Festival Café Veracruz 2023",
  description:
    " El Festival del Café es un evento que se realiza en el municipio Xalapa, Veracruz, México, con el objetivo de promover la cultura del café, así como la cultura de la región.",
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
        {children} <Footer />
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
      </body>
    </html>
  );
}
