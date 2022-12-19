import './App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Container from './Components/Container/Container';
import YourProfile from './Components/Widgets/YourProfile/YourProfile';
import Friends from './Components/Widgets/Friends/Friends';
import MakeFriends from './Components/Widgets/MakeFriends/MakeFriends';
import logo2 from './daisy-media.png'
import { useEffect, useState } from 'react';
import Gallery from './Components/Widgets/Gallery/Gallery';
import Watch from './Components/Widgets/Watch/Watch';
import Register from './Components/LoginRegister/Login/Register/Register';

function App() {
  const location = useLocation();
  let path = location?.pathname;
  const [showLogo, setShowLogo] = useState(false);
  useEffect(() => {
    if (path === '/') {
      setShowLogo(false);
    }
    else {
      setShowLogo(true);
    }
  }, [path]);

  return (
    <div className="App">
      {
        showLogo &&
        <Link to='/'>
          <div style={{ width: '90px', height: '90px', position: 'fixed', top: '30px', left: '30px', overflow: 'hidden', background: '#8c72ff', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={logo2} width={120} height='120' alt="" />
          </div>
        </Link>
      }
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/home" element={<Container />} />
        <Route path="/profile" element={<YourProfile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/make-friends" element={<MakeFriends />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
