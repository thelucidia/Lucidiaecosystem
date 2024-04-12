import React from 'react';
import Landing from './pages/Landing';
import { Route, Routes, useLocation } from 'react-router-dom';
import Team from './pages/Team';
import Careers from './pages/Careers';
import OurProducts from './pages/OurProducts';
import GamePlay from './pages/GamePlay';
import RoadMap from './pages/RoadMap';
import Cryptocraft from './pages/Games/Cryptocraft';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Sandstorm from './pages/Games/Sandstorm';
import Curse from './pages/Games/Curse';
import DesertWarrior from './pages/Games/DesertWarrior';
import Game from './pages/Apps/Games/Game';
import CryptoCraft from './pages/Apps/Games/CryptoCraft';
import Desertwarrior from './pages/Apps/Games/Desertwarrior';
import CurseofThePharaoh from './pages/Apps/Games/CurseofThePharaoh';
import SandStorm from './pages/Apps/Games/SandStorm';
import Login from './pages/Apps/Login';
import SupportHub from './pages/Apps/SupportHub';
import DevTools from './pages/Apps/DevTools';
// import ComingSoon from './pages/Apps/ComingSoon';
import Dao from './pages/Apps/Dao';
import Marketplace from './pages/Apps/Marketplace';
import Tournaments from './pages/Apps/Tournaments';
import AppHome from './pages/Apps/Home';
import Signup from './pages/Apps/Signup';

const App: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <section className="w-full h-full overflow-hidden bg-bg">
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/team" element={<Team />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/careers" element={<Careers />} />

        {/* <Route path="/apps"> */}
        <Route path="/apps/cryptocraft" element={<CryptoCraft />} />
        <Route path="/apps/desert" element={<Desertwarrior />} />
        <Route path="/apps/sandstorm" element={<SandStorm />} />
        <Route path="/apps/curse-of-the" element={<CurseofThePharaoh />} />
        <Route path="/apps/game" element={<Game />} />
        <Route path="/apps/login" element={<Login />} />
        <Route path="/apps/signup" element={<Signup />} />
        <Route path="/apps/support-hub" element={<SupportHub />} />
        <Route path="/apps/dev-tools" element={<DevTools />} />
        <Route path="/apps/dao" element={<Dao />} />
        <Route path="/apps/marketplace" element={<Marketplace />} />
        <Route path="/apps/tournaments" element={<Tournaments />} />
        <Route path="/apps" element={<AppHome />} />
        {/* </Route> */}
        <Route path="games">
          <Route index element={<GamePlay />} />
          <Route path="/games/cryptocraft" element={<Cryptocraft />} />
          <Route path="/games/sandstorm" element={<Sandstorm />} />
          <Route path="/games/curse-of-the" element={<Curse />} />
          <Route path="/games/desert" element={<DesertWarrior />} />
        </Route>
      </Routes>
      {!pathname.includes('apps') && <Footer />}
    </section>
  );
};

export default App;
