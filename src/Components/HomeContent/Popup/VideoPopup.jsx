import { useState } from 'react'
import styled from 'styled-components'
import { AiFillPlayCircle } from 'react-icons/ai'
import { Modal } from 'react-bootstrap';


const VideoPopup = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <VideoPopupStyled>
            <button onClick={handleShow}>
                <AiFillPlayCircle style={{ fontSize: '70px' }} />
            </button>
            <ModModel show={show} onHide={handleClose}
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <video width="100%" height="100%" controls autoplay>
                        <source src="img/imge/video/DakotaJohnson.mp4" type="video/mp4" />
                    </video>
                </Modal.Body>
            </ModModel>
        </VideoPopupStyled>
    )
}
//styled-components
const VideoPopupStyled = styled.div`
button{
    background-color: transparent;
    border: 0;
    color: #ffffff73;
    transition: all 0.4s;
    &:hover{
        color: #f51167;
    }
}
`;
const ModModel = styled(Modal)`
    .modal-content{
    background-color: transparent !important;
    border: 0;
    .modal-body{
            padding: 0 !important;
        }
    .modal-header{
        border: none;
        position: relative;
        z-index: 3;
        color: #f51167;
        bottom: -47px;
        right: -6px;
    }
}
`;
export default VideoPopup
