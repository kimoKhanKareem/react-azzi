import React from 'react'
import { Container } from 'react-bootstrap';
import styled from 'styled-components'
import { BsInstagram } from 'react-icons/bs';
import { ImPinterest2 } from 'react-icons/im'
import { FaFacebookF, FaTwitter, FaTumblrSquare } from 'react-icons/fa'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { Tablet } from '../../responsive'


const Social = () => {
    return (
        <SocialStyled>
            <Container>
                <SocialLinks>
                    <a href='https://www.instagram.com/'>
                        <BsInstagram  style={{fontSize: '20px'}}/>
                        <p>
                            Instagram
                        </p>
                    </a>
                    <a href='https://www.pinterest.com/'>
                        <ImPinterest2  style={{fontSize: '20px'}}/>
                        <p>
                            PINTEREST
                        </p>
                    </a>
                    <a href='https://www.facebook.com/'>
                        <FaFacebookF  style={{fontSize: '20px'}}/>
                        <p>
                            FACEBOOK
                        </p>
                    </a>
                    <a href='https://twitter.com/?lang=en'>
                        <FaTwitter  style={{fontSize: '20px'}}/>
                        <p>
                            TWITTER
                        </p>
                    </a>
                    <a href='https://www.youtube.com/'>
                        <TiSocialYoutubeCircular  style={{fontSize: '20px'}}/>
                        <p>
                            YOUTUBE
                        </p>
                    </a>
                    <a href='https://www.tumblr.com/login'>
                        <FaTumblrSquare  style={{fontSize: '20px'}}/>
                        <p>
                            TUMBLR
                        </p>
                    </a>
                </SocialLinks>
            </Container>
        </SocialStyled>
    )
}
//styled-components
const SocialStyled = styled.div`
border-top: 1px solid white;
padding: 5% 0;
`;
const SocialLinks = styled.div`
display: flex;
justify-content: center;
a{
    color: #d7d7d7 !important;
    display: flex;
    height: 100%;
    align-items: center;
    padding-right: 5%;
    &:hover {
            color: #ff1b0b !important;
        }
    &:hover p{
        color: white;
    }
    p{
        margin: 0;
        margin-left: 10px;
        ${ Tablet ({ display: 'none' })}
        font-size: 14px; 
    }
}
`;
export default Social
