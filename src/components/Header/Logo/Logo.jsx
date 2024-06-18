import React from 'react';
import s from './Logo.module.scss'

const Logo = () => {
    return <div className={s.logo}>
        <a href="/">
            <img src="https://i.imgur.com/dVabrrT.png" alt="logo"/>
        </a>

    </div>
}

export default Logo;