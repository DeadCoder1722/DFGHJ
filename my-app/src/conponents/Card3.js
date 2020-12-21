import {List} from "antd";
import React from "react";

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
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
