import React from 'react';
import s from './Header.module.scss'
import Logo from "./Logo/Logo";
import Sections from "./Sections/Sections";

const Header = () => {



    return (
        <header className={s.header}>
            <Logo />
            <Sections />
        </header>
    )

}

export default Header;