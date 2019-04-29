import React, { Component } from 'react'

export default class RegisterForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        userName: ""

    };

    handleFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value })
    }

    change=e=>{
        this.setState({ [e.target.name]: e.target.value })
    }

    submit =(e)=>{
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <form>
                <input
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={e => this.handleFirstNameChange(e)} />

                <input
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={e=>this.change(e)} />

                <input
                    name="userName"
                    placeholder="User Name"
                    value={this.state.userName}
                    onChange={this.change} />

                    <button onClick={this.submit}>Submit</button>
            </form>
        )
    }
}
