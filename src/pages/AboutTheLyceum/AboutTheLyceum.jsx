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

            <h2>Статистические данные:</h2>

            <ul>
                <li>Состав: 23&nbsp;класса</li>
                <li>Количество учащихся: 548</li>
                <li>Количество учебных мест: 800</li>
                <li>Наполняемость классов: до 30 человек</li>
                <li>Набор в лицей конкурсный, в 8-е классы</li>
            </ul>

            <h2><strong>Отделения:</strong></h2>

            <ul>
                <li>гуманитарное</li>
                <li>физико-математическое</li>
                <li>биолого-химическое</li>
            </ul>

            <h2><strong>Преподавательский состав</strong>:</h2> <p>61&nbsp;педагог и 6 совместителей<br />
                Из них:<br />
                &quot;Заслуженный работник народного образования ПМР&quot; &ndash; 11<br />
                &quot;Отличник народного образования&quot;&ndash; 38<br />
                Кандидат наук &ndash; 2<br />
                <br />
                Высшая квалификационная категория &ndash;&nbsp;28<br />
                1 квалификационная категория &ndash; 17<br />
                2 квалификационная категория &ndash; 6<br />
                без категории &ndash; 10</p>

            <p>Со дня основания работает 20 педагогов;&nbsp;<br />
                Молодых педагогов, выпускников лицея &ndash; 15</p>

            <h1>Атрибуты лицея</h1>

            <p><strong>Эмблема лицея:</strong></p>

            <p><img alt="" src="https://i.imgur.com/dVabrrT.png"/></p>

            <h2><strong>Гимн лицея:</strong></h2>

            <p>Мой голос слаб, мне не перекричать<br />
                Ревущего хвалу лукавой бездне,<br />
                Но стоит мне вполголоса начать,<br />
                И сотни голосов подхватят песню.</p>

            <p>Одна свеча ещё не есть пожар.<br />
                Одна гитара спящих не разбудит.<br />
                Но я начну, и тысячи гитар<br />
                Заглушат звон фанфар и гром орудий.&nbsp;</p>

            <p>Какой бы мрак ни застил небеса,<br />
                Какой бы лжец ни пребывал в фаворе,<br />
                Мы будем петь, и наши голоса<br />
                Сольются в хоре не для ораторий.</p>

            <p>Кто нем, тот мертв, живой да воспоёт<br />
                Свободу, но не ту, что дали свыше,<br />
                А ту одну свободу из свобод &ndash;<br />
                Жить так же, как поёшь, а петь, как слышишь.</p>

            <p><em><strong><span>Автор М.Володин&nbsp;</span></strong></em></p>

            <h1>Материальная база лицея:</h1>

            <p>Общая площадь &ndash; 5962 м<sup>2</sup><br />
                Учебные кабинеты &ndash; 46<br />
                Компьютерные классы (с доступом к сети Интернет) &ndash; 2<br />
                Информационный центр<br />
                Актовый зал &ndash; 280 посадочных мест<br />
                Библиотека с книжным фондом &ndash; 30585 (учебная литература &ndash; 23588 экз., методическая литература &ndash; 1707 экз., художественная литература &ndash; 7790 экз.)<br />
                Читальный зал<br />
                Литературная гостиная<br />
                Конференц-зал<br />
                Столовая &ndash; 120 посадочных мест<br />
                Спортивные площадки &ndash; 4882 кв.м. (волейбольная, баскетбольная, футбольная), тренажерный зал.<br />
                Дендропарк (8820 кв.м., 450 деревьев)</p>

            <h1>Достижения лицея</h1>

            <h2><strong>Участие и победы в олимпиадах:</strong></h2>

            <ul>
                <li>в Норвегии и Дании (физика);</li>
                <li>стран Причерноморья (физика);</li>
                <li>стран СНГ и Балтии (русский язык и литература, математика), неоднократные призеры и дипломанты.</li>
                <li>Московской городской математической олимпиады</li>
                <li>Молдовы (химия, биология, физика, математика, информатика, английский язык, русский язык и литература), многократные призеры и дипломанты.</li>
                <li>Олимпиад МФТИ</li>
                <li>Олимпиад&nbsp;ВШЭ</li>
            </ul>

            <p><strong>Учащиеся лицея</strong> ежегодно участвуют в детском международном экологическом форуме &laquo;Зеленая планета&raquo;, где в течение многих лет становятся его лауреатами и дипломантами</p>

            <h2><strong>Коллектив лицея:</strong></h2>

            <ul>
                <li>Победитель конкурса авторских работ (журнал &quot;Тирасполь, Педагогический Поиск&quot;, № 3 &ndash; 4, 2001год, а также №2, 2006 год), проведенного фирмой &quot;Сентябрь&quot;, журналом &quot;Директор школы&quot;, Россия, 2002 год</li>
                <li>Участник Всеросийской выставки &laquo;Образовательная среда 2005&raquo;</li>
                <li>Призёр конкурса детских исследовательских работ, проводимого журналом &quot;Исследовательская работа школьников&quot;, Россия, 2008 год</li>
                <li>Призёр научно-исследовательской конференции учащихся им. Вернадского (2007)</li>
                <li>Участник Дней Приднестровья в Москве (2007)</li>
                <li>Участник ежегодных Международных педагогических чтений в Центре Гуманной Педагогики</li>
                <li>Всероссийских педагогических чтений (2007)</li>
                <li>Дипломант Министерства иностранных дел РФ</li>
            </ul>

        </div>
    </div>
}

export default AboutTheLyceum;