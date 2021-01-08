import {Modal, Space, Table} from "antd";
import React, {Component} from "react";
import {Input, Button} from 'antd';
import '../App.css'
import {ExclamationCircleOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {chooseClass, deleteClass, reStateAction} from "../actions";
import store from "../store";
import axios from "axios";

const {confirm} = Modal;
//
// let all=true;
// console.log("first all:");
// console.log(all);


class Card2 extends Component {


    constructor(props) {
        super(props);
        this.state = store.getState();
        this.filterMyClass = this.filterMyClass.bind(this);
        this.showConfirm = this.showConfirm.bind(this);
        this.allClass = this.allClass.bind(this);
    }

    render() {

        console.log("render");

        const columns = [
            // {
            //     title: '课序号',
            //     dataIndex: 'key',
            // },
            {
                title: '课程名',
                dataIndex: 'className'
            },
            {
                title: '学分',
                dataIndex: 'credit'
            },
            {
                title: '教师',
                dataIndex: 'teacher'
            },

            {
                title: '上课时间',
                dataIndex: 'time'
            },
            {
                title: '上课地点',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render: (abc) => (
                    <>
                        <Button type="primary" onClick={() => this.showConfirm(abc)}>
                            {abc.choosed ? abc.shanchu : abc.tianjia}
                        </Button>
                    </>

                )
            }
        ];

        return (
            <div>
                <div className="search">
                    <Space>
                        {/*<Search placeholder="请输入课程名" onSearch={value => searchClass(value)} style={{width: 300}}/>*/}
                        <Button type="primary" onClick={this.allClass}>
                            全部课程
                        </Button>
                        <Button type="primary" onClick={this.filterMyClass}>
                            我选的课
                        </Button>
                    </Space>
                </div>
                <Table
                    columns={columns}
                    dataSource={this.state.all ? this.state.data : this.state.data.filter((ele) => {
                        return ele.choosed;
                    })}
                    scroll={{y: 280}}
                    style={{height: 300}}
                    bordered
                    pagination={false}
                />
            </div>
        )
    }

    componentDidMount() {
        console.log("In componentDidMount");
        const _this = this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        // axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
        axios.get('http://localhost:8080/Project4/data')
            .then(function (response) {
                console.log("response.data");
                console.log(response.data);
                let a = Object.values(response.data);
                console.log("a");
                console.log(a[0]);
                _this.setState({
                        data:a[0]
                    }
                    // isLoaded:true
                );

            })
            .catch(function (error) {
                console.log(error);
                // _this.setState({
                //     isLoaded:false,
                //     error:error
                // })
            })
    }

    filterMyClass() {
        this.setState({all: false});
        console.log("filterMyClass");
        store.dispatch(reStateAction())
    }

    allClass() {
        this.setState({all: true});
        console.log("allClass");
        store.dispatch(reStateAction())
    }

    showConfirm(abc) {
        if (abc.choosed === true)
            confirm({
                title: '确定删除这门课吗?',
                icon: <ExclamationCircleOutlined/>,
                okText: '确定',
                cancelText: '取消',
                onOk() {
                    console.log('OK确定删除这门课');
                    store.dispatch(deleteClass(abc.key))
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        if (abc.choosed === false)
            confirm({
                title: '确定选这门课吗?',
                icon: <ExclamationCircleOutlined/>,
                okText: '确定',
                cancelText: '取消',
                onOk() {
                    console.log('OK确定选这门课');
                    store.dispatch(chooseClass(abc.key))
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
    }

}


export default Card2;

