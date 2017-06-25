const React = require('react');

const menuModule = require('./menu');
const tableModule = require('./datatable');

class Container extends React.Component {
    constructor(props){
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.state = {menuActive: 1};
    }

    //处理菜单点击事件
    handleMenuClick(i){
        //改变选中的菜单项
        this.setState({menuActive: i});
    }

    handleDeleteClick(i) {
        //处理点击删除事件
        //...
    }

    render() {
        return (
            <div className="container">
                <div className="clearfix">
                    <div className="col-md-3">
                        <menuModule.Menu handleMenuClick={this.handleMenuClick}/>
                    </div>
                    <div className="col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-default" data-toggle="modal" data-target=".bs-example-modal-lg">新增</button>
                                    <button type="button" className="btn btn-sm btn-default">删除</button>
                                </div>
                                <div className="table-responsive">
                                    <tableModule.Datatable handleDeleteClick={this.handleDeleteClick} menuActive={this.state.menuActive} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = {Container};
