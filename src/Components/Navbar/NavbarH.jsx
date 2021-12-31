import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Tablet } from '../../responsive'
import Search from './Search';
import Cart from './Cart';
import UserAdd from './UserAdd';
import Leftnav from './Leftnav';

const NavbarH = () => {
    return (
        <NavbarStyled>
            <Container>
                <Row className="align-items-center">
                    <Col xs={6} md={6} lg={8}>
                        <Left>
                            {/* nav left hidden Component*/}
                            <Leftnav />
                            {/*End nav left hidden Component*/}
                            <Link to="/"><h2 className="logo">AZZi</h2></Link>
                            <ULcolumn>
                                <li>
                                    <Link  to="/" exact >Home</Link>
                                </li>
                                <li>
                                    <Link to="about">About</Link>
                                </li>
                                <li>
                                    <span className="menuspan">Shop</span>
                                    <ul className="sub-menu">
                                        <li><Link to="/">Sneakers</Link></li>
                                        <li><Link to="/">Sandals</Link></li>
                                        <li><Link to="/">Formal Shoes</Link></li>
                                        <li><Link to="/">Boots</Link></li>
                                        <li><Link to="/">Flip Flops</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="menuspan">Pages</span>
                                    <ul className="sub-menu">
                                        <li><Link to="/">Product Page</Link></li>
                                        <li><Link to="/">Category Page</Link></li>
                                        <li><Link to="/">Cart Page</Link></li>
                                        <li><Link to="/">Checkout Page</Link></li>
                                        <li><Link to="/">Contact Page</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="blog">Blog</Link>
                                </li>
                            </ULcolumn>
                        </Left>
                    </Col>
                    <Col xs={6} md={6} lg={4}>
                        <RightIcon>
                            <RightUl >
                                <li>
                                    <Link to='/' >
                                        {/* Component UserAdd */}
                                        <Search />
                                        {/*End Component UserAdd */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' >
                                        {/* Component UserAdd */}
                                        <UserAdd />
                                        {/*End Component UserAdd */}
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' >
                                        {/* Component Cart */}
                                        <Cart />
                                        {/*End Component Cart */}
                                    </Link>
                                </li>
                            </RightUl>
                        </RightIcon>
                    </Col>
                </Row>
            </Container>
        </NavbarStyled>
    )
}
//styled-components
const NavbarStyled = styled.div`
background-color: #ffffff;
padding: 10px 0;
height: 80px;
display: flex;
align-items: center;
${ Tablet({ height: 'auto'}) }
 `;
const Left = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 `;
/*-----------------------------
        navbar menu center
----------------------------*/
const ULcolumn = styled.ul`
${Tablet({ display: 'none' })}
li{
    margin-left: 30px;
    position: relative; 
        .menuspan{
            position: relative; 
            cursor: pointer;
            &:hover{
                color: #f51167 !important;
            }
        }
        a{
            &:hover{
                color: #f51167 !important;
            }
        }
        .sub-menu{
        position: absolute;
        list-style: none;
        width: 220px;
        left: 0;
        top: 100%;
        padding: 20px 0;
        visibility: hidden;
        opacity: 0;
        flex-direction: column;
        margin-top: 50px;
        background: #fff;
        z-index: 99;
        -webkit-transition: all 0.4s;
        -o-transition: all 0.4s;
        transition: all 0.4s;
        -webkit-box-shadow: 2px 7px 20px rgba(0, 0, 0, 0.05);
        box-shadow: 2px 7px 20px rgba(0, 0, 0, 0.05);
        li{
            padding-top: 7px;
            a{
                &:hover{
                    color: #f51167  !important;
                }
            }
        }
    }
    &:hover .sub-menu{
        visibility: visible;
        opacity: 1;
        margin-top: 0px;
    }
}
`;
const RightIcon = styled.div`
display: flex;
justify-content: flex-end;
`;

const RightUl = styled.ul`
li{
    margin-left: 20px;
    a{
        font-size: 20px;
    }
}
`;
export default NavbarH;