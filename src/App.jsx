import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './LAYOUT/Layout'
import Error from './Error'
import NewsDetail from './components/NewsDetail'
import Home from './pages/home/Home'
import AllNews from './components/AllNews'
import AdminPanel from './components/AdminPanel'

function App() {


  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path='/news' element={<AllNews />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Layout>

  )
}

export default App
