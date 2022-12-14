import {FooterContainer, FooterContent, FooterText, FooterCopyright, LinksContainer}
from '../styles/footer-style'
import {Logo, Links} from './reusable'
import React from 'react'
function Footer(){
    return (
        <FooterContainer>
            <FooterContent>
                <FooterText>
                    <h1>MTL Shop</h1>
                    <div>MTL Shop, all rights reserved</div>
                </FooterText>
                <Logo height='60px' width='100px'/>
                <LinksContainer>
                    <Links/>
                </LinksContainer>
            </FooterContent>
            <FooterCopyright>2022 IoT &copy; pls steal, you are welcome</FooterCopyright>
        </FooterContainer>

    );

}
export default Footer