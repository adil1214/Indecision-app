import React from 'react';

const Option = (props) => {
    return (
        <div>
            {props.text}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.text)
                }}
            >
                remove
            </button>
        </div>
    );
};

export default Option;