import React, {useContext}from 'react';
import { Layout, Menu} from 'antd';
import PropTypes from "prop-types";
import CreateCon from './createContext'
import { BrowserRouter as Router, Link} from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';


const { Sider } = Layout;
const { SubMenu } = Menu;
export default function SiderBarSetting () {
  
    const {isCollapsed, testTxt} = useContext(CreateCon);
    return (
      <Sider id="rootSiderBar" 
              className="rootSiderBar" 
              collapsible collapsed={isCollapsed}
              trigger={null}
            >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <PieChartOutlined />
          <span>{testTxt}</span>
        </Menu.Item>
        <Menu.Item key="2">
            
                <DesktopOutlined />
            <Link to="/">
                Home
              </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span> 
              <UserOutlined />
              About
            </span>
          }
        >
          <Menu.Item key="3"><Link to="/erro">Tom</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/about">Bill</Link></Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <TeamOutlined />
              <span>Team</span>
            </span>
          }
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <FileOutlined />
        </Menu.Item>
        </Menu>
        </Sider>
    )
  }
 SiderBarSetting.propTypes = {
    isCollapsed: PropTypes.bool
 }
 SiderBarSetting.defaultProps = {
    isCollapsed: false
 }
