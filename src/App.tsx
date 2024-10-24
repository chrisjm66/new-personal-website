import Layout from './components/Layout'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> } >
          <Route index element={ <h1>bye</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
