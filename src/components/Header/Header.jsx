import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://p1.hiclipart.com/preview/191/668/38/170-dock-icons-blue-two-faces-logo.jpg' />
            <div className={s.loginBlock}>
                { props.isAuth ? props.login : <NavLink to='/login'>Login</NavLink> }
            </div>

        </header>
    );
}

export default Header;