import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Tablet } from '../../responsive'


const Azzi = () => {
    return (
        <AzziStyled>
            <Container>
                <Row>
                    <Col lg={3}>
                        <AboutSe>
                            <h4>
                                ABOUT
                            </h4>
                            <p>
                                Donec vitae purus nunc. Morbi faucibus erat sit amet congue mattis. Nullam frin-gilla faucibus urna, id dapibus erat iaculis ut. Integer ac sem.
                            </p>
                            <img src="img/cards.png" alt="..img" />
                        </AboutSe>
                    </Col>
                    <Col lg={3}>
                        <Questions>
                            <h4>
                                QUESTIONS
                            </h4>
                            <ListU>
                                <li><Link to="/">Product Page</Link></li>
                                <li><Link to="/">Category Page</Link></li>
                                <li><Link to="/">Cart Page</Link></li>
                                <li><Link to="/">Checkout Page</Link></li>
                                <li><Link to="/">Contact Page</Link></li>
                            </ListU>
                        </Questions>
                    </Col>
                    <Col lg={3}>
                        <Widget>
                            <h4>QUESTIONS</h4>
                            <div class="latest-post">
                                <div class="item-ip">
                                    <img src="img/blog-thumbs/1.jpg" alt='...img' />
                                    <div class="content-ip">
                                        <h6>what shoes to wear</h6>
                                        <span>Oct 21, 2018</span>
                                    </div>
                                </div>
                                <div class="item-ip">
                                    <img src="img/blog-thumbs/2.jpg" alt='...img' />
                                    <div class="content-ip">
                                        <h6>trends this year</h6>
                                        <span>Oct 21, 2018</span>
                                    </div>
                                </div>
                            </div>
                        </Widget>
                    </Col>
                    <Col lg={3}>
                        <RightQu>
                            <FooterRight>
                                <h4>QUESTIONS</h4>
                                <div class="con-info">
                                    <span>C.</span>
                                    <p>Your Company Ltd </p>
                                </div>
                                <div class="con-info">
                                    <span>B.</span>
                                    <p>1481 Creekside Lane  Avila Beach, CA 93424, P.O. BOX 68 </p>
                                </div>
                                <div class="con-info">
                                    <span>T.</span>
                                    <p>+53 345 7953 32453</p>
                                </div>
                                <div class="con-info">
                                    <span>E.</span>
                                    <p>office@youremail.com</p>
                                </div>
                            </FooterRight>
                        </RightQu>
                    </Col>
                </Row>
            </Container>
        </AzziStyled>
    )
}
//styled-components
const AzziStyled = styled.div`
h4{
    margin-bottom: 30px;
}
p{
    color: #585858;
    font-size: 16px;
}
h6,span{
    color: #585858;
}
`;
const AboutSe = styled.div`
${ Tablet ({padding: '15px 0'})}
img{
    width: 150px;
    cursor: pointer;
    ${ Tablet ({width: '250px'})}

}
`;
const Questions = styled.div`
${ Tablet ({padding: '15px 0'})}
`;
const ListU = styled.ul`
flex-direction: column;
li{
    &:hover a:before {
    width: 7px;
    height: 7px;
    top: 6px;
    background: #ec105a;
    }
}
a{
    display: inline-block;
    position: relative;
    padding-left: 20px;
    font-size: 16px;
    color: #585858 !important; 
    margin-bottom: 6px;
    &:before {
    content: "";
    position: absolute;
    content: "";
    width: 5px;
    height: 5px;
    left: 0;
    top: 8px;
    border: 1px solid #ec105a;
    border-radius: 50%;
    transition: all 0.2s;
  }
}
`;
const Widget = styled.div`
.latest-post{
    .item-ip{
        margin-bottom: 30px;
        display: flex;
        align-items: center;
    img{
            width: 70px;
            margin-right: 20px;
        }
    }
}
`;
const RightQu = styled.div`

`;
const FooterRight = styled.div`
h4{
}
.con-info{
    display: flex;
    span{
    color: #f51167 !important;
    margin-right: 15px;
    overflow: hidden;
}
    p{
        font-size: 14px;
        color: #585858;
        line-height: 1.6;
    }
}
`;
export default Azzi
