import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import { Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

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
                <Button onClick={this.handleClickSubmitBut}>99</Button>
            </React.Fragment>            
        )
    }

}

export default  LoginContext;