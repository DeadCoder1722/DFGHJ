import {Button, Space, Table} from 'antd';
import React, {Component} from "react";
import store from "../store";
import axios from "axios";

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
