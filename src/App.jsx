
import { Outlet } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import SectionNavbar from './components/SectionNavbar'

function App() {
  return (
    <div>
      <SectionNavbar />
      <main className='pt-20'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
