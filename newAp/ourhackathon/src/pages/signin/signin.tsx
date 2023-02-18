import Link from "next/link";
import {NavBar} from "@/component/navbar";

function Home() {
  return (
      <div>
          <NavBar />

          <div className="container text-black mt-5">
              <div>
                <br>
                </br>
                  <h1>Login</h1>
                  <form action="/register" method="POST">
                    <br>
                    </br>
                      <div className="mb-3">
                          <label htmlFor="InputUsername" className="form-label">Username</label>
                          <input type="Username" className="form-control" name="username" id="username"
                                 aria-describedby="usernameHelp" required/>
                      </div>
                      <div className="mb-3">
                          <label htmlFor="InputPassword" className="form-label">Password</label>
                          <input type="password" className="form-control" name="password" id="password"
                                 aria-describedby="passwordHelp" required/>
                      </div>
                      <p>Don't have an account? <a href='/signup/signup'><u>Register</u></a>
                      </p>
                      <button type="submit" className="btn btn-primary">Login</button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Home