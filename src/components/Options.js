import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                onClick={props.handleDeleteOptions}
                className="button button--link"
            >
                Clear List
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Please add an options to get started.</p> }
        {props.options.map((value, key) => (
            <Option
                key={key}
                text={value}
                count={key + 1}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </div>
);

export default Options;