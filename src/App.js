import MainNav from "./components/MainNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Newsroom from "./pages/Newsroom";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Tutorial from "./pages/Tutorial";
import Partners from "./pages/Partners";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div className="App">
      <Router>
        <MainNav />
        <MainHeader />
        <Routes>
          <Route path="/" exact element={<Home />}>
            Home
          </Route>
          <Route path="/products" element={<Products />}>
            Products
          </Route>
          <Route path="/newsroom" element={<Newsroom />}>
            Newsroom
          </Route>
          <Route path="/contact" element={<Contact />}>
            Contact
          </Route>
          <Route path="/faq" element={<Faq />}>
            FAQ
          </Route>
          <Route path="/tutorial" element={<Tutorial />}>
            Tutorial
          </Route>
          <Route path="/partners" element={<Partners />}>
            Partners
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
