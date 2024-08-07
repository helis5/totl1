import React, {useContext} from 'react';
import s from './ForApplicants.module.scss';
import MyProvider from "../../state";
import state from "../../state";
import {ThemeContext} from "../../ThemeContext";
import LightStyles from "../LightStyles.module.scss";
import DarkStyles from "../DarkStyles.module.scss";
import classNames from "classnames";

const ForApplicants = () => {

    // Изменение темы
    const { theme } = useContext(ThemeContext);
    const styles = theme === 'light' ? LightStyles : DarkStyles;


    return <div className={ classNames(s.forApplicants, styles.container)}>
        <div className={classNames(s.links, styles.color1)}>
            <a href="/forApplicants">Поступающим</a>
            <a href="/forApplicants/admissionRules">Правила приёма</a>
        </div>
        <div className={s.list}>
            <h1>Информация поступающим в лицей</h1>
            <p>     Всем желающим поступить в Тираспольский общеобразовательный теоретический лицей: <hr/>
                1. Рекомендуем ознакомиться с Правилами приёма; <hr/>
                2. Зарегистрироваться в Базе поступающих, заполнив форму Регистрация абитуриента; <hr/>
                3.  Вся информация для поступающих анонсируется на сайте лицея: даты проведения консультаций и экзаменов, результаты вступительных испытаний. <hr/>
                Подготовку к поступленю в 8 класс лицея на гуманитарное, физико-математическое, биолого-химическое отделения учащихся 7-х классов школ города проводит дистанционная предпрофильная школа (http://ds.totl1.com/), которая работает с января по апрель учебного года.</p>
            <h1>Информация поступившим в лицей</h1>
            <p>Справки о зачислении поступивших  выдаются после окончания вступительной кампании. <hr/>
                При поступлении в лицей родителями (законными представителями) поступившего заполяется <hr/> Заявление поступившего и вместе с заявлением в приёмную лицея подаются следующие документы:</p>
            <img src="https://www.totl1.com/uploads/images/1652941263.jpg" alt="Документ"/>
        </div>
    </div>
}

export default ForApplicants;