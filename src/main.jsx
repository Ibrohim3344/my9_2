
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import i18n from './utils/Il18n/il18n.js' 
import { I18nextProvider } from "react-i18next";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
)


