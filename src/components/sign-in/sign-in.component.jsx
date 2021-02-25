import React from 'react';
import './sign-in.styles.scss';

//authentication functionality
//ussing class component as we need to maintain state/data
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event => {
        //this function is used to handle the submit event 
        event.preventDefault();

        this.setState({email:'',password:''})
    }

    handleChange = event => {
        //this function is used to handle the changes in the password field
        const {value,name} = event.target.value;
        

        this.setState({[name]:value});
    }

    
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" value={this.state.email} required />
                    <label>Email</label>
                    <input name="password" type="password" onChange={this.handleChange} value={this.state.password} required />
                    <label>Password</label>
                    <input type="submit" value="Submit Form"/>
                </form>

            </div>
        )
    }
}

export default SignIn;