import { Routes } from "react-router"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import HomePage from "./pages/home"
import { Route } from "react-router"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/services" element={<ServicesPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
  )
}
