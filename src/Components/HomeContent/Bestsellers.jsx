import React from 'react'
import styled from 'styled-components';
import Textprop from './../Prop/Textprop';
import AddToCart from './AddToCart';
import {SectionStyled} from '../../Layouts'

const Bestsellers = () => {
    return (
        <BestsellersStyled>
            <div className="title-con">
                <Textprop title={'Best Sellers'} />
            </div>
            {/* Add TO Cart */}
            <SectionStyled>
                <AddToCart />
            </SectionStyled>
        </BestsellersStyled>
    )
}
//styled-components
const BestsellersStyled = styled.section`

`;
export default Bestsellers
