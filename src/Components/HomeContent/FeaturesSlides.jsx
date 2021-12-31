import React from 'react'
import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';



const FeaturesSlides = () => {
    return (
        <FeaturesStyled>
            <Container fluid>
                <Row>
                    <Col lg={4} md={4} xs={12}>
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img src="img/icons/1.png" alt="icon..." />
                            </div>
                            <h3>
                                Fast Secure Payments
                            </h3>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xs={12}>
                        <div className="feature-inner color">
                            <div className="feature-icon">
                                <img src="img/icons/2.png" alt="icon..." />
                            </div>
                            <h3>
                                Fast Secure Payments
                            </h3>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xs={12}>
                        <div className="feature-inner">
                            <div className="feature-icon">
                                <img src="img/icons/3.png" alt="icon..." />
                            </div>
                            <h3>
                                Fast Secure Payments
                            </h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </FeaturesStyled>
    )
}
//styled components
const FeaturesStyled = styled.div`
    background: #f8f8f8;
.feature-inner{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    .feature-icon{
    margin-right: 15px;
}
}
.color{
background: #f51167;
}

`;

export default FeaturesSlides
