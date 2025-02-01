import Layout from './components/Layout'
import Home from './components/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> } >
          <Route path="/" index element={<Home/>} />
          <Route path='/about' element={<AboutMe/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
