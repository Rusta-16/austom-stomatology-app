import { Montserrat } from "next/font/google";
import './styles/globals.scss';
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";


const montserrat = Montserrat({ subsets: ['latin'] });

export default async function RootLayout({ children }) {
  const session = await auth()
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={montserrat.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </SessionProvider>

  );
}
