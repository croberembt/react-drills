import React, { Component } from 'react';


class Login extends Component {
    state={
        userName:'',
        userPass:''
    }

    userHandler = text => {
        this.setState({userName: text})
    }

    passHandler = password => {
        this.setState({userPass: password})
    }

    buttonHandler = () => {
        const {userName, userPass} = this.state
        alert(`username: ${userName}, user password: ${userPass}`)
    }
    
    render() {
        console.log(this.state);
        return (
        <div>
            <input placeholder='Enter User Name' onChange={(u) => this.userHandler(u.target.value)} />
            <input placeholder='Enter Password' onChange={(p) => this.passHandler(p.target.value)} />
            <button onClick={this.buttonHandler}>Login</button>
        </div>
        )
    }
}

export default Login;