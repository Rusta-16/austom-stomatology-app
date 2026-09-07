import { Montserrat } from "next/font/google";
import './styles/globals.scss';
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";


const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Аюстом',
    default: 'Аюстом', // a default is required when creating 
  },
  icons: {
    icon: '/favicon.ico'
  },
  other: {
    'yandex-verification': 'b07a9ec90f9f173f',
  }
}

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
