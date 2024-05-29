import React from "react";
import banner from './imagecarousel/estoque.png'
import Carousel from 'react-bootstrap/Carousel';
import LFA from '../banner/imagecarousel/LFA.jpg';
import Ferrari from '../banner/imagecarousel/ferrari.jpg';
import Huracan from '../banner/imagecarousel/huracan.jpg';
import "../banner/banner.css"


function Banner() {
    return (
    <>
        <div className="Banner-comp">
        <Carousel>
        <Carousel.Item>
        <img src={Ferrari} />
        <div className="info">
        <Carousel.Caption>
            <div className="info-banner">
                <h3>Ferrari</h3>
                <p>Uma das marcas mais renomadas de carros esportivos</p>
            </div>
        </Carousel.Caption>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <img src={LFA} />
        <Carousel.Caption>
            <h3>Lexus</h3>
            <p>Carros estilosos e com o modelo sport</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Huracan} />
        <Carousel.Caption>
            <h3>Lamborghini</h3>
            <p>A marca italiana focada em carros esportivos de luxo</p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <br/>
    </div>
    </>
    );
}

export default Banner;
