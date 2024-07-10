import './App.css';
import pccm from './assets/pccm.jpg';
import pccmLogo from './assets/pccm_logo.png';
import loading from './assets/loading.svg';
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NewsAnnouncements from './pages/NewsAnnouncements';
import Events from './pages/Events';
import Rental from './pages/Rental';
import Gallery from './pages/Gallery';
import Advertise from './pages/Advertise';
import Memberships from './pages/Memberships';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs/>} />
          <Route path="news" element={<NewsAnnouncements/>} />
          <Route path="events" element={<Events/>} />
          <Route path="rental" element={<Rental/>} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="advertise" element={<Advertise/>} />
          <Route path="memberships" element={<Memberships/>} />
          <Route path="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

