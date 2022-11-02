const React = require('react');
const ReactDOM = require('react-dom');

const HelloUser = (props) => {
    return (
        <div>
            <h3>Hello {props.username}!</h3>
        </div>
    );
};

const init = () => {
    ReactDOM.render(<HelloUser username='User' />, document.getElementById('content'));
};

window.onload = init;