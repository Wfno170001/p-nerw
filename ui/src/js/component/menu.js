const React = require('react');

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {active: 1};
    }

    handleClick(i) {
        this.setState({active : i});
        this.props.handleMenuClick(i);
    }

    render() {
        return (
            <div className="list-group">
                <a href="#" className={this.state.active == 1 ? "list-group-item active" : "list-group-item"} onClick={(i) => this.handleClick(1)}>用户管理</a>
                <a href="#" className={this.state.active == 2 ? "list-group-item active" : "list-group-item"} onClick={(i) => this.handleClick(2)}>...</a>
                <a href="#" className={this.state.active == 3 ? "list-group-item active" : "list-group-item"} onClick={(i) => this.handleClick(3)}>...</a>
                <a href="#" className={this.state.active == 4 ? "list-group-item active" : "list-group-item"} onClick={(i) => this.handleClick(4)}>...</a>
            </div>
        );
    }
}

module.exports =  {Menu};
