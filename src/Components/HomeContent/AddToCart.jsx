import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const AddToCart = () => {
    const [selley, setSellery] = useState([]);
    useEffect(() => {
        axios.get('data/data.json').then(res => { setSellery(res.data.sallery) })
    }, [])
    const Ressallery = selley.map((selleyItem) => {
        return (
            <Col lg={3} xs={6} key={selleyItem.id} className='mb-4' style={{overflow: 'hidden'}}>
                <ParentCart>
                    <Boxcart>
                        <Images src={selleyItem.image} alt="..img" />
                        <ButtonCart className='kimo'>
                            Add To Cart
                        </ButtonCart>
                    </Boxcart>
                </ParentCart>
            </Col>

        );
    })

    return (
        <AddToCartStyled>
            <Container>
                <Row className='justify-content-center'>
                    {Ressallery}
                </Row>
            </Container>
        </AddToCartStyled>
    )
}
//styled-components
const AddToCartStyled = styled.div`

`;
const ParentCart = styled.div`
position: relative;
`;
const Boxcart = styled.div`
 &:hover button {
    visibility: visible;
    bottom: 0px;
    transition: all 0.9s;
    opacity: 1;

  }
`;

const Images = styled.img`
position: relative;
`;
const ButtonCart = styled.button`
width: 100%;
visibility: hidden;
position: absolute;
bottom: -40px;
left: 0;
border-radius: 0;
background: #000000;
border: none;
color: #ffffff;
padding: 10px 0;
transition: all .9s;
opacity: 0;

`;
export default AddToCart
