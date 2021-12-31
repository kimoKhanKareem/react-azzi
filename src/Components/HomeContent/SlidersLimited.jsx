import { useState, useEffect } from 'react'
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import { Tablet, MobilePro } from '../../responsive';


const SlidersLimited = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 2,
    };
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('data/data.json').then(res => { setProducts(res.data.works)})
            .catch(err => console.error(err));
    }, [])
    const Returndatajson = products.map((productsItem) => {
        return (
            <Wrap key={productsItem.id}>
                <img src={productsItem.image} alt="img...." />
                <div className="botext">
                    <h5>
                        {productsItem.title}
                    </h5>
                    <p>
                        $ {productsItem.price}
                    </p>
                </div>
                <PiLinks>
                    <HeartIconon>
                        <AiOutlineHeart />
                    </HeartIconon>
                    <Link to='/' className="add-to-cart">
                        <RiShoppingCartLine />
                    </Link>
                </PiLinks>
            </Wrap>
        )
    })
    return (
        <CarsoulLimitedStyled>
            <Carousel  {...settings}>
                {Returndatajson}
            </Carousel>
        </CarsoulLimitedStyled>
    )
}
//styled-components
const CarsoulLimitedStyled = styled.section`
.slick-next{
    display: none !important;
}
`;
const Carousel = styled(Slider)`
    .slick-dots{
    display: none !important;
}
`;
const Wrap = styled.div`
padding: 0 5px;
position: relative;
.botext{
    position: absolute;
    bottom: -5%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    width: 80%;
    padding: 10px 5px;
    color: #000000;
    //responsive
    ${MobilePro({
    bottom: '-10%',
    padding: '5px 5px'
})}

    h5{
        ${Tablet({
    fontSize: '14px',
    fontWeight: '600'
})}
        //responsive
         ${MobilePro({ fontSize: '10px' })}
    }
    p{
        margin-bottom: 0;
        font-weight: 600;
        color: #f51167;
        //responsive
        ${Tablet({ fontSize: '12px' })}
        ${MobilePro({ fontSize: '10px' })}
    }
}
`;
const PiLinks = styled.div`
    position: absolute;
    justify-content: flex-start;
    align-items: flex-end;
    top: 15px;
    right: 20px;
    left: auto;
    height: 100%;
    padding: 0;
    //responsive
    ${MobilePro({  top: '5px',
    right: '10px'
 })}
    a{
        display: table;
        background: #fff;
        border-radius: 60px;
        line-height: 18px;
        padding: 10px;
        margin-bottom: 10px;
        //responsive
        ${MobilePro({
    fontSize: '15px',
    padding: '5px',
    borderRadius: '50%',
    lineHeight: '0px'
})}
        &:hover{
            background: #f51167;
            color: white !important;
        }
    }
`;
const HeartIconon = styled.div`
    background: #fff;
    border-radius: 60px;
    line-height: 18px;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    //responsive
    ${MobilePro({
    fontSize: '15px',
    padding: '5px',
    borderRadius: '50%',
    lineHeight: '0px',
    marginBottom: '5px'

})}
    &:hover{
            background: #f51167;
            color: white !important;
        }
`;
export default SlidersLimited;