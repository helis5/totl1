
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
                        <Route path='forApplicants' element={<ForApplicants/>}/>
                        <Route path='educationalActivities' element={<EducationalActivities/>}/>
                    </Routes>
                </BrowserRouter>
            </div>

    );
}

export default App;
