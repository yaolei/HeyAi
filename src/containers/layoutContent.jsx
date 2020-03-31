import React from 'react';
import {Layout, Breadcrumb } from 'antd';
import Routes from '../routes'
const {Content} = Layout;
export default function LayoutContent() {

    return (
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <Breadcrumb className=" mainBreadcrumb">
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: '85vh' }}>
            <Routes />
        </div>
    </Content>
    )
}