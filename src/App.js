import './App.css';
import styled from 'styled-components'
import Layout, {Content} from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import {Filter} from "./components/filter/Filter";
import 'antd/dist/antd.css';


const LayoutComponent = styled.div`
  display: flex;
`

const AppComponent = styled.div`
  position: relative;
  width: 100vh;

  padding-top: 64px;
  padding-left: 60px;
  padding-right: 60px;
  
  
  
`

function App() {
  return (
      <>
          <AppComponent>
              <Layout
                  style={{ background: '#FFFFFF' }}
                   >
                  <LayoutComponent>
                      <Sider style={{ background: '#FFFFFF' }} ><Filter/></Sider>
                      <Content style={{ background: '#FFFFFF' }}>Content</Content>
                  </LayoutComponent>
              </Layout>
          </AppComponent>
      </>
  );
}

export default App;
