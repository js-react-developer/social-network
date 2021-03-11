import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.mainBackground}>
                <img src='https://natworld.info/wp-content/uploads/2020/04/poberezhe-morya-1026x500.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;