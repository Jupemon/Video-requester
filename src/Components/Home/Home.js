import React, { Component } from 'react';
import LoginButton from '../Signin/LoginButton';
import ManageProfile from '../ManageProfile/ManageProfile';
import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {

    state = { 
        isLoading : false,
        loggedIn : false,
        errorInfo : ""
     }

     logIn = (googleUser) => { // login happens checks if user already exists in the database, create a new profile if not

        this.setState({isLoading : true})

        const token_id = googleUser.tokenId;

        fetch("http://localhost:3001/signin", {
            method : "POST",
            headers : {
              'Content-Type' : "application/json"
            },
            body : JSON.stringify({
              token_id : token_id
              
            })
          }).then(res => {
            if (res.status === 200) { // user alredy exists
              this.setState({loggedIn : true})
            }
            else if (res.status === 201) { // new user created
              this.setState({loggedIn : true})
            }
            else {
              console.log("no bueno status is not 200 ok")
              this.setState({errorInfo : "Something went wrong while signin in"})
            }  
          })
          .catch(er => {
            console.log(er)
            this.setState({errorInfo : "Couldn't connect to the server"})
            console.log("yo man, there is an error connecting to server")
          })
          .finally(() => {
            this.setState({isLoading : false})
          })
        //this.setState({loggedIn : true})
        /*const name = googleUser
        const firstName = 
        const lastName = */
        
     }

     logInFailure = () => { // Something went wrong with  google authentication login
        console.log("failed to log in")
     }

    render() { 
        if (!this.state.loggedIn) {
            return ( <div>
                <Jumbotron>
  <h1>Requstenator</h1>
  <p>
  Create and sell custom video content for companies!
  </p>
  <p>
  <LoginButton isLoading={this.state.isLoading} logInFailure={this.logInFailure} logIn={this.logIn}/>
  </p>
  <p style={{color:"red"}}>{this.state.errorInfo}</p>
</Jumbotron>
            </div> );
        }
        else if (this.state.loggedIn) {
            return <div>
                <ManageProfile />
            </div>
        }
    }
}
 
 
export default Home;