import { Route, Routes } from 'react-router-dom'
import { Global } from './styles/globals'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Who from './pages/Who/Who'
import What from './pages/What/What'
import Work from './pages/Work/Work'

function App() {
  
  return (
    <>
    <Global />
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
            path="/what"
            element={<What />}
          />
          <Route
            path="/work"
            element={<Work />}
          />
        </Routes>
        <Footer/>
      
    </>
  )
}

export default App
