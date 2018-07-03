import React from 'react';

const Action = (props) => (
    <div>
        <button disabled={!props.anOptionExists} onClick={props.handlePickOption} >What should i do?</button>
    </div>
);

export default Action;