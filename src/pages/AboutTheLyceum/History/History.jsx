import React, {useContext} from 'react';
import s from './History.module.scss';
import {ThemeContext} from "../../../ThemeContext";
import LightStyles from "../../LightStyles.module.scss";
import DarkStyles from "../../DarkStyles.module.scss";
import classNames from "classnames";

const History = () => {

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
            <h1>История лицея</h1>
            <p><strong>1991г.&nbsp;&mdash; </strong>Республиканская спортивная школа&mdash;интернат реорганизована в Тираспольский теоретический лицей на основании решения Тираспольского Исполнительного комитета (решение № 7 от 18.03.1991).</p>

            <p>В своем новом статусе лицей начал развивать структуру и систему образования. Появились концептуальные основы лицейского образования, система спецкурсов, клубов, попечительский совет, развивается сеть внешних связей. Расширяется круг олимпиад, конкурсов в которых участвуют лицеисты.</p>

            <p><strong>2005г.</strong> &ndash; Лицей представляет народное образование республики ПМР&nbsp; на Международной&nbsp; выставке &laquo;Образовательная среда-2005&raquo; во Всероссийском выставочном центре (г. Москва).</p>

            <p><strong>2006г.</strong> &nbsp;&ndash;&nbsp; Директор Бака Н.А. &ndash; победитель конкурса &laquo;Лидер образования - 2006&raquo;.</p>

            <p><strong>2007г., 2008г.&nbsp;</strong>&ndash; Лицей &ndash; участник международных Рождественских педагогических чтений Центра гуманной педагогики под руководством Ш. Амонашвили (г. Москва).</p>

            <p><strong>2007г.&nbsp;&ndash; </strong>&nbsp;Лицей представляет народное образование республики ПМР&nbsp; на Днях Приднестровья в Москве.</p>

            <p><strong>2007г.</strong> &ndash; Бака Н.А., директор лицея,&nbsp; удостоена звания &laquo;Человек года&raquo;.</p>

            <p><strong>С 2006г.&nbsp;</strong>по настоящее время &ndash; лицей &ndash; участник Международного экологического форума &laquo;Зеленая планета&raquo; (г. Москва), лауреаты и дипломанты &ndash; 75 человек.</p>

            <p><strong>2007г.</strong> &ndash; На базе лицея осуществляется реализация проекта Правительства Москвы &laquo;Московский аттестат&raquo; в рамках работы Открытой русской школы.</p>

            <p><strong>2008г.</strong> &ndash; Участие в IX Всероссийском конкурсе &laquo;Человек в истории. Россия &ndash; XX век&raquo;. Работа ученицы лицея отмечена как &laquo;Лучшая работа&raquo;.</p>

            <p><strong>2008г.</strong> &ndash; Общероссийская научно &ndash; практическая конференция с международным участием &laquo;Исследовательская деятельность учащихся в современном образовательном пространстве&raquo;. Сборник исследовательских работ учащихся лицея &laquo;Ум, алчущий познаний&raquo; был удостоен звания лауреата конкурса.</p>

            <p><strong>2009г.&nbsp;</strong>&ndash; Участие в VII Международном конкурсе &laquo;Уроки Холокоста &ndash; путь к толерантности&raquo;. Лучшая работа.</p>

            <p><strong>2010г.</strong> &ndash; Педагогический коллектив лицея удостоен гранта &laquo;Лучшая русская школа за рубежом&raquo; в рамках национального проекта РФ &laquo;Образование за рубежом&raquo;.</p>

            <p><strong>2010-11гг.</strong> &ndash;&nbsp; Участие во Всероссийском конкурсе&nbsp; &nbsp;&nbsp;&nbsp;&laquo;Управление современной школой&raquo;&nbsp; третьей Всероссийской Педагогической ассамблеи. Н.А.Бака - дипломант конкурса.</p>

            <p>&nbsp;<strong>2010-11гг.</strong> &ndash;&nbsp; Участие во Всероссийском конкурсе&nbsp;&nbsp; &laquo;Директор школы&raquo;. Н.А.Бака - дипломант конкурса.</p>

            <p><strong>2010-11гг.</strong> &ndash; Выпуск &nbsp;сборника методических разработок педагогов лицея &laquo;Тирасполь. Педагогический поиск&raquo;, № 2(30), 2011.</p>

            <p><strong>2010-11гг.</strong> &ndash; Выпуск сборника исследовательских работ учащихся лицея &laquo;Мир неизвестного смелых зовет&hellip;&raquo;, № 2, 2011, г.Тирасполь.</p>

            <p><strong>С&nbsp; 2011г.&nbsp;</strong>&nbsp;по настоящее время &ndash; сотрудничество с Национальным исследовательским институтом &ndash; Высшая школа экономики (г.Москва). Лицеисты становятся студентами этого ВУЗа по итогам участия в олимпиаде &laquo;Высшая проба&raquo; и результатам собеседования.</p>

            <p><strong>Ежегодно</strong> - Интернет - фестиваль педагогических идей &laquo;Открытый урок&raquo;, публикации педагогов.</p>

            <p><strong>Положительным ресурсом развития системы обучения в лицее являются:</strong></p>

            <ul>
                <li>традиции лицея в обучении, развитии и воспитании учащихся;</li>
                <li>высокопрофессиональный, творческий коллектив лицея, обеспечивающий высокое качество обучения и воспитания лицеистов;</li>
                <li>мотивированный контингент детей и престиж образовательного учреждения, в котором хотят учиться дети не только микрорайона &laquo;Южный&raquo;, но и других микрорайонов;</li>
                <li>значительные наработки лицея в области отбора содержания и реализации современного образования; &nbsp;</li>
                <li>высокая активность и результативность в городских, республиканских, международных олимпиадах и конкурсах, научно-практических конференциях, высокий процент поступления выпускников в вузы, успешная сдача ЕГЭ;</li>
                <li>интересные традиции, праздники, которые делают жизнь учащихся и учителей в лицее живой и запоминающейся, формируют лицейский дух.</li>
            </ul>
        </div>
    </div>
}

export default History;