import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/slava' activeClassName={s.active}>Slava</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/dimych' activeClassName={s.active}>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/andrey' activeClassName={s.active}>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/valera' activeClassName={s.active}>Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/sveta' activeClassName={s.active}>Sveta</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>I'm fine. How are yo?</div>
                <div className={s.message}>I'm good.</div>
            </div>
        </div>
    );
}

export default Dialogs;