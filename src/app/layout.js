import {  Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/components/Navber"
import Header from "@/components/Header"
// import Footer from "@/components/Footer"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Afsana Laz",
  description: "Developer for Future",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
       <Navber></Navber>
       <Header></Header>
        <About />
        <Skills />
        <Projects />
          {children}
      <Contact /> 
        </body>
    </html>
  );
}
