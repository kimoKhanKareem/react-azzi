import React from 'react'
import Slides from '../Components/HomeContent/Slides'
import styled from 'styled-components'
import FeaturesSlides from './../Components/HomeContent/FeaturesSlides'
import Limited from './../Components/HomeContent/Limited';
import LatestProducts from './../Components/HomeContent/LatestProducts';
import Ofsally from './../Components/HomeContent/Ofsally';
import {SectionStyled} from '../Layouts'
import Bestsellers from './../Components/HomeContent/Bestsellers';


const Home = () => {
    return (
        <HomeStyled >
           <Slides />
           <FeaturesSlides />
           <Limited />
           <LatestProducts />
           <SectionStyled>
            <Ofsally />
           </SectionStyled>
           <Bestsellers />
        </HomeStyled>
    )
}
const HomeStyled = styled.section`

`;
export default Home
