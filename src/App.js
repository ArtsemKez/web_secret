import React, {useState} from 'react'
import './App.css';
import Layout, {Content, Header} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {Filter} from "./components/filter/Filter";
import 'antd/dist/antd.css';
import {CatalogPage} from "./components/сatalog/Catalog";
import {Col, Drawer, Row} from "antd";
import {AppComponent, BurgerStyle, ContentStyle, FilterStyle} from "./AppStyle";


function App() {

    const [visible, setVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true);
    }

    const onClose = () => {
        setVisible(false);
    }

    return (
        <>
            <AppComponent>
                <Header
                    style={{
                        background: '#FFFFFF',
                        height: '40px',
                        padding: '0',
                        position: 'fixed',
                        zIndex: '5',
                        width: '100%'
                    }}>
                    <BurgerStyle>
                        <span onClick={showDrawer}></span>
                    </BurgerStyle>
                </Header>
                <Layout style={{background: '#FFFFFF'}}>
                    <Row>
                        <FilterStyle>
                            <Col style={{width: '224px', top: '64px'}}>
                                <Sider style={{background: '#FFFFFF', width: '224px'}}><Filter/></Sider>
                                <Drawer
                                    placement="left"
                                    closable={false}
                                    onClose={onClose}
                                    visible={visible}
                                ><Filter/></Drawer>
                            </Col>
                        </FilterStyle>
                        <ContentStyle>
                            <Col style={{maxWidth: '1100px', top: '64px'}}>
                                <Content style={{
                                    background: '#FFFFFF',
                                    maxWidth: '1050px'
                                }}><CatalogPage/></Content>
                            </Col>
                        </ContentStyle>
                    </Row>
                </Layout>
            </AppComponent>
        </>
    );
}

export default App;