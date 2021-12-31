import { useState } from 'react'
import styled from 'styled-components';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Offcanvas, Button } from 'react-bootstrap';




const Cart = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <CartStyled>
            <button variant="primary" onClick={handleShow} className="m-auto">
                <RiShoppingCartLine />
            </button>
            <Offcanvas placement="end" show={show} onHide={handleClose}  style={{textAlign: 'center'}}>
                <Offcanvas.Header  closeButton  style={{  }} >
                    <Offcanvas.Title className="m-auto"> Your Cart (0) </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Textbody>
                    <h4>Your cart is empty</h4>
                    <Button variant="outline-secondary" style={{ width: '100%', borderRadius: '0'}} >Continue Shopping</Button>
                    </Textbody>
                </Offcanvas.Body>
            </Offcanvas>
        </CartStyled>
    )
}
//styled
const CartStyled = styled.section`
    button{
        background: transparent;
        border: none;
    }
`;
const Textbody = styled.div`
padding: 15% 0;
h4{
    padding-bottom:  5%;
}
`;
export default Cart
