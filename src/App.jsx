import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Electronics from './pages/Electronics'
import Software from './pages/Software'
import Music from './pages/Music'
import Contact from './pages/Contact'
import StubTuningCalc from './pages/StubTuningCalc'
import EhxPitchforkMod from './pages/EhxPitchforkMod'

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/software" element={<Software />} />
                <Route path="/music" element={<Music />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/stub-tuning-calculator" element={<StubTuningCalc />} />
                <Route path="/ehx-pitchfork-mod" element={<EhxPitchforkMod />} />
            </Route>
        </Routes>
    )
}
