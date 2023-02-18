import Link from 'next/link'
import React from "react";
import {NavBar} from "@/component/navbar";

function Home() {
  return (
      <div>
        <NavBar />

          <div className="container text-black mt-5">
              <div>
                <br>
                </br>
                  <h1>Register</h1>
                  <form action="/register" method="POST">
                    <br>
                    </br>
                      <div className="mb-3">
                          <label htmlFor="InputUsername" className="form-label">Create Username</label>
                          <input type="Username" className="form-control" name="username" id="username"
                                 aria-describedby="usernameHelp" required/>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="InputPassword" className="form-label">Create Password</label>
                          <input type="password" className="form-control" name="password" id="password"
                                 aria-describedby="passwordHelp" required/>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="ReInputPassword" className="form-label">Reenter Password</label>
                          <input type="password" className="form-control" name="password" id="password"
                                 aria-describedby="passwordHelp" required/>
                      </div>
                      <p>Already have an account? <a href='/signin/signin'><u>Login</u></a>
                      </p>
                      <button type="submit" className="btn btn-primary">Register</button>
                  </form>
              </div>
          </div>


          <a className="nav-link active" aria-current="page" href="/">Home</a>
      </div>
  )
}

export default Home