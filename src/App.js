import Nav2 from "./components/Nav2";
import Footer from "./sections/Footer";
import General from "./sections/General";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dapp from './sections/Dapp';

export default function App() {
  return (
    <Router>
      <Nav2 />
      <Routes>
        <Route path='/' exact element={<General />} />
        <Route path='/dapp' element={<Dapp />} />
      </Routes>
      <Footer />
    </Router>
  )
}
