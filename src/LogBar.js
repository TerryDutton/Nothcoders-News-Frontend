import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

class LogBar extends React.Component{
  state = {
    username: ''
  }

  render(){
    const {user, logOut} = this.props; 

    return (<span> {user ? <Fragment>
      <h6 className="loginWelcome">Welcome, <Link to={`/api/users/${user.username}`}>{(user.name || '').split(' ')[0] || user.username}</Link></h6>
      <input type="button" value="Log Out" onClick={logOut}/>
    </Fragment> : <Fragment>
      <input type="text" className="textInput" onChange={this.handleInput} onKeyUp={this.handleKeyPress}/>
      <input type="button" value="Log In" onClick={this.handleLogin}/>
    </Fragment>} </span>);
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) return this.handleLogin();
  }

  handleInput = e => this.setState({username: e.target.value});

  handleLogin = () => {
    if (this.state.username){
      this.props.logIn(this.state.username); 
      this.setState({username: ''});
    }
  }
}

export default LogBar;