import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroNavbar from './Component/Navbar/HeroNavbar';
import HeroSection from './Component/HeroSection/HeroSection';
import SecondNav from './Component/SecondNav/SecondNav';
import PostData from './Component/Data/PostData';
import LogHeroNav from './Component/Login User Component/logedInUserHeroNav/LogHeroNav';
import LogHeroSec from './Component/Login User Component/LogHeroSec/LogHeroSec';

function App() {
  return (
    <div >
      {/* <HeroNavbar></HeroNavbar>
      <HeroSection></HeroSection>
      <SecondNav></SecondNav>
      <PostData></PostData> */}
      <LogHeroNav></LogHeroNav>
      <LogHeroSec></LogHeroSec>
    </div>
  );
}

export default App;
