import React from 'react';

import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.optionSelected}
        contentLabel="Selected Option :D"
        shouldCloseOnOverlayClick={true}
        onRequestClose={props.handleClearSelectedOption}
    >
        <h3>Selected option</h3>
        {props.optionSelected && <p>{props.optionSelected}</p> }
        <button 
            onClick={props.handleClearSelectedOption}
        >
            Okay
        </button>
    </Modal>
);


export default OptionModal;