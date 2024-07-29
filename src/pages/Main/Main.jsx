import React, {useContext} from 'react';
import s from './Main.module.scss';
import MyProvider from "../../state";
import state from "../../state";
import {ThemeContext} from "../../ThemeContext";
import LightStyles from "../LightStyles.module.scss";
import DarkStyles from "../DarkStyles.module.scss";
import classNames from "classnames";

const Main = () => {

    // Изменение темы
    const { theme } = useContext(ThemeContext);
    const styles = theme === 'light' ? LightStyles : DarkStyles;

    return <div className={classNames(s.main, styles.container)}>
        <div className={s.news}>
            <h1>Главные новости</h1>
            {/*<NewsContext.Consumer><NewsContext.Consumer />*/}
            <div className={classNames(s.item, styles.boxShadow)}>
                <img src="https://www.totl1.com/uploads/news/240614010404.jpg" alt=""/>
                <p className={s.text}>Подведены итоги вступительной кампании</p>
                <div className={s.date}>
                    <p className={s.number}>14</p>
                    <p className={s.month}>июня</p>
                </div>
            </div>


            <div className={classNames(s.item, styles.boxShadow)}>
                <img src="https://www.totl1.com/uploads/news/240614010404.jpg" alt=""/>
                <p className={s.text}>Подведены итоги вступительной кампании</p>
                <div className={s.date}>
                    <p className={s.number}>14</p>
                    <p className={s.month}>июня</p>
                </div>
            </div>
        </div>
    </div>
}

export default Main;