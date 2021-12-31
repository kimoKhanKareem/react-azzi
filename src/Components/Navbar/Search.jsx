import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai';
import { Form, Offcanvas } from 'react-bootstrap';


const Search = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <SearchStyled >
            <button variant="primary" onClick={handleShow} className="m-auto">
                <AiOutlineSearch />
            </button>
            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="m-auto">Search Products </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Bodysearch>
                        <Form.Select aria-label="Default select example" 
                        style={{
                            color: '#757575', 
                            outline: 'none', 
                            }} >
                            <option>All Categories</option>
                            <option value="1">Bedroom</option>
                            <option value="2">Beds</option>
                            <option value="3">Three</option>
                            <option value="4">Three</option>
                            <option value="5">Three</option>
                            <option value="6">Three</option>
                            <option value="7">Three</option>
                            <option value="8">Three</option>
                            <option value="9">Three</option>
                        </Form.Select>
                        <Searchinput >
                            <input type="search" placeholder='Search'/>
                            <div className="iconsearch">
                                <AiOutlineSearch style={{color: '#757575'}} />  
                            </div>
                        </Searchinput>
                    </Bodysearch>
                </Offcanvas.Body>
            </Offcanvas>
        </SearchStyled>
    )
}
//styled components
const SearchStyled = styled.section`
width: 100%;
button{
    background: transparent;
    border: none;
}
`;
const Bodysearch = styled.div`
padding-top: 7%;
`;
const Searchinput = styled.div`
position: relative;
margin-top: 25px;
input{
    position: relative;
    width: 100%;
    height: 40px;
    border: 1px solid #ced4da;
    padding-left: 10px;
    outline: 0;
    }
    .iconsearch{
        position: absolute;
        display: flex;
        right: 0;
        top: 0;
        transform: translateY(50%);
        padding:0px 10px;
    }
`;
export default Search;