import React from 'react';

const Option = (props) => (
    <div>
        {props.text}
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.text)
            }}
        >
            remove
        </button>
    </div>
);

export default Option;