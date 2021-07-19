import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img alt='avatar' src='https://uploads.scratch.mit.edu/users/avatars/50853348.png' />
            { props.message }
            <div>
                { props.likesCount } <span>likes</span>
            </div>
        </div>
    );
}

export default Post;