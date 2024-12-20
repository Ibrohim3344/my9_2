import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './LAYOUT/Layout';
import Error from './Error';
import NewsDetail from './components/NewsDetail';
import Home from './pages/home/Home';
import AllNews from './components/AllNews';
import AdminPanel from './components/AdminPanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/news" element={<AllNews />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
