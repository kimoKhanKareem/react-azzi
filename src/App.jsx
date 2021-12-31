import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './Page/Home';
import NavbarH from './Components/Navbar/NavbarH';
import Footer from './Components/Footer/Footer';


function App( ) {
  return (
    <div className="App">
      <Router>
        <NavbarH />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;