import {List} from "antd";
import React from "react";

const data = [
    '2020年寒假母校回访活动校级优秀',
    '2020年参加“希望小屋志愿活动',
    '2019年参加洪家楼献血站志愿活动',
    '2019年参加济南市图书馆志愿活动',
    '2019年参加鲁能志愿活动'
];

const Card3=()=>(
    <List
        size="default"
        bordered
        style={{borderColor: 'black', borderStyle: 'solid'}}
        dataSource={data}
        renderItem={item => <List.Item style={{fontSize: 20}}>{item}</List.Item>}
    />
)

export default Card3;
