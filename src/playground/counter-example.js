let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();}

const substractOne = () => {
    count--;
    renderCounterApp();}

const reset = () => {
    count=0;
    renderCounterApp();}

let appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={substractOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();