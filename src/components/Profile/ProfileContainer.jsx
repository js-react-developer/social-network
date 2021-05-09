import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, getUser } from '../../redux/profileReducer'
import { withRouter } from 'react-router';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUser(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithDataUrlContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getUser })(WithDataUrlContainerComponent);