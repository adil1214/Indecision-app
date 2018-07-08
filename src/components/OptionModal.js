import React from 'react';

import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.optionSelected}
        contentLabel="Selected Option"
        shouldCloseOnOverlayClick={true}
        onRequestClose={props.handleClearSelectedOption}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title" >Selected option</h3>
        {props.optionSelected && <p className="modal__body">{props.optionSelected}</p> }
        <button
            className="button"
            onClick={props.handleClearSelectedOption}
        >
            Okay
        </button>
    </Modal>
);


export default OptionModal;