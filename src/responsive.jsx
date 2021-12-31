import {css} from "styled-components"


export const Mobile = (props)=>{
    return css`
        @media (max-width: 375px){
            ${props}
        }
    `;
}
export const MobilePro = (props)=>{
    return css`
    @media (max-width: 414px){
        ${props}
    }
    `;
}
export const Tablet = (props)=>{
    return css`
    @media (max-width: 768px){
        ${props}
    }
    `;
}
export const Desktop = (props)=>{
    return css`
    @media(max-with: 1024px){
        ${props}
    }
    `;
}