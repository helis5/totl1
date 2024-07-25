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
            <p><b>Полное название:</b> муниципальное образовательное учреждение «Тираспольский общеобразовательный теоретический лицей»</p>
            <p><b>Адрес:</b> 3300, Приднестровье, , г.Тирасполь, ул.1 Мая, 62</p>
            <p><b>Директор:</b> Бака Наталья Александровна</p>
            <p><b>Телефон:</b> <a href="tel:+53377327">+533 7-73-27</a></p>
            <p><b>Телефон  заместителей директора:</b> <a href="tel:+53377328">+ 533 7-73-28</a></p>
            <br/>
            <p><b>Адрес сайта  лицея:</b> <a href="https://www.totl1.com">totl1.com</a></p>
            <p><b>Страница лицея в vk.com:</b> <a href="https://vk.com/totl_forever">vk.com/totl_forever</a></p>
            <br/>
            <div className={s.map} style={{ position: 'relative', overflow: 'hidden' }}>
                <a
                    href="https://yandex.ru/maps/org/tiraspolskiy_obshcheobrazovatelny_teoreticheski_litsey/197940316288/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
                >
                    Тираспольский общеобразовательный теоретически лицей
                </a>
                <a
                    href="https://yandex.ru/maps/10317/tiraspol/category/lyceum/184106238/?utm_medium=mapframe&utm_source=maps"
                    style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
                >
                    Лицей в Тирасполе
                </a>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?ll=29.636910%2C46.829813&mode=search&oid=197940316288&ol=biz&sctx=ZAAAAAgBEAAaKAoSCZ5eKcsQz0JAEdOgaB7A4EtAEhIJZVJDG4CN%2Fz8RyqXxC6%2Bk5D8iBgABAgMEBSgKOABAzVBIAWoCcnWdAc3MTD2gAQCoAQC9ATHOETrCAQaAkaax4QWCAkDRgtC40YDQsNGB0L%2FQvtC70YzRgdC60LjQuSDRgtC10L7RgNC10YLQuNGH0LXRgdC60LjQuSDQu9C40YbQtdC5igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=29.636910%2C46.829813&sspn=0.074827%2C0.029790&text=%D1%82%D0%B8%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9%20%D1%82%D0%B5%D0%BE%D1%80%D0%B5%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D0%BB%D0%B8%D1%86%D0%B5%D0%B9&z=14.72"
                    width="560"
                    height="400"
                    frameBorder="1"
                    allowFullScreen={true}
                    style={{ position: 'relative' }}
                ></iframe>
            </div>

        </div>
    </div>
}

export default ContactInf;