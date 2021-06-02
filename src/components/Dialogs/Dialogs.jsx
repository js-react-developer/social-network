import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css'
import AddMessageForm from './AddMessageForm/AddMessageForm';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} />);

    let addNewMessage = (formData) => {
        props.sendMessage(formData.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}

export default Dialogs;