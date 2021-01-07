const defaultState = {
    data: [
        {
            key: 0,
            className: '线性代数',
            classGrade: '99',
            testTime: '2020-06-22',
            credit: 3,
            classCredit: 4.9,
            teacher: "小明",
            time: "每周三第一节",
            address: "五区107",
            choosed:false,
            tianjia:"添加",
            shanchu:"删除"
        },
        {
            key: 1,
            className: '高数',
            classGrade: '70',
            testTime: '2020-06-22',
            credit: 5,
            classCredit: 2,
            teacher: "小红",
            time: "每周四第一节",
            address: "五区108",
            choosed:false,
            tianjia:"添加",
            shanchu:"删除"
        },
        {
            key: 2,
            className: '体育',
            classGrade: '94',
            testTime: '2020-06-22',
            credit: 1,
            classCredit: 4.4,
            teacher: "小宾",
            time: "每周五第一节",
            address: "六区",
            choosed:true,
            tianjia:"添加",
            shanchu:"删除"
        }
    ]
}  //默认数据
export default (state = defaultState, action) => {  //就是一个方法函数
    if (action.type === 'FIL_MYCLASS') {
        let newState = JSON.parse(JSON.stringify(state))
        // let data1=newState.data;
        // let data=data1.filter((ele) => {
        //     return ele.choosed;
        // });
        // let copyState={data}
        // console.log("copyState:");
        // console.log(copyState);
        console.log("newState:");
        console.log(newState);
        console.log("FIL_MYCLASS");
        return newState;
    }
    if (action.type === 'SEARCH_CLASS') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.data=state.data.filter((ele) => {
            return ele.className===action.name;
        });
        console.log("SEARCH_CLASS")
        return newState

    }
    if (action.type === 'ALLCLASS') {
        let newState = JSON.parse(JSON.stringify(state))
        console.log("ALLCLASS");
        console.log(newState.data);
        // newState.data=state.data.filter((ele) => {
        //     return !ele.choosed;
        // });
        //return defaultState;
        console.log("ALLCLASS");
        return newState

    }
    if (action.type === 'CHOOSECLASS') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.data[action.key].choosed=true;
        console.log("CHOOSECLASS");
        console.log("newState.data[action.key].choosed");
        console.log(newState.data[action.key].choosed);
        return newState

    }
    if (action.type === 'DELETECLASS') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.data[action.key].choosed=false;
        console.log("DELETECLASS");
        console.log("newState.data[action.key].choosed");
        console.log(newState.data[action.key].choosed);
        return newState

    }
    console.log("End");
    return state;
}
