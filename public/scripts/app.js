'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateless functional component

var IndecesionApp = function (_React$Component) {
    _inherits(IndecesionApp, _React$Component);

    function IndecesionApp(props) {
        _classCallCheck(this, IndecesionApp);

        var _this = _possibleConstructorReturn(this, (IndecesionApp.__proto__ || Object.getPrototypeOf(IndecesionApp)).call(this, props));

        _this.state = {
            options: props.options
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handlePickOption = _this.handlePickOption.bind(_this);
        return _this;
    }

    _createClass(IndecesionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handlePickOption',
        value: function handlePickOption() {
            var l = this.state.options.length;
            var i = Math.floor(Math.random() * l);
            alert(this.state.options[i]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(opt) {
            if (!opt) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(opt) > -1) {
                return 'This option already exists';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat(opt)
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = 'Indecesion';
            var subtitle = 'put your life in the hands of a computer';
            // const options = ['thing one', 'thing two', 'thing three'];
            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    subtitle: subtitle
                }),
                React.createElement(Action, {
                    anOptionExists: this.state.options.length > 0,
                    handlePickOption: this.handlePickOption
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, {
                    handleAddAnOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecesionApp;
}(React.Component);

IndecesionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'Some title'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.anOptionExists, onClick: props.handlePickOption },
            'What should i do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Clear List'
        ),
        props.options.map(function (value, key) {
            return React.createElement(Option, { key: key, text: value });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.text
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddAnOption(option);

            this.setState(function () {
                return {
                    error: error
                };
            });

            e.target.elements.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    { style: { color: 'red' } },
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option', autoComplete: 'off' }),
                    React.createElement('br', null),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var appRoot = document.getElementById('app');
ReactDOM.render(React.createElement(IndecesionApp, { options: ['a', 'b', 'c'] }), appRoot);
