import React from "react";
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Philosophy from "./pages/Philosophy";
import Services from "./pages/Services";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";
import Referrals from "./pages/Referrals";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";


function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/philosophy" component={Philosophy} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/faqs" component={FAQs} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/referrals" component={Referrals} />
        <Route exact path="/contact" component={Contact} />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
