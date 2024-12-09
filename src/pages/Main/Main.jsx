import React, {useContext, useRef, useState} from 'react';
import s from './Main.module.scss';
import MyProvider from "../../state";
import state from "../../state";
import {ThemeContext} from "../../ThemeContext";
import LightStyles from "../LightStyles.module.scss";
import DarkStyles from "../DarkStyles.module.scss";
import classNames from "classnames";
import PhotoGallery from "./PhotoGallery/PhotoGallery";     

const NewsItem = ({ imgSrc, text, number, month, styles }) => {
    const [style, setStyle] = useState({});
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = itemRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const offsetX = ((x / rect.width) - 0.5) * 2;
        const offsetY = ((y / rect.height) - 0.5) * 2;

        const rotateX = offsetY * -5;
        const rotateY = offsetX * 5;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.1s ease-out',
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.3s ease-out',
        });
    };

    return (
        <div
            ref={itemRef}
            className={classNames(s.item, styles.boxShadow)}
            style={style}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img src={imgSrc} alt="" />
            <p className={s.text}>{text}</p>
            <div className={s.date}>
                <p className={s.number}>{number}</p>
                <p className={s.month}>{month}</p>
            </div>
        </div>
    );
};

const Main = () => {
    const imageUrl = 'https://i.imgur.com/lGIzuVw.jpeg';

    const { theme } = useContext(ThemeContext);
    const styles = theme === 'light' ? LightStyles : DarkStyles;

    const newsItems = [
        {
            imgSrc: 'https://www.totl1.com/uploads/news/240906022803.jpg',
            text: 'Завершился Международный конкурс молодёжных проектов «Правду о Победе сохраним!»',
            number: '6',
            month: 'сентября'
        },
        {
            imgSrc: 'https://www.totl1.com/uploads/news/240903071646.jpg',
            text: '«День Знаний!»',
            number: '3',
            month: 'сентября'
        },
        {
            imgSrc: 'https://www.totl1.com/uploads/news/240901054238.jpg',
            text: '1 сентября — это старт нового учебного года и символический день',
            number: '1',
            month: 'сентября'
        },
        {
            imgSrc: 'https://www.totl1.com/uploads/news/240614010404.jpg',
            text: 'Подведены итоги вступительной кампании',
            number: '14',
            month: 'июня'
        }
    ];

    return (
        <div className={classNames(s.main, styles.container)}>
            <PhotoGallery/>

            <div className={s.news}>
                <h1>Главные новости</h1>
                {newsItems.map((item, index) => (
                    <NewsItem
                        key={index}
                        imgSrc={item.imgSrc}
                        text={item.text}
                        number={item.number}
                        month={item.month}
                        styles={styles}
                    />
                ))}
            </div>
            <div className={s.panorama}>
                <iframe width="640" height="480" allowFullScreen="true" webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        src="https://truevirtualtours.com/ru/panorama/183764/360view"></iframe>
            </div>
        </div>
    );
};

export default Main;