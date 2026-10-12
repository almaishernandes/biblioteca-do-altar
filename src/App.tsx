import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { GuiaZelusDomus } from './pages/GuiaZelusDomus'
import { EventosIgrejaCatolica } from './pages/EventosIgrejaCatolica'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/livros/guia-zelusdomus" element={<GuiaZelusDomus />} />
            <Route path="/igreja-catolica" element={<EventosIgrejaCatolica />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
