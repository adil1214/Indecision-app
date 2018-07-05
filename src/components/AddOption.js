import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        let error = this.props.handleAddAnOption(option);

        this.setState(() => ({ error: error }));

        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" autoComplete="off" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}