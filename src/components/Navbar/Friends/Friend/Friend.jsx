import React from 'react';
import s from './Friend.module.css'

const Friend = (props) => {
    return (
        <div className={s.item}>
            <img src='https://media.education-ecosystem.com/user_pics/17/01/image_2CxfxgN.png' />
            <div>{props.name}</div>
        </div>
    );
}

export default Friend;