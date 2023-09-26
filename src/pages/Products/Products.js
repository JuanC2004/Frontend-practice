import React from 'react';
import './Products.scss';
import { Cube } from '../../components/Cube/Cube';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Products = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Cube/>
            <div class="Products">
                <div className="content">
                    <Slider {...sliderSettings}>
                        <div>
                            <img src="https://quenoticias.com/wp-content/uploads/2022/05/Un-verano-sin-ti-Bad-Bunny-Merengue-Despues-de-la-playa-letra-400x240.jpg"  />
                        </div>
                        <div>
                            <img src="https://www.show.news/__export/1654905484890/sites/debate/img/2022/06/10/maluma-1.jpg_1694538543.jpg" />
                        </div>
                        <div>
                            <img src="https://assets.elplanteo.com/wp-content/uploads/2023/05/01164009/Portadas-Javi20-500x281.png?crop=smart&height=281&width=500&optimize=medium&dpr=1&auto=webp" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
