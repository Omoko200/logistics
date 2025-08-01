import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx';
import LandingPage from './pages/landingpage.jsx'
import About from './pages/about.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import CreateShipment from './pages/createshipment.jsx'
import TrackShipment from './pages/trackshipment.jsx'
import Dashboardhome from './pages/dashboardhome.jsx'
import Dispatch from './pages/dashboard/dispatch.jsx'
import Forgotpassword from './pages/forgotpassword.jsx'
import Getstarted from './pages/getstarted.jsx'
import ManageProfile from './pages/manageprofile.jsx'
import CustomerService from './pages/customerservice.jsx'
import ContactForm from './components/contactform.jsx'
import Faq from './components/faq.jsx'
import Navbar from './components/navbar.jsx'
import HeroSection from './components/herosection.jsx'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/landingpage" element={<LandingPage/>} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createshipment" element={<CreateShipment />} />
        <Route path="/trackshipment" element={<TrackShipment />} />
        <Route path="/dashboardhome" element={<Dashboardhome/>} />
        <Route path="dispatch" element={<Dispatch/>} />
        <Route path="forgotpassword" element={<Forgotpassword />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/manageprofile" element={<ManageProfile />} />
        <Route path="/customerservice" element={<CustomerService />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/navbar" element={<Navbar />} /> 
        <Route path="/herosection" element={<HeroSection />} /> 
      </Routes>
    </BrowserRouter >
  </StrictMode>,
)
