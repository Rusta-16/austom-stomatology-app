import { Montserrat } from "next/font/google";
import './styles/globals.scss';
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";


const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
