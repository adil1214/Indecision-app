// stateless functional component

class IndecesionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(opt)
            };
        });
    }

    render() {
        const title = 'Indecesion';
        const subtitle = 'put your life in the hands of a computer';
        // const options = ['thing one', 'thing two', 'thing three'];
        return (
            <div>
                <Header
                    title={title}
                    subtitle={subtitle}
                />
                <Action
                    anOptionExists={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddAnOption={this.handleAddOption}
                />
            </div>
        );
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button disabled={!props.anOptionExists} onClick={props.handlePickOption} >What should i do?</button>
        </div>
    );
};


const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Clear List</button>
            {props.options.map((value, key) => <Option key={key} text={value} />)}
        </div>
    )
}

const Option = (props) => {
        return (
            <div>
                {props.text}
            </div>
        );
};

class AddOption extends React.Component {
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

        this.setState(() => {
            return { 
                error: error
            };
        })

        e.target.elements.option.value = '';
    }

    render() {
        return (
            <div>
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" autoComplete="off" />
                    <br />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

let appRoot = document.getElementById('app');
ReactDOM.render(<IndecesionApp />, appRoot);
