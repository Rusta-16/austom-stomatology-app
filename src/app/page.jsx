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


export default function page() {

  return (
    <ShowForm>
      <main>
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
