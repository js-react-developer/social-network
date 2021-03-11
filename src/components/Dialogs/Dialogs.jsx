import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Slava' id='1' />
                <DialogItem name='Dimych' id='2' />
                <DialogItem name='Andrey' id='3' />
                <DialogItem name='Valera' id='4' />
                <DialogItem name='Sveta' id='5' />
                <DialogItem name='Pasha' id='6' />
            </div>
            <div className={s.messages}>
                <Message message='Hi' />
                <Message message='How are you?' />
                <Message message='I am fine. How are yo?' />
                <Message message='I am good' />
            </div>
        </div>
    );
}

export default Dialogs;