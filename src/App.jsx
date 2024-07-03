import logo from './logo.svg';
import s from './App.module.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main/Main";
import ContactInf from "./pages/ContactInf/ContactInf";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import AboutTheLyceum from "./pages/AboutTheLyceum/AboutTheLyceum";

function App() {
  return (
    <div className={s.App}>
        <Header />
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path='contactInf' element={<ContactInf />} />
                <Route path='AboutTheLyceum' element={<AboutTheLyceum />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
