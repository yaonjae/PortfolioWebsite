import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/app/assets/components/Sidebar";
import ActivePageContextProvider from "./context/active-page-context";
import { Toaster } from "react-hot-toast";
import Footer from "./assets/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Me",
  description: "Job Application Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth font-sans bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black bg-fixed"
    >
      <body className={inter.className}>
        <ActivePageContextProvider>
          <Sidebar />
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                color: "white",
                background: "#2E2E2E",
              },
            }}
          />
        </ActivePageContextProvider>
      </body>
    </html>
  );
}
