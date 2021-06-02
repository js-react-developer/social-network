import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addPost } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

export default compose(
    connect(mapStateToProps, { addPost })
)(MyPosts);