import React from 'react'
import styled from 'styled-components'
// import { Container, Row, Col } from 'react-bootstrap';

const Textprop = ({ title, parag }) => {
    return (
        <TextpropStyled>
            <h2>
                {title}
            </h2>
            <p>
                {parag}
            </p>
        </TextpropStyled>
    )
}
//styled-components
const TextpropStyled = styled.div`

`;
export default Textprop;
