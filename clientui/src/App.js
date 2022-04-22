
import './App.css';
import Home from "./portfolioContainer/Home/Home"
import Features from './portfolioContainer/features/Features'
import Portfolio from './portfolioContainer/portfolio/Portfolio'
// import Resume from "./portfolioContainer/Resume/Resume"
import Blog from "./portfolioContainer/Blog/Blog"
import Contact from "./portfolioContainer/ContactMe/Contact"
import About from './portfolioContainer/AboutMe/About';
import Footer from './portfolioContainer/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Home />
      {/* <Portfolio/> */}
      {/* <Resume/> */}
      {/* <Blog/> */}
      <Footer/>
     
    </div>
  );
}

export default App;
