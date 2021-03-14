import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "It's my first message", likesCount: 10 },
            { id: 2, message: "It's my second message", likesCount: 20 },
            { id: 3, message: "It's my third message", likesCount: 30 },
            { id: 4, message: "It's my fourth message", likesCount: 40 }
        ]
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
        ]
    },

    sidebar: {
        friends: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Valera' }
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;