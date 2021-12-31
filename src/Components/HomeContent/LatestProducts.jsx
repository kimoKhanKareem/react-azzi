import React from 'react'
import styled from 'styled-components'
import Textprop from './../Prop/Textprop';
import { Container, Row, Col } from 'react-bootstrap';
import VideoPopup from './Popup/VideoPopup';
import Rightsliders from './Rightsliders';


const LatestProducts = () => {
    return (
        <LatestProductsStyled>
            <Container>
                <Row className="justify-content-center">
                    <Col lg={8} md={8} xs={12}>
                        <div className="title-con">
                            <Textprop title={'LATEST PRODUCTS'} />
                        </div>
                    </Col>
                    <Col lg={6} xs={12}>
                        <PlayLeft>
                            <div className='photo-left'>
                                <img src="img/imge/1138259.jpg" alt="...video" />
                            </div>
                            <PoppVideo>
                                <VideoPopup />
                            </PoppVideo>
                        </PlayLeft>
                    </Col>
                    <Col lg={6} xs={12}>
                        <div>
                            <Rightsliders />
                        </div>
                    </Col>
                </Row>
            </Container>
        </LatestProductsStyled >
    )
}
//styled-components
const LatestProductsStyled = styled.section`
    
`;
const PlayLeft = styled.div`
position: relative;
.photo-left{
    position: relative;
    filter: brightness(0.5);
}
`;
const PoppVideo = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50% , -50%);

`;
export default LatestProducts
