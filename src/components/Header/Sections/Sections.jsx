import React from 'react';
import s from './Sections.module.scss'
import ThemeToggle from "../../ThemeToggle/ThemeToggle";


const Sections = () => {

    return <div className={s.sections}>
        <div>ТИРАСПОЛЬСКИЙ ОБЩЕОБРАЗОВАТЕЛЬНЫЙ ТЕОРЕТИЧЕСКИЙ ЛИЦЕЙ</div>
        <ThemeToggle />
    </div>
}

export default Sections;