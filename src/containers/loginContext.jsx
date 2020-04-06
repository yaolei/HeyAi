import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// var __html = require('../util/tmp/index');
import data from '../util/tmp/index.html'
import data1 from '../util/tmp/index'
import Header from '../util/tmp/header'
// var template = {__html: __html};

class LoginContext extends React.Component {
    
    constructor(props) {
        super(props);
    }

    handleClickSubmitBut = ()=> {

        let accessToken = "@@@@";
        // save the login session status
        window.sessionStorage.setItem("isUserLogged", accessToken);
        this.props.callBack(true);
    }

    render() {
        return (
            <React.Fragment>
                {/* <Button onClick={this.handleClickSubmitBut}>99</Button> */}
                {/* <img src={img1} className="img-responsive" alt="Thin Laptop"/> */}
                {/* <iframe
                    ref= "iframe"
                    title="resg"
                    srcDoc={data1}
                    style={{ width: '100%', border: '0px', height: '1100px' }}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    scrolling="auto"
                /> */}
                <Header />
            </React.Fragment>            
        )
    }

}

export default  LoginContext;