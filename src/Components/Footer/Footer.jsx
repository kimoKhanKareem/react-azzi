import React from 'react'
import styled from 'styled-components'
import { SectionStyled } from '../../Layouts'
import Azzi from './Azzi';
import Social from './Social';


const Footer = () => {
    return (
        <FooterStyled>
                <h2>
                    AZZi
                </h2>

            <SectionStyled>
                <Azzi />
            </SectionStyled>
            <Social />
        </FooterStyled>
    )
}
//styled-components
const FooterStyled = styled.section`
background: #282828;
color: #afafaf !important;
    h4{

        text-align: center;
        color: white;
    }
    h2{
        text-align: center;
        color: white;
        font-size: 50px;
        padding-top: 30px;
    }
`;
export default Footer
