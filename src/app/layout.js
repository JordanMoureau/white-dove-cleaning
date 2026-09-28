import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "./styles/hero.css";
import "./styles/navbarmain.css";
import "./styles/footer.css";
import "./styles/sidebar.css";
import "./styles/services.css";
import "./styles/contactform.css";
import "./styles/floatingcred.css";
import "./styles/homepage.css";
import "./styles/navbarmobile.css";

import Topper from "./components/topper";
import NavBar from "./components/navBarMain";
import Footer from "./components/footer";
import NavBarMobile from "./components/navBarMobile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "White Dove Cleaning Northwest",
  description:
    "Professional residential cleaning service in Spokane and Coeur d'Alene",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5H1FDLJ2KV"
          strategy="afterInteractive"
        />

        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            // Google Analytics 4
            gtag('config', 'G-5H1FDLJ2KV');

            // Google Ads
            gtag('config', 'AW-17871077811');
          `}
        </Script>

        <Topper />
        <NavBar />
        <NavBarMobile />

        {children}

        <Footer />
      </body>
    </html>
  );
}
