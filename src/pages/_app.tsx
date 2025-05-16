import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
