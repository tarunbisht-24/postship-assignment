import Functionality from './components/functionality'
import Navbar from './components/navbar'
import Performance from './components/performance'
import Welcome from './components/welcome'
import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json'
export default function App() {
  return (
    <main className=''>
      <AppProvider i18n={enTranslations}>
        <Navbar />
        <Welcome />
        <Performance />
        <Functionality />
      </AppProvider>
    </main>
  )
}
