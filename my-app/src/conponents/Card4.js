import { Table } from 'antd';
import React from "react";
import store from "../store";

// const data = [
//     {
//         key: '1',
//         className: '线性代数',
//         classGrade: '99',
//         testTime:'2020-06-22',
//         credit:3,
//         classCredit:4.9
//     },
//     {
//         key: '2',
//         className: '高等数学',
//         classGrade: '70',
//         testTime:'2020-06-22',
//         credit: 5,
//         classCredit:2
//     },
//     {
//         key: '3',
//         className: '体育',
//         classGrade: '94',
//         testTime:'2020-06-22',
//         credit: 1,
//         classCredit:4.4
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
        title: '成绩',
        dataIndex: 'classGrade'
    },
    {
        title: '考试时间',
        dataIndex: 'testTime'
    },
    {
        title: '学分',
        dataIndex: 'credit'
    },
    {
        title: '课程绩点',
        dataIndex: 'classCredit'
    }
];


const Card4=()=>(
    <Table
        columns={columns}
        dataSource={store.getState().dataGrade}
        bordered
        pagination={false}
        // title={() => 'Header'}
        // footer={() => 'Footer'}
    />
)

export default Card4;
