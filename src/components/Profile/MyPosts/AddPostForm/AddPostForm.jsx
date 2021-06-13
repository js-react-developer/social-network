import { React } from 'react';
import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from './../../../../utils/Validators/Validators';
import { Textarea } from './../../../common/FormsControls/FormsControls';

const maxLength15 = maxLengthCreator(15);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} name={'newPostText'}
                       validate={[required, maxLength15]} component={Textarea}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'profileAddPostForm' })(AddPostForm);