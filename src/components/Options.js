import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <button onClick={props.handleDeleteOptions}>Clear List</button>
        {props.options.length === 0 && <p>Please add an options to get started.</p> }
        {props.options.map((value, key) => (
            <Option
                key={key}
                text={value}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </div>
);

export default Options;