import React from 'react';
import s from './Main.module.scss';

const Main = () => {
    return <div className={s.main}>
        <h1>Главные новости</h1>
        <div className={s.news}>
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