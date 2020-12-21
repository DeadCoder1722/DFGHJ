import {Modal, Table} from "antd";
import React from "react";
import {Input, Button} from 'antd';
import '../App.css'
import {ExclamationCircleOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';

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


// const data = [
//     {
//         key: '1',
//         className: '线性代数',
//         classGrade: '99',
//         testTime: '2020-06-22',
//         credit: 3,
//         classCredit: 4.9,
//         teacher: "小明",
//         time: "每周三第一节",
//         address: "五区107"
//     },
//     {
//         key: '2',
//         className: '高等数学',
//         classGrade: '70',
//         testTime: '2020-06-22',
//         credit: 5,
//         classCredit: 2,
//         teacher: "小红",
//         time: "每周四第一节",
//         address: "五区108"
//     },
//     {
//         key: '3',
//         className: '体育',
//         classGrade: '94',
//         testTime: '2020-06-22',
//         credit: 1,
//         classCredit: 4.4,
//         teacher: "小宾",
//         time: "每周五第一节",
//         address: "六区"
//     }
// ];

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

    let {data, filterMyClass} = props

    // function showClass() {
    //     let datas = data;
    //     //filter：返回为true的保留
    //     let newDatas = datas.filter((ele) => {
    //         return ele > 1;
    //     });
    //     this.setState({data: newDatas});
    // }

    return (
        <div>
            <div className="search">
                <Search placeholder="input search text" style={{width: 300}}/>
                <Button type="primary" onClick={() => filterMyClass}>
                    我选的课
                </Button>
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



export default connect(stateToProps)(Card2);

