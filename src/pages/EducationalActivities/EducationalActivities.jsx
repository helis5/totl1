import React, {useContext} from 'react';
import s from './EducationalActivities.module.scss';
import {Outlet} from "react-router-dom";
import {ThemeContext} from "../../ThemeContext";
import LightStyles from "../LightStyles.module.scss";
import DarkStyles from "../DarkStyles.module.scss";
import classNames from "classnames";

const EducationalActivities = () => {

    // Изменение темы
    const { theme } = useContext(ThemeContext);
    const styles = theme === 'light' ? LightStyles : DarkStyles;

    return (
        <div className={classNames(s.educationalActivities, styles.container)}>
            <div className={classNames(s.links, styles.color1)}>
                <a href="/educationalActivities">Учебная деятельность</a>
                <a href="/educationalActivities">Нормативные документы</a>
                <a href="/educationalActivities">ЕГЭ</a>
            </div>
            <div className={s.list}>
                <p> Учебная деятельность – это один из видов деятельности обучающихся, направленный на усвоение теоретических знаний и способствующий интенсивному развитию мышления. (В трактовке Д.Б. Эльконина и В.В. Давыдова)</p>
                <p>Предметом учебной деятельности, т.е. тем, на что она направлена, являются прежде всего усвоение знаний, овладение обобщенными способами действий, отработка приёмов и способов действий, их программ и алгоритмов, в процессе чего развивается сам обучающийся.</p>
            </div>
        </div>
    )
}

export default EducationalActivities;