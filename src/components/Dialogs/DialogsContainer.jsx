import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();

            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator());
            };

            let onNewMessageChange = (text) => {
                let action = updateNewMessageTextActionCreator(text);
                store.dispatch(action);
            };
            return (
                <Dialogs sendMessage={onSendMessageClick} updateNewMessageText={onNewMessageChange}
                    dialogsPage={state.dialogsPage} />
            )
        }
    }
    </StoreContext.Consumer>

}

export default DialogsContainer;