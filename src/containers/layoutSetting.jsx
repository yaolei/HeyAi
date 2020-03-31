import React, {useState} from 'react';
import { Layout} from 'antd';
import CreateCon from './createContext'
import SiderBarSetting from './siderBarSetting';
import { MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons';
import LayoutContent from './layoutContent';
import LayoutRightCorner from './layoutRightCorner'
import '../style/layoutStyle.less';
const { Header, Footer } = Layout;

export default function LayoutSetting() {
  const [collapsedStates, setcollapsedStates] = useState(false);

  const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }

  function toggle() {
    setcollapsedStates(!collapsedStates);
  }
  return (
    <CreateCon.Provider value={{
      isCollapsed: collapsedStates,
      testTxt: 'this is txt',
      userMessageNum: 2,
    }}>
      <Layout id="layoutGride">
          <SiderBarSetting />
          <Layout className={collapsedStates ? " site-layout collapsedClose ": " site-layout collapsedOpend "}>
              <Header className="site-layout-background headerBarFixed" style={{ padding: 0 }} >
                {React.createElement(collapsedStates ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggle,
                })}
              <LayoutRightCorner />
              </Header>
            <LayoutContent />
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
    </CreateCon.Provider>

  )
}