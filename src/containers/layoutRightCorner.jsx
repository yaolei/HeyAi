import React, {useState, useContext} from 'react';
import { Avatar, Badge, Menu, Dropdown} from 'antd';
import { UserOutlined} from '@ant-design/icons';
import CreateCon from './createContext'
import PropTypes from "prop-types";
import { Link, Redirect } from 'react-router-dom';

const defaultPros = {
        count: 1
}




export default function LayoutRightCorner () {
    let {userMessageNum, isCollapsed} = useContext(CreateCon);
    const [optionVisible, setOptionVisible] = useState(false);
    // if userMessageNum is null from fater comp set the default value
    let countNum = userMessageNum? userMessageNum: defaultPros.count;
    let layoutBadge = isCollapsed? 'layoutBadegSettingColl': 'layoutBadegSettingColled';

    const handleMenuClick = e => {
        if (e.key === '3') {
            setOptionVisible(false);
            // remove the login session status
            window.sessionStorage.removeItem("isUserLogged");
            // jump to login page
            window.location.href ="/";
          }
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                <UserOutlined />
                1st menu item
                </Menu.Item>
                <Menu.Divider />

                <Menu.Item key="2">
                <UserOutlined />
                2nd menu item
                </Menu.Item>
                <Menu.Divider />

                <Menu.Item key="3" >
                <UserOutlined />
                    Log out
                </Menu.Item>
                <Menu.Divider />
        </Menu>
        
      );
    
      const handleVisibleChange = e => {

      }

    return (
        <React.Fragment>
            <Dropdown overlay={menu} trigger={['click']} 
            placement="bottomCenter" overlayClassName="layoutUserMenuDrop"
            onVisibleChange={ falg => {
                setOptionVisible(falg);
            }}
            visible={optionVisible}>
                <Badge count={userMessageNum = countNum} className={layoutBadge} >
                    <Avatar icon={<UserOutlined />} onClick={e => e.preventDefault()}/>
                    {/* <DownOutlined />  */}
                </Badge>
            </Dropdown>
        </React.Fragment>
    )
}
LayoutRightCorner.propTypes = {
    userMessageNum: PropTypes.number
 }
 // React hook no longer support this func
//  LayoutRightCorner.defaultProps = {

//  }