import './App.css';
import { Routes,Route } from 'react-router-dom';
import Section1 from './components/section-1';
import Section2 from './components/section-2';
import Adminsignup from './components/admin-sign-up';
import Landingpage from './components/landing-page';
import Inviteesignup from './components/invitee-sign-up';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage /> }></Route>
      <Route path="/home" element={<Landingpage /> }></Route>
      <Route path="/admin-sign-up" element={<Adminsignup /> }></Route>
      <Route path="/invitee-sign-up" element={<Inviteesignup /> }></Route>
      <Route path="/overview" element={<Section1 /> }></Route>
      <Route path="/tasks-page" element={<Section2 /> }></Route>
      {/* <Route path="/employees-page" element={<Section3 /> }></Route> */}
    </Routes>
  );
}

export default App;
