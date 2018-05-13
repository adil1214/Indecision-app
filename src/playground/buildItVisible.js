let appRoot = document.getElementById('app');

const data = {
    hiddenText: 'hey these are now some details you can see now.',
    status: true
};

let statusToggle = (e) => {
    data.status = !data.status;
        
    // console.log(data.status);
    render();
};


let render = () => {
    let template = (
        <div>
            <h1>visibility toggle</h1>
            <button onClick={statusToggle}>{data.status ? 'Hide data' : 'Show data'}</button>
            <br/>
            { data.status && <p>{data.hiddenText}</p>}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

render();