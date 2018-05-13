'use strict';

console.log('app.js is running');

var appRoot = document.getElementById('app');

var app = {
    title: 'Indecesion app',
    subtitle: 'Put your life on the hand of your brain',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    render();
};

var onRemoveAll = function onRemoveAll(e) {
    app.options = [];
    render();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomNum]);
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should i do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Clear List'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (val, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    val
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement('br', null),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
