console.log('app.js is running');

let appRoot = document.getElementById('app');

const app = {
    title: 'Indecesion app',
    subtitle: 'Put your life on the hand of your brain',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

const onRemoveAll = (e) => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor( Math.random() * app.options.length );
    alert(app.options[randomNum]);
};


const render = () => {
    let template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Clear List</button>
            <ol>
                {app.options.map((val, index) => <li key={index}>{val}</li>)}
            </ol>
            {/* <ol>
                <li>item one</li>
                <li>item two</li>
            </ol> */}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <br/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();
