import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.mainBackground}>
                <img src='https://krot.info/uploads/posts/2021-01/1610169923_10-p-fon-otdikh-51.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;