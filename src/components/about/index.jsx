import React from 'react'
import PropTypes from "prop-types";
import {setReducerInfo} from '../../actions/testAction';
import { connect } from 'react-redux';
class About extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      click: true
    }
  }

  handleClickButton(e) {
    this.props.dispatch(setReducerInfo(this.props.value));
    // 不需要再setStatus,Reder返回的state变化后，UI也会改变
  }

  render() {
    const {value} = this.props;
    console.log(value, 'this is the value of the reduer count')
    return (
        <div>
            The Redux value is {value}
            <button onClick={this.handleClickButton.bind(this)}>Click Here</button>
        </div>
    )
  } 
}

function mapStateToProps (state) {
  // state 后面的值必须和Action的名字一样否则去不到值
  return {
    value: state.testReducer
  }
}

export default connect(mapStateToProps)(About) ;

About.propTypes = {
  value:PropTypes.number
}
About.defaultProps = {
  value: 0
}