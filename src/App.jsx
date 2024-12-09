
import s from './App.module.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import ContactInf from "./pages/ContactInf/ContactInf";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import ForApplicants from "./pages/ForApplicants/ForApplicants";
import EducationalActivities from "./pages/EducationalActivities/EducationalActivities";
import History from "./pages/AboutTheLyceum/History/History";
import AboutTheLyceum from "./pages/AboutTheLyceum/AboutTheLyceum";
import './global.scss';
import AreasOfActivity from "./pages/AboutTheLyceum/AreasOfActivity/AreasOfActivity";
import AdmissionRules from "./pages/ForApplicants/AdmissionRules/AdmissionRules";

function App() {
    return (
            <div className={s.App}>
                <Header/>
                <Navbar/>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Main/>}/>
                        <Route path='contactInf' element={<ContactInf/>}/>
                        <Route path='aboutTheLyceum' element={<AboutTheLyceum/>}/>
                        <Route path='aboutTheLyceum/history' element={<History/>}/>
                        <Route path='aboutTheLyceum/areasOfActivity' element={<AreasOfActivity/>}/>
                        <Route path='forApplicants' element={<ForApplicants/>}/>
                        <Route path='forApplicants/admissionRules' element={<AdmissionRules/>}/>
                        <Route path='educationalActivities' element={<EducationalActivities/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
    );
}

export default App;