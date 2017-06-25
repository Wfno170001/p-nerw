const React = require('react');
const ReactDOM = require('react-dom');

const pageHandler = require('./../handler/pagehandler');

function Link(props) {
    return <p className="navbar-link">{props.text}</p>;
}

class Footer extends React.Component {

    componentDidMount() {
        window.refs = $.extend(window.refs, this.refs);
        //调整页面高度
        pageHandler.pageAdapt(ReactDOM.findDOMNode(this.refs.footer));
    }

    render() {
        return (
            <div className="navbar-inverse" style={{padding: '20px 0'}} ref="footer">
                <div className="container">
                    <div className="text-left">
                        <Link text="email - 472919994@qq.com"/>
                        <Link text="address - https://github.com/Wfno170001/p-nerwhttps://github.com/Wfno170001/p-nerw"/>
                    </div>
                </div>
            </div>
        );
    };
}

module.exports = {Footer};
