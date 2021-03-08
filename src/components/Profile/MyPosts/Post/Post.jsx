import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='http://archilab.online/images/1/123.jpg' />
            { props.message }
            <div>
                { props.likecounts }
            </div>
        </div>
    );
}

export default Post;