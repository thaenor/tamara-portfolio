import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navigation from './components/layout/Navigation';
import PairupEvents from './components/projects/PairupEvents';
import XingEmailNewsletter from './components/projects/XingEmailNewsletter';
import XingPrivateProfile from './components/projects/XingPrivateProfile';
import XingCultureCheck from './components/projects/XingCultureCheck';
import Freely from './components/projects/Freely';
import YuuSkydive from './components/projects/YuuSkydive';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/pairup-events" element={<PairupEvents />} />
        <Route path="/projects/xing-email-newsletter" element={<XingEmailNewsletter />} />
        <Route path="/projects/xing-private-profile" element={<XingPrivateProfile />} />
        <Route path="/projects/xing-culture-check" element={<XingCultureCheck />} />
        <Route path="/projects/freely" element={<Freely />} />
        <Route path="/projects/yuu-skydive" element={<YuuSkydive />} />
      </Routes>
    </div>
  );
}

export default App;
