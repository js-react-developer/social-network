import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="It's my first message" likesCount="10" />
                <Post message="It's my second message" likesCount="20"/>
                <Post message="It's my third message" likesCount="30"/>
                <Post message="It's my fourth message" likesCount="40"/>
            </div>
        </div>
    );
}

export default MyPosts;