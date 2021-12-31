import React from 'react'
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components'
import { Tablet, MobilePro, Mobile } from '../../responsive'


const Slides = () => {
    return (
        <SlidesStyled>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/chackopen (2).jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                            <span>New Arrivals</span>
                            <h2>DENIM COLLECTION </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />
                                incididunt ut labore et dolore magna aliqua.
                                Quis ipsum sus-pendisse ultrices gravida.<br /> Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="img/chackopen (1).jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                            <span>New Arrivals</span>
                            <h2>DENIM COLLECTION </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
                                incididunt ut labore et dolore magna aliqua.
                                Quis ipsum sus-pendisse ultrices gravida.<br />Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </SlidesStyled>

    )
}
//styled-components
const SlidesStyled = styled.section`
display: flex;
align-items: center !important;
.carousel-caption{
    flex: 1 !important;
    color: black;
    text-align: start;
    top: 30%;
    left: 8.5%;
    ${MobilePro({ top: '20%' })}
    span{
        font-size: 48px;
        color: #a72047;
        ${Tablet({ fontSize: '35px' })}
        ${MobilePro({ fontSize: '15px' })}
    }
    h2{
        font-size: 60px;
        color: #000000;
        ${Tablet({ fontSize: '40px' })}
        ${MobilePro({ fontSize: '20px' })}
    }
    p{
        ${Tablet({ fontSize: '16px' })}
        ${MobilePro({ fontSize: '9px' })}
        ${Mobile({ fontSize: '8px' })}
    }
}
.carousel-control-prev{
    display: none;
}
.carousel-control-next{
    display: none;
}
.carousel-indicators{
        button{
            width: 10px;
            height: 10px;
        border-radius: 50% !important;
        background-color: #a72047;
        }
    }

`;
export default Slides
