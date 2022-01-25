import React from "react";
import axios from "axios";

class Login extends React.Component{
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', this.state.credentials)
            .then(res =>{
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('username', res.state.credentials.username)
                this.props.history.push('/friends')
            })
            .catch(err => console.log(err))
    };


    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <form onSubmit={this.login}>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="Username"
                    />
                    <input 
                        type='text'
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;