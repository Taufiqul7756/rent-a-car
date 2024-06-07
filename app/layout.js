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
    <html lang="en" className="">
      <body className={inter.className}>
        <CarProvider>
          <InvoiceProvider>
            <div className="flex flex-col min-h-screen">
              <main className="flex-grow mt-20">{children}</main>
            </div>
          </InvoiceProvider>
        </CarProvider>
      </body>
    </html>
  );
}
