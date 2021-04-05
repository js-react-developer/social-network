const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl: 'https://pbs.twimg.com/profile_images/1105124188476579840/vAo_ZPMt_400x400.jpg', followed: true, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'} },
        {id: 2, photoUrl: 'https://pbs.twimg.com/profile_images/1105124188476579840/vAo_ZPMt_400x400.jpg', followed: false, fullName: 'Alexander', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'} },
        {id: 3, photoUrl: 'https://pbs.twimg.com/profile_images/1105124188476579840/vAo_ZPMt_400x400.jpg', followed: true, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'} },
        {id: 4, photoUrl: 'https://pbs.twimg.com/profile_images/1105124188476579840/vAo_ZPMt_400x400.jpg', followed: false, fullName: 'Yana', status: 'I am a boss too', location: {city: 'Warszawa', country: 'Poland'} }
    ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) { 
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) { 
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;