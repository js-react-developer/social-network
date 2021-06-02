const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            };
            
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };
        }
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })
    
export default dialogsReducer;