import './App.css';
import styled from 'styled-components'
import Layout, {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {Filter} from "./components/filter/Filter";
import 'antd/dist/antd.css';
import {CatalogPage} from "./components/сatalog/Catalog";
import {Col, Row} from "antd";

const AppComponent = styled.div`
  position: relative;
  top: 64px;
  padding-left: 60px;
  padding-right: 60px;
`

function App() {
    return (
        <>
            <AppComponent>
                <Layout style={{background: '#FFFFFF'}}>
                    <Row>
                        <Col span={6} >
                            <Sider style={{background: '#FFFFFF'}}><Filter/></Sider>
                        </Col>
                        <Col span={18} >
                            <Content style={{background: '#FFFFFF'}}><CatalogPage/></Content>
                        </Col>
                    </Row>
                </Layout>
            </AppComponent>
        </>
    );
}

export default App;
