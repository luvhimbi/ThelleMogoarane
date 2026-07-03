import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage'
import DonatePage from './pages/DonatePage'
import MemorialPage from './pages/MemorialPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'
import PopiAct from './pages/PopiAct'
import DmcaPolicy from './pages/DmcaPolicy'
import PaiaManual from './pages/PaiaManual'
import NotFound from './pages/NotFound'
import SplashScreen from './components/SplashScreen/SplashScreen'

export default function App() {
  return (
    <>
      <SplashScreen />
      <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/memorial" element={<MemorialPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/popi-act" element={<PopiAct />} />
          <Route path="/dmca" element={<DmcaPolicy />} />
          <Route path="/paia-manual" element={<PaiaManual />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
