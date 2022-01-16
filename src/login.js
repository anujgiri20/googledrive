import React from "react";
import "./Login.css"
import { useState } from "react"
import Axios from "axios";
import { useHistory } from "react-router-dom";
// import { GiAirplaneDeparture, GiConsoleController } from "react-icons/gi";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from "./App";
import google from "./img/go_img.jpg"
import logo from "./media/google-drive-logo.png"



export function Main() {
    return (
        <>

            <Link to="/" />
            <Link to="/app" />
            <Switch>
                <Route exact path="/">
                    <Loginuser />
                </Route>
                <Route path="/app">
                    <App />
                </Route>
            </Switch>
        </>

    )
}


export function Loginuser() {
    const [login, register] = useState(true)
    // register

    const [usernameReg, setusernmaeReg] = useState("")
    const [passwordReg, setpasswordReg] = useState("")
    const [nameReg, setnameReg] = useState("")
    const [emailReg, setemailReg] = useState("")
    const history = useHistory()

    const addUser = () => {

        Axios.post("https://capstoneproject1299.herokuapp.com/register", {
            name: nameReg,
            email: emailReg,
            username: usernameReg,
            password: passwordReg
        }).then((response) => {

            alert(response.data)
        })

        setnameReg("")
        setemailReg("")
        setusernmaeReg("")
        setpasswordReg("")


    }



    // login

    const [usernamelog, setusernmaelog] = useState("")
    const [passwordlog, setpasswordlog] = useState("")

    const login_ = () => {
        localStorage.setItem("name",usernamelog)
        try {
            Axios.post("https://capstoneproject1299.herokuapp.com/login", {

                username: usernamelog,
                password: passwordlog
            }).then((response) => {

                if ((response.data.messege) == 'valid logged in') {

                    localStorage.setItem("access-token", response.data.token)

                    alert("login Succesfull")
                    history.push("/app")
                }
                else {
                    var msg_login = response.data

                    
                    alert(msg_login)

                }
            }).catch((Err) => alert("user not registered"))
        } catch (err) {
            console.log(err)
        }
    }







    return (
        <>



            <div className="mainlogindiv">
                <div className="logindiv"
                    style={{
                        paddingTop: "30px"
                    }}
                >
                    {login ?
                        <div

                            className="loginForm">
                            <img
                                style={{
                                    width: "30%",
                                    marginLeft: "35%",
                                    paddingTop: "50px"
                                }}
                                src={logo} />
                            <input
                                className="inputlogin"
                                placeholder="username"
                                value={usernamelog}
                                onChange={(e) => {

                                    setusernmaelog(e.target.value)
                                }}
                            />
                            <br />
                            <input
                                className="inputlogin"
                                placeholder="password"
                                type="password"
                                value={passwordlog}
                                onChange={(e) => {

                                    setpasswordlog(e.target.value)
                                }}
                            />
                            <br />
                            <button
                                style={{
                                    width: "50%",
                                    marginLeft: "25%",
                                    marginTop: "20px"

                                }}
                                onClick={login_}
                                className="btn">Login</button>
                            <br />


                            <h1 style={{
                                width: "50%",
                                marginLeft: "25%"
                            }} className="button_" onClick={() => register(!login)}>Create account</h1>
                        </div>
                        :
                        <div className="loginForm">

                            <input
                                style={{
                                    marginTop: "50px"
                                }}
                                className="inputlogin"
                                placeholder="Name"
                                value={nameReg}

                                onChange={(e) => {

                                    setnameReg(e.target.value)
                                }}
                            />

                            <input
                                className="inputlogin"
                                placeholder="Email"
                                value={emailReg}
                                onChange={(e) => {

                                    setemailReg(e.target.value)
                                }}
                            />

                            <input
                                value={usernameReg}
                                onChange={(e) => {

                                    setusernmaeReg(e.target.value)
                                }}
                                className="inputlogin"
                                placeholder="Username"
                            />

                            <br />

                            <input
                                type="password"
                                value={passwordReg}
                                onChange={(e) => {

                                    setpasswordReg(e.target.value)
                                }}

                                className="inputlogin"
                                placeholder="Password"
                            />

                            <br />


                            <br />
                            <button
                                style={{
                                    width: "50%",
                                    marginLeft: "25%"
                                }}
                                onClick={addUser}
                                className="btn">register</button>
                            <br />



                            <h1
                                style={{
                                    width: "50%",
                                    marginLeft: "25%"

                                }}
                                className="button_" onClick={() => register(!login)}>Login</h1>

                        </div>
                    }
                </div>
               
            </div>
        </>
    )
}

