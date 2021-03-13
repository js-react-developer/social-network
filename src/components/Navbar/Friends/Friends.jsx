import React from 'react';
import Friend from './Friend/Friend';
import s from './Friends.module.css'

const Friends = (props) => {

    let friendsElements = props.friends.map(f => <Friend name={f.name} />);

    return (
        <div>
            <div className={s.headline}>
                Friends
            </div>
            <div className={s.items}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friends;