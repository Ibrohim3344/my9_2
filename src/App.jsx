import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Layout from './LAYOUT/Layout'
import Error from './Error'

function App() {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Layout>

  )
}

export default App
