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

class Card4 extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    render() {
        return (
            <Table
                columns={columns}
                dataSource={this.state.dataGrade}
                bordered
                pagination={false}
            />
        )
    }

    componentDidMount() {
        console.log("In componentDidMount4");
        const _this=this;
        // axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
        axios.get('http://localhost:8080/Project4/dataGrade')
            .then(function (response) {
                console.log("response.data");
                console.log(response.data);
                let a = Object.values(response.data);
                console.log("Card4 array:");
                console.log(a[0]);
                _this.setState({
                        dataGrade:a[0]
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
}


export default Card4;
