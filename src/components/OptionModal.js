import React from 'react';

import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={false}
        contentLabel="Selected Option :D"
    >
        <h3>Selected Option</h3>
    </Modal>
);


export default OptionModal;