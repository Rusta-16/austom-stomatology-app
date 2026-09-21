import { Montserrat } from "next/font/google";
import './styles/globals.scss';
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import YandexMetrika from "./components/YandexMetrika";

const montserrat = Montserrat({ subsets: ['latin'] });

const site = {
  name: 'Аюстом',
  url: 'https://austom.ru',
  description: 'Стоматология Аюстом в Ростове-на-Дону. Комплексное лечение зубов, протезирование и профессиональная гигиена. Опытные врачи, современное оборудование и индивидуальный подход в клинике на проспекте 40-летия Победы, 3.',
}

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    template: `%s | ${site.name}`,
    default: `${site.name} — стоматология в Ростове-на-Дону`,
  },
  description: site.description,
  keywords: [
    'стоматология Ростов-на-Дону',
    'стоматология Аюстом',
    'лечение зубов Ростов',
    'протезирование зубов Ростов',
    'профессиональная гигиена полости рта',
    'стоматологическая клиника Александровка Ростов',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — стоматология в Ростове-на-Дону`,
    description: site.description,
    images: [
      {
        url: '/logo_full_pink.png',
        width: 1329,
        height: 481,
        alt: 'Стоматология Аюстом — логотип',
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    'yandex-verification': 'b07a9ec90f9f173f',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={montserrat.className}>
        <YandexMetrika />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}