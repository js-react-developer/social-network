import { React } from 'react';
import { Field, reduxForm } from "redux-form";

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your message'} name={'newPostText'} component={'textarea'} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'profileAddPostForm' })(AddPostForm);