import Nav from "./components/Nav";
import Beneficios from "./sections/Beneficios";
import Carbono from "./sections/Carbono";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Image from "./sections/Image";

export default function App() {
  return (
    <main>
      <Nav />
      <Home />
      <Beneficios />
      <Image />
      <Carbono />
      <Footer />
    </main>
  )
}
