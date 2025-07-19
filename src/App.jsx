
import { useEffect } from 'react';
import './App.css'
import LoginPage from './features/auth/LoginPage'
import Approutes from './routes/Approutes'
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
 useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <>
    <Approutes/>
    </>
  )
}

export default App
