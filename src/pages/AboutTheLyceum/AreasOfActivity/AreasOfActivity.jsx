import React, {useContext} from 'react';
import s from './AreasOfActivity.module.scss';
import {ThemeContext} from "../../../ThemeContext";
import LightStyles from "../../LightStyles.module.scss";
import DarkStyles from "../../DarkStyles.module.scss";
import classNames from "classnames";

const AreasOfActivity = () => {

    // Изменение темы
    const { theme } = useContext(ThemeContext);
    const styles = theme === 'light' ? LightStyles : DarkStyles;

    return <div className={classNames(s.history, styles.container)}>
        <div className={classNames(s.links, styles.color1)}>
            <a href="/aboutTheLyceum">О лицее</a>
            <a href="/aboutTheLyceum/history">История лицея </a>
            <a href="/aboutTheLyceum/areasOfActivity">Направления деятельности</a>
        </div>
        <div className={s.list}>
            <h1>Направления деятельности</h1>
            <p><b>Гуманитарное</b> - углублённое изучение русского языка, русской и зарубежной литературы, истории и обществознания, логики, риторики, основ философии, экономики и права, мировой художественной культуры</p>
            <p><b>Физико-математическое</b> - углублённое изучение математики, физики, информационных технологий, математической логики, комбинаторики и теории вероятностей, основ программирования</p>
            <p><b>Биолого-химическое</b> - углублённое изучение биологии, химии, экологии, психологии</p>
        </div>
    </div>
}

export default AreasOfActivity;