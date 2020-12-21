const defaultState = {
    data: [
        {
            key: '1',
            className: '线性代数',
            classGrade: '99',
            testTime: '2020-06-22',
            credit: 3,
            classCredit: 4.9,
            teacher: "小明",
            time: "每周三第一节",
            address: "五区107"
        },
        {
            key: '2',
            className: '高等数学',
            classGrade: '70',
            testTime: '2020-06-22',
            credit: 5,
            classCredit: 2,
            teacher: "小红",
            time: "每周四第一节",
            address: "五区108"
        },
        {
            key: '3',
            className: '体育',
            classGrade: '94',
            testTime: '2020-06-22',
            credit: 1,
            classCredit: 4.4,
            teacher: "小宾",
            time: "每周五第一节",
            address: "六区"
        }
    ]
}  //默认数据
export default (state = defaultState,action)=>{  //就是一个方法函数
    return state
}
