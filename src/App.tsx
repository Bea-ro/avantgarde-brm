import { Route, Routes, useLocation } from 'react-router-dom'
import { Global } from './styles/globals'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Who from './pages/Who/Who'
import Work from './pages/Work/Work'
import Contacto from './pages/Contacto/Contacto'

function App() {

  const location = useLocation();
  const currentPath = location.pathname;
  const validCurrentPath = currentPath.slice(1, currentPath.length);
  
  return (
    <>
    <Global path={validCurrentPath} />
    <Header/>
    <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/who"
            element={<Who />            }
          />
          <Route
            path="/work"
            element={<Work />}
          />
           <Route
            path="/contacto"
            element={<Contacto />}
          />
        </Routes>
        <Footer/>
      
    </>
  )
}

export default App
