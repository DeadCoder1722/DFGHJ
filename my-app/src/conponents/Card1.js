import {Descriptions} from "antd";
import React from "react";


const Card1=()=>(
    <Descriptions>
        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                           label="姓名">陈小芸</Descriptions.Item>
        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                           label="学号">5201314</Descriptions.Item>
        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                           label="性别">女</Descriptions.Item>
        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                           label="民族">汉</Descriptions.Item>
        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                           label="籍贯">广西玉林</Descriptions.Item>
        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                           label="政治面貌">共青团团员</Descriptions.Item>
        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                           label="系所">软件学院</Descriptions.Item>
        <Descriptions.Item labelStyle={{fontSize: 20}} contentStyle={{fontSize: 20}}
                           label="专业">软件工程</Descriptions.Item>
    </Descriptions>
)

export default Card1;
