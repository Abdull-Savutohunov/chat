import './App.css'
import { MainPages } from './pages/General';
import {Routes, Route} from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import { baseURL, firebaseConfig } from './configs';
import axios from 'axios';
import { ChatLayout } from './pages/Chat/ChatLayout/index';
import { NotFound } from './componente/NotFound/index';
import { BrowserRouter} from 'react-router-dom'
initializeApp(firebaseConfig)

axios.defaults.baseURL = baseURL


function App() {
 
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<MainPages.Pages.Main/>} />
      <Route path="/chat/*" element={<ChatLayout/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
     
  </BrowserRouter>
  
}

export default App
