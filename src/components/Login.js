import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    onLogin = (e) => {
        e.preventDefault();
        var userName = '';
        var passWord = '';
        var form = [...e.target];
        form.forEach((item, index) => {
            if (item.name === 'username') {
                userName = item.value;
            }
            if (item.name === 'password') {
                passWord = item.value;
            }
        });
        this.setState({
            username: userName,
            password: passWord
        });
        setTimeout(() => {
            localStorage.setItem('user',JSON.stringify(this.state));
        },10);
    }

    componentDidMount(){
        var data = JSON.parse(localStorage.getItem('user'));
        if( data ){
            this.setState({
                username: data.username,
                password: data.password
            });
        }
    }

    render() {
        //console.log(this.props.location);
        var {username, password} = this.state;
        if(username==='admin' && password==='admin'){
            return (
                <Redirect
                    to={{
                        pathname:'/products',
                        state: {
                            referer: this.props.location
                        }
                    }}
                ></Redirect>
            );
        }
        return (
            <div className="container">
                <form onSubmit={this.onLogin}>
                    <legend>Login</legend>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" className="form-control" name="username" />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="password" className="form-control" name="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;