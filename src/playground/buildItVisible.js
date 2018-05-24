class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisiblity = this.handleToggleVisiblity.bind(this);
        this.state = {
            visible: false
        };
    }

    handleToggleVisiblity() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisiblity}>{this.state.visible? 'hide data':'show data'}</button>
                {this.state.visible && <p>the secret is now visible, you may pass :)</p> }
            </div>
        );
    }
}


ReactDOM.render(<Toggler />, document.getElementById('app'));

//==========================================================================================

// let appRoot = document.getElementById('app');

// const data = {
//     hiddenText: 'hey these are now some details you can see now.',
//     status: true
// };

// let statusToggle = (e) => {
//     data.status = !data.status;
        
//     // console.log(data.status);
//     render();
// };


// let render = () => {
//     let template = (
//         <div>
//             <h1>visibility toggle</h1>
//             <button onClick={statusToggle}>{data.status ? 'Hide data' : 'Show data'}</button>
//             <br/>
//             { data.status && <p>{data.hiddenText}</p>}
//         </div>
//     );
    
//     ReactDOM.render(template, appRoot);
// };

// render();