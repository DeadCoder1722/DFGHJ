import {Modal, Space, Table} from "antd";
import React from "react";
import {Input, Button} from 'antd';
import '../App.css'
import {ExclamationCircleOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {allClassAction, filterMyClassAction, searchClassAction} from "../actions";

const {confirm} = Modal;

const {Search} = Input;

function showConfirm() {
    confirm({
        title: '确定选这门课吗?',
        icon: <ExclamationCircleOutlined/>,
        okText: '确定',
        cancelText: '取消',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
}

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
        render: () => (
            <Button type="primary" onClick={showConfirm}>
                添加
            </Button>
        )
    }
];


const Card2 = (props) => {

    let {data, filterMyClass,searchClass,allClass} = props

    return (
        <div>
            <div className="search">
                <Space>
                    <Search placeholder="请输入课程名" onSearch={value => searchClass(value)} style={{width: 300}}/>
                    <Button type="primary" onClick={allClass}>
                        全部课程
                    </Button>
                    <Button type="primary" onClick={filterMyClass}>
                        我选的课
                    </Button>
                </Space>
            </div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                pagination={false}
            />
        </div>
    )

}

const stateToProps = (state) => {
    return {
        data: state.data
    }
}

const dispatchToProps = (dispatch) => {
    return {
        filterMyClass(){
            console.log("filterMyClass");
            dispatch(filterMyClassAction())
        },
        searchClass(name){
            console.log("searchClass");
            console.log("name:");
            console.log(name);
            dispatch(searchClassAction(name))
        },
        allClass(){
            console.log("allClass");
            dispatch(allClassAction())
        }

    }
}



export default connect(stateToProps,dispatchToProps)(Card2);

