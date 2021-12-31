import { useState } from 'react'
import styled from 'styled-components';
import { FiUser } from 'react-icons/fi'
import { Offcanvas, Form, Button } from 'react-bootstrap';



const UserAdd = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <UserStyled >
            <button variant="primary" onClick={handleShow} className="m-auto">
                <FiUser />
            </button>
            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="m-auto">Sign in</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="username" placeholder="user name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                        <DiButton>
                            <Button variant="primary" type="submit">
                                Sign in
                            </Button>
                            <Button variant="primary" type="submit" style={{backgroundColor: 'transparent', color: 'black', border: '1px solid #6c757d'}} >
                                Create An Account
                            </Button>
                        </DiButton>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>

        </UserStyled>
    )
}
//styled-components
const UserStyled = styled.section`
    button{
        background: transparent;
        border: none;
    }
`;
const DiButton = styled.div`
button{
    display: block;
    width: 100%;
    margin-top: 10px;
    outline-style: 0;
    background-color: #6c757d;
    border: none;
}
`;
export default UserAdd;
