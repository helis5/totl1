import React from 'react';
import s from './Main.module.scss';
import MyProvider from "../../state";
import state from "../../state";

const Main = () => {
    return <div className={s.main}>
        <div className={s.news}>
            <h1>Главные новости</h1>
            {/*<NewsContext.Consumer><NewsContext.Consumer />*/}
            <div className={s.item}>
                <img src="https://www.totl1.com/uploads/news/240614010404.jpg" alt=""/>
                <p className={s.text}>Подведены итоги вступительной кампании</p>
                <div className={s.date}>
                    <p className={s.number}>14</p>
                    <p className={s.month}>июня</p>
                </div>
            </div>


            <div className={s.item}>
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