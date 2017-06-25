const React = require('react');

const navModule = require('./navigation');
const contModule = require('./container');
const footerModule = require('./footer');

//全局refs
window.refs = [];

class Root extends React.Component {
    render() {
        return (
            <div>
                <navModule.Navigation />
                <contModule.Container />
                <footerModule.Footer />
            </div>
        )
    }
}

module.exports = {Root};
