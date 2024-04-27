//import { RendezVous } from '../server/database';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Login/Login';
import Mesure from './components/Mesure/Mesure';
import ProfilDocteur from './components/ProfilDocteur/ProfilDocteur';
import Registre from './components/Registre/Registre';
import { Route, Routes } from "react-router-dom";
import ProfilAdjoint from './components/ProfilAdjoint/ProfilAdjoint';
import ProfilPatient from './components/ProfilPatient/ProfilPatient';
import ProfilAdmin from './components/ProfilAdmin/ProfilAdmin';
import Historiquemedical from './components/Historiquemedical/Historiquemedical';
import Rendezvous from './components/rendezvous/rendevous';
import Management from './components/ProfilAdmin/Management';
import Profile from './components/ProfilPatient/ProfileManagement';
import GererRDV from './components/ProfilAdjoint/GererRDV';
import Rdv from './components/ProfilAdjoint/Rdv';
import Patients from './components/ProfilAdjoint/patients';

function App() {
  return (
    <div className="App">
      
      {/*<Management />
      <ProfileManage />*/}
      {/*<Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registre" element={<Registre/>}/>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/profiledocteur" element={<ProfilDocteur/>}/>
        <Route path="/rendezvous" element={<Rendezvous/>}/>
        <Route path="/profilAdjoint" element={<ProfilAdjoint/>}/>
        <Route path="/profilPatient" element={<ProfilPatient/>}/>
        <Route path="/Mesure" element={<Mesure/>}/>
        <Route path="/profilAdmin" element={<ProfilAdmin/>}/>
        <Route path="/historiquemedical" element={<Historiquemedical/>}/>
      </Routes>*/}
      
     
    </div> 
  );
}

export default App;
