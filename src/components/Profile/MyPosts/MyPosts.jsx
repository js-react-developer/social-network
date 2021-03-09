import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
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