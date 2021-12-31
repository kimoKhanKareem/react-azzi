import { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Tablet } from '../../responsive'




const Leftnav = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [isOpen, setisOpen] = useState(false)
    const [isOpenup, setisOpenUp] = useState(false)

    return (
        <HiddenNav>
            <button variant="primary" onClick={handleShow}>
                <GiHamburgerMenu />
            </button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="m-auto"><AzziLogo>AZZi</AzziLogo></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ConvasUl>
                        <li>
                            <Link to="/" exact >Home</Link>
                        </li>
                        <li>
                            <Link to="about">About</Link>
                        </li>
                        <li>
                            <div className="boxPages" onClick={() => setisOpen(!isOpen)}>
                                <span className="" >Shop</span>
                                <span><FaCaretDown /></span>
                            </div>
                            <ul className={isOpen ? 'menuPages show' : 'menuPages'}>
                                <li><Link to="/">Sneakers</Link></li>
                                <li><Link to="/">Sandals</Link></li>
                                <li><Link to="/">Formal Shoes</Link></li>
                                <li><Link to="/">Boots</Link></li>
                                <li><Link to="/">Flip Flops</Link></li>
                            </ul>
                        </li>
                        <li>
                            <div className="boxPages" onClick={() => setisOpenUp(!isOpenup)}>
                                <span className="" >Page</span>
                                <span><FaCaretDown /></span>
                            </div>
                            <ul className={isOpenup ? 'menuPages show' : 'menuPages'}>
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
                    </ConvasUl>
                </Offcanvas.Body>
            </Offcanvas>
        </HiddenNav>
    )
}
//styled-components
/*---------------------------------
    convas nav show right (navbar)
------------------------------*/
const HiddenNav = styled.div`
display: none;
${Tablet({ display: 'block' })}
button{
    background: transparent;
    border: none;
}
`;
const AzziLogo = styled.h2`
    font-size: 40px;
    font-weight: 600;
`;
const ConvasUl = styled.ul`
flex-direction: column;
li{
    margin-top: 25px !important;
    .boxPages{
        display: flex;
        justify-content: space-between;
        span{
        font-size: 24px !important;
        }
    }
    a{
        font-size: 24px !important;
    }
    .menuPages{
        flex-direction: column !important;
        height: 0;
        overflow: hidden;
        transition: height ease-in-out 0.4s !important;
    }
    .show{
        height: 180px;
    }
}
`;
export default Leftnav;