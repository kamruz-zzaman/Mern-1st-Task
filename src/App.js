import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroNavbar from './Component/Navbar/HeroNavbar';
import HeroSection from './Component/HeroSection/HeroSection';
import SecondNav from './Component/SecondNav/SecondNav';
import PostData from './Component/Data/PostData';

function App() {
  return (
    <div >
      <HeroNavbar></HeroNavbar>
      <HeroSection></HeroSection>
      <SecondNav></SecondNav>
      <PostData></PostData>
    </div>
  );
}

export default App;
