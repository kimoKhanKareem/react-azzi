import React from 'react'
import styled from 'styled-components';
import { MobilePro } from '../../responsive'


const Ofsally = () => {
    return (
        <OfsallyStyled>
            <AttaPhoto>
                <img className='imgatt' src="img/bg-2.jpg" alt="...img" />
            </AttaPhoto>
            <TextAtta>
                <span>
                    ENJOY AN EXTRA
                </span>
                <h2>
                    60% OFF
                </h2>
                <p>
                    Best Selling Beds
                </p>
            </TextAtta>
        </OfsallyStyled>
    )
}
//styled-components
const OfsallyStyled = styled.section`
position: relative;
padding: 0;
margin: 0;
`;
const AttaPhoto = styled.div`

.imgatt{
    position: relative;
    filter: brightness(0.7);
    background-attachment: fixed;
}
`;
const TextAtta = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
text-align: center;
span{
    ${ MobilePro ({ fontSize: '15px' }) }
}
h2{
    font-size: 70px;
    ${ MobilePro ({ fontSize: '40px' }) }
}
p{
    font-size: 35px;
    ${ MobilePro ({ fontSize: '20px' }) }
}
`;
export default Ofsally
