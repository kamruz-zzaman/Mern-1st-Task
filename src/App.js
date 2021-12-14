import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroNavbar from './Component/Navbar/HeroNavbar';
import HeroSection from './Component/HeroSection/HeroSection';
import SecondNav from './Component/SecondNav/SecondNav';
import PostData from './Component/Data/PostData';
import LogHeroNav from './Component/Login User Component/logedInUserHeroNav/LogHeroNav';
import LogHeroSec from './Component/Login User Component/LogHeroSec/LogHeroSec';
import LogPostData from './Component/Login User Component/LogPostData/LogPostData';
import LogSecondNav from './Component/Login User Component/LogSecondNav/LogSecondNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route
            path="loginVersion"
            element={<LogHeroNav />}
          />
          <Route
            exact path="/"
            element={<HeroNavbar />}
          />
        </Routes>
      </BrowserRouter>
      {/* <LogHeroNav></LogHeroNav>
      <LogHeroSec></LogHeroSec>
      <LogSecondNav></LogSecondNav>
      <LogPostData></LogPostData> */}
    </div>
  );
}

export default App;
