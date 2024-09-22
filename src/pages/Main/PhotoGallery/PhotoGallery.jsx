import React, { useState, useEffect } from 'react';
import styles from './PhotoGallery.module.scss';

const PhotoGallery = () => {
    const photos = [
        'https://www.totl1.com/uploads/slider/sl3.jpg',
        'https://www.totl1.com/uploads/slider/sl8.jpg',
        'https://www.totl1.com/uploads/slider/sl9.jpg',
        'https://www.totl1.com/uploads/slider/sl10.jpg',
        'https://www.totl1.com/uploads/slider/sl11.jpg',
        'https://www.totl1.com/uploads/slider/sl12.jpg',
        'https://www.totl1.com/uploads/slider/sl13.jpg',
        'https://www.totl1.com/uploads/slider/sl14.jpg',
        'https://www.totl1.com/uploads/slider/sl15.jpg',
        'https://www.totl1.com/uploads/slider/2.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const nextPhoto = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
            setFade(true);
        }, 300);
    };

    const prevPhoto = () => {
        setFade(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
            setFade(true);
        }, 300);
    };

    useEffect(() => {
        const intervalId = setInterval(nextPhoto, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.gallery}>
            <button className={styles.button} onClick={prevPhoto} disabled={photos.length === 0}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path d="M15 18l-6-6 6-6v12z" />
                </svg>
            </button>
            <div className={`${styles.imageContainer} ${fade ? styles.fadeIn : styles.fadeOut}`}>
                <img className={styles.image} src={photos[currentIndex]} alt={`Photo ${currentIndex + 1}`} />
            </div>
            <button className={styles.button} onClick={nextPhoto} disabled={photos.length === 0}>
                <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
                    <path d="M9 6l6 6-6 6V6z" />
                </svg>
            </button>
        </div>
    );
};

export default PhotoGallery;