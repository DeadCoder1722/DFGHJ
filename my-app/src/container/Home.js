import '../App.css'
import React from "react";

import {Card, Menu} from 'antd';
import {Row, Col} from 'antd';
import qiehuan from "../function/qiehuan";
import Card3 from "../conponents/Card3";
import Card1 from "../conponents/Card1";
import Card4 from "../conponents/Card4";
import Card2 from "../conponents/Card2";


const Home = () => (
    <div className="App">
        <Row justify="center" align="middle">
            <Col span={16} order={2}>
                <Card
                    className='rcorners3'
                    style={{width: 800, height: 500}}

                    bordered={true}
                    hoverable={true}
                >
                    <div id='change1'>
                        <Card1/>
                    </div>
                    <div id='change2'>
                        <Card2/>
                    </div>
                    <div id='change3'>
                        <Card3/>
                    </div>
                    <div id='change4'>
                        <Card4/>
                    </div>

                </Card>
            </Col>
            <Col span={4} order={1}>
                <Menu id='rcorners2'
                      mode="inline"
                      defaultSelectedKeys={['1']}
                    // style={{height: 150, width: 200}}
                      style={{height: 190, width: 200}}
                >
                    {/*<Menu.Item key="1" onClick={qiehuan(1)}>个人信息</Menu.Item>*/}
                    {/*<Link to="./Login">*/}
                    {/*    <Menu.Item key="1">个人信息</Menu.Item>*/}
                    {/*</Link>*/}
                    <Menu.Item key="1" onClick={() => {
                        qiehuan(1)
                    }}>
                        {/*<Link to="/card1">*/}
                        个人信息
                        {/*</Link>*/}
                    </Menu.Item>
                    <Menu.Item key="2" onClick={() => {
                        qiehuan(2)
                    }}>选课</Menu.Item>
                    {/*<Menu.Item key="3" onClick={qiehuan(3)}>社会成果</Menu.Item>*/}
                    <Menu.Item key="3" onClick={() => {
                        qiehuan(3)
                    }}>社会成果</Menu.Item>
                    <Menu.Item key="4" onClick={() => {
                        qiehuan(4)
                    }}>成绩查看</Menu.Item>

                </Menu>
            </Col>

        </Row>


    </div>

)


export default Home;
