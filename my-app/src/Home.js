import './App.css'
import React from "react";

import {Button, Card, Form, Input, Menu, Space} from 'antd';
import { Row, Col, Divider } from 'antd';

const Home = () => (
    <div className="App">
        <Row justify="center" align="middle">
            <Col span={4}>
                <Menu id='rcorners2'
                      mode="inline"
                      defaultSelectedKeys={['1']}
                      // style={{height: 150, width: 200}}
                    style={{height: 150, width: 200}}

                >
                    <Menu.Item key="1">个人信息</Menu.Item>
                    <Menu.Item key="2">选课</Menu.Item>
                    <Menu.Item key="3">社会成果</Menu.Item>
                </Menu>
            </Col>
            <Col span={16}>
                <Card
                    id='rcorners3'
                    // style={{width: 700, height: 500}}
                    style={{width: 800, height: 500}}

                    bordered={true}
                    hoverable={true}
                >
                    <h5>hello</h5>

                </Card>
            </Col>
        </Row>


    </div>

)


export default Home;
