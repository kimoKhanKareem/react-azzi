import {useState, useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Rightsliders = () => {

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    const [bests, setBests] = useState([]);
    useEffect(() => {
        axios.get('data/data.json').then(res=>{setBests(res.data.best)})
        .catch(err => console.error(err));
    }, [])
const Returndatabest = bests.map((bestsItem)=>{
    const Image = (bestsItem.image)
    return (
        <Wraper key={bestsItem.id}>
            <img src={Image} alt="img...." />
        </Wraper>
    )
})
    return (
        <RightslidersStyled>
            <Carousel  {...settings}>
                {Returndatabest}
            </Carousel>
        </RightslidersStyled>
    )
}
// styled-components
const RightslidersStyled = styled.div`
`;
const Wraper = styled.div`
overflow: hidden;
img{
    transition: all 0.4s;
    filter: brightness(0.8);
    &:hover{
        transform: scale(1.1);
    }
}
`;
const Carousel = styled(Slider)`
    .slick-dots{
        display: none !important;
}
.slick-next{
    right: 0;
    width: 45px ;
    height: 45px;
    &::before{
        font-size: 45px;
        opacity: 1;
    }
}
.slick-prev{
    left: 0;
    z-index: 3;
    width: 45px ;
    height: 45px;
    &::before{
        font-size: 45px;
        opacity: 1;
    }
}
`;

export default Rightsliders;
