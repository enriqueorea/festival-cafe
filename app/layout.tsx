import "./globals.css";

export const metadata = {
  title: "Festival del Café",
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
      <body className="bg-dark-purple relative">{children}</body>
    </html>
  );
}
