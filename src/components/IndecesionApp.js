import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecesionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);

        this.state = {
            options: props.options
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const optionsArray = JSON.parse(json);
            if (optionsArray) {
                this.setState(() => ({
                    options: optionsArray
                }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('componentDidUpdate!', prevState.options, '=>', this.state.options);
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!');
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter(opt => opt !== option)
        }));
    }

    handlePickOption() {
        const l = this.state.options.length;
        const i = Math.floor(Math.random() * l);
        alert(this.state.options[i])
    }

    handleAddOption(opt) {
        if (!opt) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(opt) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(opt) }));
    }

    render() {
        const title = 'Indecesion';
        const subtitle = 'put your life in the hands of a computer';

        return (
            <div>
                <Header
                    subtitle={subtitle}
                />
                <Action
                    anOptionExists={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddAnOption={this.handleAddOption}
                />
            </div>
        );
    }
}

IndecesionApp.defaultProps = {
    options: []
};