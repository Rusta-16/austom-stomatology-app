import { Montserrat } from "next/font/google";
import './styles/globals.scss';
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";


const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: {
    template: '%s | Аюстом',
    default: 'Аюстом', 
  },
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://austom.ru",
    siteName: "Аюстом",
    title: "Аюстом — стоматология в Ростове-на-Дону",
    description:
      "Стоматология Аюстом в Ростове-на-Дону. Комплексное лечение зубов, протезирование  и профессиональная гигиена.",
  },
  other: {
    'yandex-verification': 'b07a9ec90f9f173f',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>

  );
}
