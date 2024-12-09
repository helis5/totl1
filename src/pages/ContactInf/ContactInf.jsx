import React, {useContext} from 'react';
import s from './ContactInf.module.scss';
import classNames from "classnames";
import {ThemeContext} from "../../ThemeContext";
import LightStyles from "../LightStyles.module.scss";
import DarkStyles from "../DarkStyles.module.scss";

const ContactInf = () => {

    // Изменение темы
    const { theme } = useContext(ThemeContext);
    const styles = theme === 'light' ? LightStyles : DarkStyles;

    return <div className={classNames(s.contactInf, styles.container)}>

        <div className={s.list}>
            <h1>Контактные данные </h1>
            <p><b>Полное название:</b> муниципальное образовательное учреждение «Тираспольский общеобразовательный
                теоретический лицей»</p>
            <p><b>Адрес:</b> 3300, Приднестровье, , г.Тирасполь, ул.1 Мая, 62</p>
            <p><b>Директор:</b> Бака Наталья Александровна</p>
            <p><b>Телефон:</b> <a href="tel:+53377327">+533 7-73-27</a></p>
            <p><b>Телефон заместителей директора:</b> <a href="tel:+53377328">+ 533 7-73-28</a></p>
            <br/>
            <p><b>Адрес сайта лицея:</b> <a href="https://www.totl1.com">totl1.com</a></p>
            <p><b>Страница лицея в vk.com:</b> <a href="https://vk.com/totl_forever">vk.com/totl_forever</a></p>
            <br/>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1893.3542449744252!2d29.630697040763344!3d46.83066392778578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1733581245926!5m2!1sru!2s"
                width="600" height="450" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
    </div>
}

export default ContactInf;