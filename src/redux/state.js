let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "It's my first message", likesCount: 10 },
                { id: 2, message: "It's my second message", likesCount: 20 },
                { id: 3, message: "It's my third message", likesCount: 30 },
                { id: 4, message: "It's my fourth message", likesCount: 40 }
            ],
            newPostText: 'hi'
        },
    
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Slava' },
                { id: 2, name: 'Dimych' },
                { id: 3, name: 'Andrey' },
                { id: 4, name: 'Valera' },
                { id: 5, name: 'Sveta' },
                { id: 6, name: 'Pasha' },
            ],
    
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'I am fine. How are yo?' },
                { id: 4, message: 'I am good' }
            ],
    
            newMessageText: 'message'
        },
    
        sidebar: {
            friends: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Valera' }
            ]
        }
    },
    _callSubscriber(state) {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    }
}
window.store = store;

export default store;