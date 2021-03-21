let rerenderEntireTree = (state) => {
    console.log('State changed');
}

let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

window.state = state;

export default state;