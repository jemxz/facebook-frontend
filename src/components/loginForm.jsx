import React, { Component } from 'react';
import { login } from '../services/authService'
import { toast } from 'react-toastify';
import '../style/login.css'

class LoginForm extends Component {
    state = { 
        data: { username: "", password: ""}
     }

     handleSubmit = e => {
         e.prevetDefault();
     }

     handleChange = ({currentTarget: input}) => {
         const data = { ...this.state.data }
         data[input.name] = input.value;
         this.setState({data})
     }

    doSubmit = async () => {

        try {   
            const {data} = this.state
            const {data: jwt} = await login(data.username, data.password)
            localStorage.setItem("token", jwt)
            window.location="/"
        } catch (error) {
            if (error.response && error.response.status === 400) {
                let result = await error.response.data
                toast.error(result, {
                    position: toast.POSITION.TOP_RIGHT
                })
            }
        }

    }


    render() { 
        const { data } = this.state
        return ( 
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            
                        </div>
                        <div className ="col-sm">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username"> Username </label>
                                    <input onChange={this.handleChange} value={data.username} id="username" name="username" type="text" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password"> Password </label>
                                    <input onChange={this.handleChange} value={data.password} id="password" name="password" type="password" className="form-control"/>
                                </div>
                            </form>
                            <button onClick = {this.doSubmit} className="btn btn-primary m-2">Submit</button>
                            
                        </div>
                        <div className="col-sm">
                        </div>
                    </div>
                </div>
            </div>
        )}
}
 
export default LoginForm;