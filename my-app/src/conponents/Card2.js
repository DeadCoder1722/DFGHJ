import {Modal, Space, Table} from "antd";
import React from "react";
import {Input, Button} from 'antd';
import '../App.css'
import {ExclamationCircleOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {allClassAction, chooseClass, deleteClass, filterMyClassAction, searchClassAction} from "../actions";

const {confirm} = Modal;

const {Search} = Input;

// function showConfirm(abc) {
//     // confirm({
//     //     title: '确定选这门课吗?',
//     //     icon: <ExclamationCircleOutlined/>,
//     //     okText: '确定',
//     //     cancelText: '取消',
//     //     onOk() {
//     //         console.log('OK');
//     //     },
//     //     onCancel() {
//     //         console.log('Cancel');
//     //     },
//     // });
//         if (abc.choosed === false)
//             confirm({
//                 title: '确定选这门课吗?',
//                 icon: <ExclamationCircleOutlined/>,
//                 okText: '确定',
//                 cancelText: '取消',
//                 onOk() {
//                     console.log('OK');
//                 },
//                 onCancel() {
//                     console.log('Cancel');
//                 },
//             });
//         if (abc.choosed === true)
//             confirm({
//                 title: '确定删除这门课吗?',
//                 icon: <ExclamationCircleOutlined/>,
//                 okText: '确定',
//                 cancelText: '取消',
//                 onOk() {
//                     console.log('OK');
//                 },
//                 onCancel() {
//                     console.log('Cancel');
//                 },
//             });
//
// }

// const columns = [
//     // {
//     //     title: '课序号',
//     //     dataIndex: 'key',
//     // },
//     {
//         title: '课程名',
//         dataIndex: 'className'
//     },
//     {
//         title: '学分',
//         dataIndex: 'credit'
//     },
//     {
//         title: '教师',
//         dataIndex: 'teacher'
//     },
//
//     {
//         title: '上课时间',
//         dataIndex: 'time'
//     },
//     {
//         title: '上课地点',
//         dataIndex: 'address'
//     },
//     {
//         title: '操作',
//         render: (abc) => (
//             <>
//                 <Button type="primary" onClick={()=>showConfirm(abc)}>
//                     {abc.choosed?abc.tianjia:abc.shanchu}
//                 </Button>
//             </>
//
//         )
//     }
// ];

let all=true;
let my=false;


const Card2 = (props) => {

    let {data, filterMyClass, searchClass, allClass,showConfirm} = props

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
                    <Button type="primary" onClick={()=>showConfirm(abc)}>
                        {abc.choosed?abc.shanchu:abc.tianjia}
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
                dataSource={all?data:data.filter((ele) => {
                    return ele.choosed;
                })}
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
        filterMyClass() {
            all=false;
            my=true;
            console.log("filterMyClass");
            dispatch(filterMyClassAction())
        },
        searchClass(name) {
            console.log("searchClass");
            console.log("name:");
            console.log(name);
            dispatch(searchClassAction(name))
        },
        allClass() {
            all=true;
            my=false;
            console.log("allClass");
            dispatch(allClassAction())
        },
        showConfirm(abc) {
            if (abc.choosed === true)
                confirm({
                    title: '确定删除这门课吗?',
                    icon: <ExclamationCircleOutlined/>,
                    okText: '确定',
                    cancelText: '取消',
                    onOk() {
                        console.log('OK确定删除这门课');
                        dispatch(deleteClass(abc.key))
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
                        dispatch(chooseClass(abc.key))
                    },
                    onCancel() {
                        console.log('Cancel');
                    },
                });
        }
    }
}


export default connect(stateToProps, dispatchToProps)(Card2);

