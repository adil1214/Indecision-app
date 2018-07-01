import React from 'react';
import ReactDOM from 'react-dom';
import IndecesionApp from './components/IndecesionApp'

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
                {props.children}        // 
            <p>footer</p>
        </div>
    );
};

const template = (
    <div>
        <h1>Page Title</h1>
        <p>this is my page</p>
    </div>
)

let appRoot = document.getElementById('app');

ReactDOM.render((
        <Layout>
            <p>this is inline</p>
        </Layout>
    ), appRoot);
