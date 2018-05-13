'use strict';

var appRoot = document.getElementById('app');

var data = {
    hiddenText: 'hey these are now some details you can see now.',
    status: true
};

var statusToggle = function statusToggle(e) {
    data.status = !data.status;

    // console.log(data.status);
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'visibility toggle'
        ),
        React.createElement(
            'button',
            { onClick: statusToggle },
            data.status ? 'Hide data' : 'Show data'
        ),
        React.createElement('br', null),
        data.status && React.createElement(
            'p',
            null,
            data.hiddenText
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
