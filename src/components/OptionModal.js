import React from 'react';

import Modal from 'react-modal';

// const OptionModal = (props) => (
//     <Modal
//         isOpen={false}
//         contentLabel={props.contentLabel}
//     >
//         <h3>Selected Option</h3>
//     </Modal>
// );

class OptionModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        }
    }

    openModal () {
        this.setState({modalIsOpen: true});
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <Modal
                isOpen={this.state.modalIsOpen}
                contentLabel={this.props.contentLabel}
            >
                <h3>the option selected is: {this.props.selectedOption}</h3>
            </Modal>
        );
    }

}



export default OptionModal;