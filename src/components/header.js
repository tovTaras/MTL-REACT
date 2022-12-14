import { Logo } from './reusable';
import {
    HeaderNavButtonStyle, HeaderWrapper,
    SignOutStyle, HeaderNav
}
    from '../styles/header-style';
import { useDispatch } from 'react-redux';
import { signedOut } from '../store/actions/actions.js';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import React from 'react'

function HeaderNavButton({ name, to }) {
    return (
        <Link to={to}>
            <HeaderNavButtonStyle>
                {name}
            </HeaderNavButtonStyle>
        </Link>
    );
}

function Header() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = () => {
        localStorage.clear();
        dispatch(signedOut());
        navigate('/login');
    }

    return (
        <HeaderWrapper>
            <Logo height='40px' width='80px' />
            <HeaderNav>
                <HeaderNavButton name='Home' to='/' />
                <HeaderNavButton name='Catalog' to='/catalog' />
                <HeaderNavButton name='Cart' to='/cart' />
            </HeaderNav>
            <SignOutStyle onClick={() => signOut()}>Sign Out</SignOutStyle>
        </HeaderWrapper>
    );
}
export default Header;