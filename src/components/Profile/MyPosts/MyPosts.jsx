import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={s.posts}>
                <Post message="It's my first message" likecounts="10" />
                <Post message="It's my second message" likecounts="20"/>
                <Post message="It's my third message" likecounts="30"/>
                <Post message="It's my fourth message" likecounts="40"/>
            </div>
        </div>
    );
}

export default MyPosts;