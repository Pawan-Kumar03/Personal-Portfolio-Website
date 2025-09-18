import React, { useState } from "react";
import './certificates.css';
import c35 from '../../certificates/ReactJS1.PNG';
import c34 from '../../certificates/ReactJS2.PNG';
import c3 from '../../certificates/ReactJS3.PNG';
import c4 from '../../certificates/ReactJS-Devtown.PNG';
import c5 from '../../certificates/HotStart1.PNG';
import c6 from '../../certificates/HotStart2.PNG';
import c7 from '../../certificates/HotStart3.PNG';
import c8 from '../../certificates/HotStart4.PNG';
import c9 from '../../certificates/devtownAppreciation.PNG';
import c10 from '../../certificates/HTML.PNG';
import c11 from '../../certificates/CSS.PNG';
import c12 from '../../certificates/JavaScript.PNG';
import c13 from '../../certificates/WebDevelopment.PNG';
import c14 from '../../certificates/DataScience.PNG';
import c15 from '../../certificates/DataBase.PNG';
import c33 from '../../certificates/DS.PNG';
import c16 from '../../certificates/cpp1.PNG';
import c17 from '../../certificates/cpp2.PNG';
import c18 from '../../certificates/cpp3.PNG';
import c19 from '../../certificates/cpp4.PNG';
import c20 from '../../certificates/cpp5.PNG';
import c21 from '../../certificates/cpp6.PNG';
import c22 from '../../certificates/cpp7.PNG';
import c23 from '../../certificates/java1.PNG';
import c24 from '../../certificates/java2.PNG';
import c25 from '../../certificates/java3.PNG';
import c26 from '../../certificates/java4.PNG';
import c27 from '../../certificates/java5.PNG';
import c28 from '../../certificates/java6.PNG';
import c29 from '../../certificates/java7.PNG';
import c30 from '../../certificates/java8.PNG';
import c31 from '../../certificates/java9.PNG';
import c32 from '../../certificates/Python.PNG';
import c2 from '../../certificates/IBM-DS.jpeg';
import c1 from '../../certificates/SIBAFEST2025.jpeg';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Pagination } from "swiper";

const images = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24,c25,c26,c27,c28,c29,c30,c31,c32,c33,c34,c35];

const Certificates = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    return (
        <section id="certificates">
            <h2>Certificates</h2>

            <Swiper
                className="container certificates__container"
                modules={{ Pagination }} spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="certificate">
                        <div className="client__avatar">
                            <img
                                src={image}
                                alt=""
                                className="certificate__image"
                                onClick={handleImageClick}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Certificates;
