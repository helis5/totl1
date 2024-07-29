import React, {useContext} from 'react';
import s from './AboutTheLyceum.module.scss';
import LightStyles from "../LightStyles.module.scss";
import DarkStyles from "../DarkStyles.module.scss";
import {ThemeContext} from "../../ThemeContext";
import classNames from "classnames";

const AboutTheLyceum = () => {

    // Изменение темы
    const { theme } = useContext(ThemeContext);
    const styles = theme === 'light' ? LightStyles : DarkStyles;

    return <div className={classNames(s.aboutTheLyceum, styles.container)}>
        <div className={classNames(s.links, styles.color1)}>
            <a href="/aboutTheLyceum">О лицее</a>
            <a href="/aboutTheLyceum/history">История лицея </a>
            <a href="/aboutTheLyceum">Направления деятельности</a>
        </div>
        <div className={s.list}>
            <p>Учредитель лицея – Управление народного образования Государственной администрации г. Тирасполя</p>
            <p><strong>Организация учебного процесса:</strong><br/>
                Обучение в лицее ведется по шестидневной рабочей неделе.<br/>
                Начало занятий в<strong>8<sup>00</sup>.</strong><br/>
                Занятия проводятся <strong>парами</strong>.В середине пары - динамическая пауза.</p>
            <h1>Расписание звонков</h1>
            <table className={s.scheduleTable} align="center">
                <tbody>
                <tr>
                    <td rowSpan="2" className={s.scheduleTime}><strong>1 пара</strong></td>
                    <td className={s.scheduleTime}><strong>8<sup>00</sup> - 8<sup>40</sup></strong></td>
                </tr>
                <tr>
                    <td className={s.scheduleTime}><strong>8<sup>40</sup> - 9<sup>20</sup></strong></td>
                </tr>
                <tr>
                    <td rowSpan="2" className={s.scheduleTime}><strong>2 пара</strong></td>
                    <td className={s.scheduleTime}><strong>9<sup>30</sup> - 10<sup>10</sup></strong></td>
                </tr>
                <tr>
                    <td className={s.scheduleTime}><strong>10<sup>10</sup> - 10<sup>50</sup></strong></td>
                </tr>
                <tr>
                    <td rowSpan="2" className={s.scheduleTime}><strong>3 пара</strong></td>
                    <td className={s.scheduleTime}><strong>11<sup>10</sup> - 11<sup>50</sup></strong></td>
                </tr>
                <tr>
                    <td className={s.scheduleTime}><strong>11<sup>50</sup> - 12<sup>30</sup></strong></td>
                </tr>
                <tr>
                    <td rowSpan="2" className={s.scheduleTime}><strong>4 пара</strong></td>
                    <td className={s.scheduleTime}><strong>12<sup>50</sup> - 13<sup>30</sup></strong></td>
                </tr>
                <tr>
                    <td className={s.scheduleTime}><strong>13<sup>30</sup> - 14<sup>10</sup></strong></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
}

export default AboutTheLyceum;