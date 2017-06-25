const React = require('react');
const ReactDOM = require('react-dom');

const ajaxHandler = require('./../handler/ajaxhandler');
const tableHandler = require('./../handler/tableHandler');
const pageHandler = require('./../handler/pagehandler');

class Datatable extends React.Component {

    constructor(props){
        super(props);
        this.drawDatatable = this.drawDatatable.bind(this);
        this.setTableData = this.setTableData.bind(this);
    }

    setTableData(menuActive) {
        if(menuActive == 1){
            var data = [];
            ajaxHandler.getUsers(function (result) {
                data = result;
            }.bind(this));

            this.setState({
                option:{
                    columns: [null,null,null,null,null,{orderable: false}],
                    order: [[ 0, 'asc' ]],
                },
                titles: ["用户名", "密码", "姓名", "性别", "创建时间", "操作"],
                data: data
            });
        }else{
            this.setState({
                option: [],
                titles: ["table head"],
                data: []
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setTableData(nextProps.menuActive);
    }

    componentWillMount() {
        this.setTableData(this.props.menuActive);
    }

    componentDidMount () {
        //绘制datatable
        this.drawDatatable();
    }

    componentWillUpdate() {
        //状态更新前销毁datatable
        tableHandler.DestroyDataTable();
    }

    componentDidUpdate() {
        //状态更新后重绘datatable
        this.drawDatatable();
    }

    drawDatatable() {
        //初始化datatable
        var datatable = tableHandler.InitDataTable(this.state.option);

        //监听表格重绘事件
        datatable.on( 'draw.dt', function () {
            //重新改变页面高度
            pageHandler.pageAdapt(ReactDOM.findDOMNode(window.refs.footer));
        }.bind(this));
    }

    handleClick(i) {
        this.props.handleDeleteClick(i);
    }

    render() {
        var that = this;
        return (
            <table id="datatable" className="table table-striped table-hover text-center">
                <thead>
                <tr>
                    {
                        this.state.titles.map(function (item) {
                            return (<td key={item}>{item}</td>)
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    this.state.data.map(function (item) {
                        return (
                            <tr key={item.id}>
                                <td>{item.username}</td>
                                <td>{item.password}</td>
                                <td>{item.name}</td>
                                <td>{item.gender}</td>
                                <td>{item.create_datetime}</td>
                                <td>
                                    <button className="btn btn-xs btn-default" onClick="">修改</button>
                                    <button className="btn btn-xs btn-default" onClick={(i)=>that.handleClick(2)}>删除</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        )
    }
}

module.exports =  {Datatable};