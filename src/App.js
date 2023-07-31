import logo from './TB.png';
import './App.css';
import SideNavbar from './Components/SideNavbar';
import ProfileBar from './Components/ProfileBar';
import HoriNavbbar from './Components/HoriNavbbar';

function App() {
  return (
    <>
    <SideNavbar img = {logo} size = "50px" compoSize = "25px"/>
    <ProfileBar/>
    <HoriNavbbar/>
    </>
  );
}

export default App;
