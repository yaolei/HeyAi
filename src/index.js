import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Reducers from './reducer'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from './serviceWorker';
import MainMiddleWare from './middlewares/mainMiddleWares';
import thunk from 'redux-thunk';
import LayoutSetting from './containers/layoutSetting';
import LoginContext from './containers/loginContext'

const createStoreWithMiddleware = applyMiddleware(
    MainMiddleWare,
    thunk
)(createStore);

const getConfirmation = (message, callback) => {
  const allowTransition = window.confirm(message);
  callback(allowTransition);
}

const DisplayIndexPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    let isExistLoginSession = window.sessionStorage.getItem("isUserLogged");
    
    const userLoginSuccess = (loginSucess) => {
      setIsLogin(loginSucess);
    }

  if (isLogin || isExistLoginSession || isExistLoginSession == "false") {
      return (
        <LayoutSetting />
      );
  } else {
    return (
        <LoginContext  callBack={userLoginSuccess}/>
    )
  }
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducers)}>
      <Router getUserConfirmation={getConfirmation} >
        <div>
          {/* <LayoutSetting /> */}
          <DisplayIndexPage/>
            {/* <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/404">404</Link></li>
              </ul>
            <Routes /> */}
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
