import StartPage from './components/StartPage'
import AdvantagesPage from './components/AdvantagesPage'
import ServicesPage from './components/ServicesPage'
import ExampleOurWorks from './components/ExampleWorksPage'
import ClinicIntoPage from './components/ClinicIntoPage'
import TeamPage from './components/TeamPage'
import DoctorsPage from './components/DoctorsPage'
import FootnotePage from './components/FootnotePage'
import SpecialPage from './components/SpecialPage'
import ReviewsPage from './components/ReviewsPage'
import ShowForm from './components/ui/ShowForm'

export const metadata = {
  title: 'Стоматология Аюстом в Ростове-на-Дону',
  description:
    'Стоматология Аюстом в Ростове-на-Дону. Комплексное лечение зубов, протезирование и профессиональная гигиена полости рта. Опытные врачи, современное оборудование и забота о здоровье вашей улыбки.',
}

const dentistJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'Стоматология Аюстом',
  url: 'https://austom.ru',
  logo: 'https://austom.ru/logo_full_pink.png',
  image: 'https://austom.ru/logo_full_pink.png',
  description:
    'Стоматология Аюстом в Ростове-на-Дону. Комплексное лечение зубов, протезирование и профессиональная гигиена полости рта.',
  telephone: '+79604433999',
  email: 'austom@mail.ru',
  priceRange: '₽₽',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'проспект 40-летия Победы, 3',
    addressLocality: 'Ростов-на-Дону',
    addressRegion: 'Ростовская область',
    addressCountry: 'RU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.236114,
    longitude: 39.800189,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Ростов-на-Дону',
  },
}

export default function page() {

  return (
    <ShowForm>
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistJsonLd) }}
        />
        <StartPage />
        <AdvantagesPage />
        <ServicesPage />
        <ExampleOurWorks />
        <ClinicIntoPage />
        <TeamPage />
        <DoctorsPage />
        <FootnotePage />
        <SpecialPage />
        <ReviewsPage />
      </main>
    </ShowForm>

  )
}