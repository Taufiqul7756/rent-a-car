import { Inter } from "next/font/google";
import "./globals.css";
import { CarProvider } from "./context/CarContext.jsx";
import { InvoiceProvider } from "./context/InvoiceContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nyntax Car invoice ",
  description: "Rental car invoice generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CarProvider>
          <InvoiceProvider>
            <main className="">{children}</main>
          </InvoiceProvider>
        </CarProvider>
      </body>
    </html>
  );
}
