const React = require('react');
const ReactDOM = require('react-dom');

const rootModule = require('./component/root');

ReactDOM.render(
    <rootModule.Root />,
    $("#root")[0]
);