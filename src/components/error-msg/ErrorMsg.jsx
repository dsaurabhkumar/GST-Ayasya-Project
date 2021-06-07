import React from 'react';
import '../error-msg/ErrorMsg.css';

function ErrorMsg(props) {
    return (
        <div className='emsg'>
            {props.children}
        </div>
    )
}
export default ErrorMsg 